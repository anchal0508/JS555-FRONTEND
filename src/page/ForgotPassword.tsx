import type React from "react";
import { useForm } from "react-hook-form";
import {
  forgotPasswordSchema,
  type ForgotPasswordData,
} from "../schemas/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../axios";
import { Loader2 } from "lucide-react";

const ForgotPassword: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onTouched",
  });
  const onSubmit = async (data: ForgotPasswordData) => {
    setIsSubmitting(true);
    setApiError(null);
    try {
      const resonse = await API.post("/users/login-user", {
        email: data.email,
      });
      if (resonse.status === 200) {
        reset();
        navigate("/");
      }
    } catch (error: any) {
      const msg = error.response?.data?.message || "Somthing is wrong";
      setApiError(msg);
      console.log(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields: {
    fieldName: string;
    inputType: string;
    nameId: keyof ForgotPasswordData;
    placeHolder: string;
  }[] = [
    {
      fieldName: "Email",
      inputType: "email",
      nameId: "email",
      placeHolder: "xyz@domain.com",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-6 md:py-12">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border px-2 py-2 rounded-2xl shadow-2xl shadow-blue-400 bg-blue-800/30 mb-2"
        >
          <h2 className="text-3xl text-center font-bold">
            Request Password Reset
          </h2>
          <div className="text-center text-red-800 min-h-7 w-80 font-semibold">
            {apiError && (
              <div className="rounded-2xl bg-amber-100/50 ">{apiError}</div>
            )}
          </div>

          <div>
            {inputFields.map((fields, index) => {
              const fieldError = errors['email'];

              return (
                <div key={index}>
                  <label className="block  mb-1">{fields.fieldName}</label>

                  <input
                    type={fields.inputType}
                    {...register('email')}
                    placeholder={fields.placeHolder}
                    className="rounded-lg bg-slate-700 border w-full border-slate-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="text-center text-red-800   min-h-7 w-80 font-semibold">
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
              disabled={isSubmitting}
              className=" btn-primary"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Reqeuest </span>
              )}
            </button>
          </div>
        </form>
        <div className="flex justify-between w-full text-center text-2xl font-semibold">
          <Link to="/signup">SignUp </Link>
          <Link to="/login">Login </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
