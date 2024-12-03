import { object, z } from "zod";


const patternPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/

export const userZodSchema = object({
  username: z
    .string()
    .min(1, { message: "Username must be at least 1 characters" })
    .max(32, { message: "Username is not more 32 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32, { message: "Password is not more 32 characters" })
    .regex(patternPassword,'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'),
  confirmPassword: z
    .string()
    .min(8, { message: "Confirm password  must be at least 8 characters" })
    .max(32, { message: "Confirm password is not more 32 characters" }),
  email: z
    .string()
    .email()
    .endsWith("@gmail.com", { message: "Email not valid" }),
  admin: z.boolean().optional(),
}).refine((data) => data.confirmPassword === data.password, {
  message: "Password do not match",
  path: ["confirmPassword"],
});

export type UserZodInput = z.infer<typeof userZodSchema>;
