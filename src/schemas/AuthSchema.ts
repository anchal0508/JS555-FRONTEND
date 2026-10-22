
import { z } from 'zod';


// =================================================================
//                        Sign-Up Schema
// =================================================================

export const signupSchema = z.object({

    name: z.string()
        .min(3, 'Name should be atleast 3 Characters')
        .max(50, 'it can not be more the 50 characters'),

    email: z.string()
        .min(1, "Email id is Required")
        .pipe(z.email("Please enter a valid email id")),

    phone: z
        .string()
        .min(1, "Phone number is required")
        .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),

    password: z
        .string()
        .min(8, "Minimum 8 characters are required")
        .regex(/[A-Z]/, "Must contain atleast One Capital letter")
        .regex(/[0-9]/, "Must contain atleast One number"),

    confirmPassword: z
        .string()
        .min(1, "Confirm Password is required")

})

    .refine((data) => data.password === data.confirmPassword, {
        message: "Password do not matched",
        path: ['confirmPassword'],
    });

export type SignupFormdata = z.infer<typeof signupSchema>

// =================================================================
//                        Login Schema
// =================================================================


export const loginSchema = z.object({
    email: z.string()
        .min(1, 'Email is required')
        .pipe(z.email("Plese enter a valid email address")),

    password: z.string().min(1, "Please enter your Password")
});

export type LoginFormData = z.infer<typeof loginSchema>;


// =================================================================
//                        Forgot Password Schema
// =================================================================

export const forgotPasswordSchema = z.object({
    email: z.string().min(1, "Email ID is requried").pipe(z.email("Please enter a valid email ID"))
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;