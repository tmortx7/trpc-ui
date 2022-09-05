import { z } from "zod";

export const Schema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5, "must be 5 character long"),
});
export type IRegister = z.infer<typeof Schema>;