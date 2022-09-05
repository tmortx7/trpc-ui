import { createRouter } from "../createRouter";
import { greetingRouter } from "./greeting.router";
import { userRouter } from "./user.router";


export const appRouter = createRouter()
  .merge("users.", userRouter)
  .merge("greetings.", greetingRouter)


export type AppRouter = typeof appRouter;