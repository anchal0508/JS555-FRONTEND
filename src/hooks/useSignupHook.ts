import { useNavigate } from "react-router-dom";
import { signupSchema, type SignupFormdata } from "../schemas/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import API from "../axios";
import { useState } from "react";


const inputFields: {
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
    placeHolder: "Phone  ",
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
        handleSubmit,
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
            const resonse = await API.post("/users/add-user", {
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: data.password,
            });
            if (resonse.status === 201 || resonse.status === 200) {
                reset();
                navigate("/login");
            }
        } catch (error: any) {
            const errorMsg = error.response?.data?.message || "Somthing is wrong";
            setApiError(errorMsg);
            console.log(errorMsg);
        } finally {
            setIsSubmitting(false);
        }
    };
    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        apiError,
        onSubmit,
        inputFields
    };
}
