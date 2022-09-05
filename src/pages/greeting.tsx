import { NextPage } from "next";
import { requireAuth } from "../utils/requireAuth";
import { trpc } from "../utils/trpc";

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});
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
