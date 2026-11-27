import type React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { expenseSchema, type ExpenseData } from "../../schemas/ExpenseSchema";
import API from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useExpense } from "../../context/expenseContext";
import { useState } from "react";

const ExpForm: React.FC = () => {
  const queryClient = useQueryClient();
  const [formKey, setFormKey] = useState<number>(0);

  const { setCurrentPage } = useExpense();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm<ExpenseData>({
    resolver: zodResolver(expenseSchema),
    mode: "onTouched",
    defaultValues: {
      description: "",
      amount: "",
      category: "",
      date: "",
      infoOf: "",
    },
  });

  const infoOfValue = watch("infoOf");

  // 1. AI Category Prediction Mutation
  const predictMutation = useMutation({
    mutationFn: async (description: string) => {
      const response = await API.post("/expenses/predict-category", {
        description,
      });
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.category) {
        setValue("category", data.category, { shouldValidate: true });
      } else {
        setValue("category", "");
      }
    },
    onError: () => {
      // Agar API fail ho toh box khali kar dein taaki user manually type kar sake
      setValue("category", "");
    },
  });

  // 2. Description se cursor hatate hi (onBlur) trigger hone wala function
  const handleDescriptionBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const desc = e.target.value.trim();
    if (!desc || desc.length < 2) return;

    // Agar SALARY select hai toh AI call ki zaroorat nahi
    if (infoOfValue === "SALARY") {
      setValue("category", "Salary", { shouldValidate: true });
      return;
    }

    // Category field mein loading text dikhayein aur error hatayein
    clearErrors("category");
    setValue("category", "✨ Predicting category...");
    predictMutation.mutate(desc);
  };

  // 3. Main Add Expense Mutation
  const expenseMutation = useMutation({
    mutationFn: async (data: ExpenseData) => {
      const response = await API.post("/expenses/addexp", {
        description: data.description,
        category: data.category,
        date: new Date(data.date),
        amount: data.amount,
        infoOf: data.infoOf,
      });

      return response.data;
    },
    onSuccess: () => {
      setCurrentPage(1);
      reset();
      setFormKey((prev) => prev + 1);
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  let apiError: string | null = null;
  if (expenseMutation.error) {
    apiError =
      (expenseMutation.error as any).response?.data?.message ||
      "Something went wrong";
  }

  const onSubmit = (data: ExpenseData) => {
    // Jab tak prediction chal rahi ho tab tak submit na hone dein
    if (predictMutation.isPending) return;
    expenseMutation.mutate(data);
  };

  const inputFields: {
    fieldName: string;
    inputType: string;
    nameId: keyof ExpenseData;
    placeHolder: string;
  }[] = [
    {
      fieldName: "Description",
      inputType: "text",
      nameId: "description",
      placeHolder: "Description (e.g. Petrol, Zomato)",
    },
    {
      fieldName: "Amount",
      inputType: "number",
      nameId: "amount",
      placeHolder: "Amount",
    },
    {
      fieldName: "Category",
      inputType: "text",
      nameId: "category",
      placeHolder: "Category: AI",
    },
    { fieldName: "Date", inputType: "date", nameId: "date", placeHolder: "" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-0 py-0 md:py-1">
      <div>
        <form
          key={formKey}
          onSubmit={handleSubmit(onSubmit)}
          className="sm:px-2 py-0 rounded-2xl mb-2 sm:w-120"
        >
          <div className="text-center text-red-800 min-h-7 w-full font-semibold">
            {apiError && (
              <div className="rounded-2xl bg-amber-100/50 ">{apiError}</div>
            )}
          </div>

          <div>
            <label>Information Of</label>
            <select
              {...register("infoOf")}
              className="rounded-lg bg-slate-700 border border-slate-600 px-4 py-0.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
            >
              <option value="" disabled>
                Select: Expense/Income
              </option>
              <option value="EXPENSE">Expense</option>
              <option value="SALARY">Salary</option>
            </select>

            <div className="text-center text-red-800 min-h-7 w-full font-semibold">
              {errors.infoOf && (
                <p className="rounded-2xl bg-amber-100/50">
                  {errors.infoOf.message}
                </p>
              )}
            </div>

            {inputFields.map((fields, index) => {
              const fieldError = errors[fields.nameId];
              const isCategoryField = fields.nameId === "category";
              const isDescriptionField = fields.nameId === "description";

              // Register options ke saath description par onBlur attach karein
              const fieldRegister = register(fields.nameId, {
                ...(isDescriptionField && {
                  onBlur: handleDescriptionBlur,
                }),
              });

              return (
                <div key={index} className="w-100 sm:w-full ">
                  <label className="block mb-0.5">{fields.fieldName}</label>
                  <div className="relative">
                    <input
                      type={fields.inputType}
                      {...fieldRegister}
                      disabled={isCategoryField && predictMutation.isPending}
                      placeholder={fields.placeHolder}
                      className={`rounded-lg bg-slate-700 border border-slate-600 px-4 py-0.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full ${
                        isCategoryField && predictMutation.isPending
                          ? "opacity-75 italic text-indigo-300"
                          : ""
                      }`}
                    />
                    {/* Category box ke andar right side mein spinner */}
                    {isCategoryField && predictMutation.isPending && (
                      <Loader2
                        className="animate-spin absolute right-3 top-1.5 text-indigo-400"
                        size={16}
                      />
                    )}
                  </div>

                  <div className="text-center text-red-800 min-h-7 w-full font-semibold">
                    {fieldError && (
                      <p className="rounded-2xl bg-amber-100/50">
                        {fieldError.message}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            <button
              type="submit"
              disabled={expenseMutation.isPending || predictMutation.isPending}
              className="btn-primary"
            >
              {expenseMutation.isPending ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Add Expense</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpForm;
