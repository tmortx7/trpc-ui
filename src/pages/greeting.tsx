import { NextPage } from "next";
import { trpc } from "../utils/trpc";

const GreetingPage: NextPage = () => {
  const { data, isLoading, error } = trpc.useQuery(["greetings.hello"]);

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>Something went wrong... booooo</div>;
  }
  return <div>{data?.message}</div>;
};

export default GreetingPage;
