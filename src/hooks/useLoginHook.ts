import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { type LoginFormData, loginSchema } from "../schemas/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import API from "../axios";


const inputFields: {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,

  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched'
  });

 
  const loginMutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
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
  });

 let apiError: string | null = null;
  if (loginMutation.error) {
    const serverMessage = (loginMutation.error as any).response?.data?.message;
    if (serverMessage) {
      apiError = Array.isArray(serverMessage) 
        ? serverMessage.join(", ") 
        : String(serverMessage);
    } else {
      apiError = "Something went wrong";
    }
  }

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return {
    register,
    handleSubmit: handleSubmit((data) => loginMutation.mutate(data)),
    errors,
    inputFields,
    onSubmit,
    apiError,
    isSubmitting: loginMutation.isPending
  }
}


