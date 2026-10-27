import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import API from "../axios";
import { useExpense } from "../context/expenseContext";
import { type LoginFormData, loginSchema, signupSchema, type SignupFormdata } from "../schemas/AuthSchema";

// ==========================================
// 1. USE EXPENSE HOOK
// ==========================================
export const useExpenseHook = () => {
    const { currentPage, limit, search } = useExpense();

    const fetchAllExpenses = async () => {
        const response = await API.get('/expenses/get-all-exp', {
            params: {
                page: currentPage,
                limit: limit,
                search: search
            }
        });
        return response.data?.expensesData || {};
    };
    
    const { data: expensesData = {}, isLoading, error } = useQuery({
        queryKey: ['expenses', currentPage, limit, search],
        queryFn: fetchAllExpenses,
        staleTime: 5 * 60 * 1000,
        retry: false,
    });

    return {
        expenses: expensesData?.expenses || [],
        allExpenses: expensesData,
        totalPages: expensesData?.totalPages || 1,
        totalRows: expensesData?.totalRows || 0,
        totalIncom: expensesData?.totalIncome || 0,
        totalExpense: expensesData?.totalExpense || 0,
        isLoading,
        topLeaders: expensesData?.topLeaders || [],
        error
    };
};

// ==========================================
// 2. USE LOGIN HOOK
// ==========================================
export const loginInputFields: {
  fieldName: string;
  inputType: string;
  nameId: keyof LoginFormData;
  placeHolder: string;
}[] = [
    {
      fieldName: "Email",
      inputType: "email",
      nameId: "email",
      placeHolder: "xyz@domain.com",
    },
    {
      fieldName: "Password",
      inputType: "password",
      nameId: "password",
      placeHolder: "Password",
    },
];

export const useLoginHook = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched'
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      setApiError(null); // Request shuru hote hi purana error clear
      const response = await API.post('/users/login-user', {
        email: data.email,
        password: data.password
      });
      return response.data;
    },
    onSuccess: (serverData) => {
      queryClient.setQueryData(['authUser'], serverData);
      reset();
      navigate('/');
    },
    onError: (error: any) => {
      const serverMessage = error.response?.data?.message;
      if (serverMessage) {
        setApiError(Array.isArray(serverMessage) ? serverMessage.join(", ") : String(serverMessage));
      } else {
        setApiError("Something went wrong");
      }
    }
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return {
    register,
    handleSubmit: hookFormSubmit(onSubmit), // Ek baar wrap karke sahi reference return kiya
    errors,
    inputFields: loginInputFields,
    onSubmit,
    apiError,
    isSubmitting: loginMutation.isPending
  };
};

// ==========================================
// 3. USE SIGNUP HOOK
// ==========================================
export const signupInputFields: {
  fieldName: string;
  inputType: string;
  nameId: keyof SignupFormdata;
  placeHolder: string;
}[] = [
  {
    fieldName: "Full Name",
    inputType: "text",
    nameId: "name",
    placeHolder: "Your Full Name",
  },
  {
    fieldName: "Email",
    inputType: "email",
    nameId: "email",
    placeHolder: "xyz@domain.com",
  },
  {
    fieldName: "Phone",
    inputType: "tel",
    nameId: "phone",
    placeHolder: "Phone",
  },
  {
    fieldName: "Password",
    inputType: "password",
    nameId: "password",
    placeHolder: "Password",
  },
  {
    fieldName: "Confirm Password",
    inputType: "password",
    nameId: "confirmPassword",
    placeHolder: "Confirm Password",
  },
];

export const useSignupHook = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string | null>(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit: hookFormSubmit,
        formState: { errors },
        reset,
    } = useForm<SignupFormdata>({
        resolver: zodResolver(signupSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data: SignupFormdata) => {
        setIsSubmitting(true);
        setApiError(null);
        try {
            const response = await API.post("/users/add-user", {
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: data.password,
            });
            if (response.status === 201 || response.status === 200) {
                reset();
                navigate("/login");
            }
        } catch (error: any) {
            const errorMsg = error.response?.data?.message || "Something is wrong";
            setApiError(errorMsg);
            console.error(errorMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        register,
        handleSubmit: hookFormSubmit(onSubmit),  
        errors,
        isSubmitting,
        apiError,
        onSubmit,
        inputFields: signupInputFields
    };
};
