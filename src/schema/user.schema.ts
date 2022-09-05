import { z } from "zod";

export const Schema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5, "must be 5 character long"),
});

export const LoginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export type IRegister = z.infer<typeof Schema>;
export type ILogin = z.infer<typeof LoginSchema>;