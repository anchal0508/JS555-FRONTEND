import { z } from 'zod';

export const expenseSchema = z.object({
  description: z.string()
    .min(1, "Description is required"),

  amount: z.string()
    .min(1, "Expense amount is required"),

  category: z.string()
    .min(1, "Category is required"),

   infoOf: z.string().min(1, 'Please select one Option: F'),

  date: z.string().min(1, { message: "Pelase enter a valid date" }),
});

export type ExpenseData = z.infer<typeof expenseSchema>;
