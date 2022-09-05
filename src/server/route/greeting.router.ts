import redisClient from "../../utils/connectRedis";
import { createRouter } from "../createRouter";

export const greetingRouter = createRouter().query("hello", {
  resolve: async (ctx) => {
    const message = await redisClient.get("tRPC");
    return { message };
  },
});
