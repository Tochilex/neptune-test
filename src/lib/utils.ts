import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authformSchema = (type: string) =>
  z.object({
    // sign up
    firstName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, { message: "First name is required" }),
    lastName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, { message: "Last name is required" }),
    company:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, { message: "Company name is required" }),
    phone:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, { message: "Phone number is required" }),

    // Both sign in and sign up
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  });
