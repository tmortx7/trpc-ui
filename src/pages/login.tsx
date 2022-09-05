import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { InputControl, SubmitButton } from "../components";
import { NextPage } from "next";
import { Field, Formik, FormikHelpers } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import { ILogin, LoginSchema } from "../schema/user.schema";
import { signIn } from "next-auth/react";
import { useCallback } from "react";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Flex align="center" justify="center" h="100vh">
        <Formik
          initialValues={initialValues}
          onSubmit={useCallback(async (values: ILogin) => {
            await signIn("credentials", { ...values, callbackUrl: "/" });
          }, [])}
          validationSchema={toFormikValidationSchema(LoginSchema)}
        >
          {({ handleSubmit }) => (
            <Stack
              spacing={5}
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              maxWidth={400}
              p={6}
              m="10px auto"
              as="form"
              onSubmit={handleSubmit as any}
            >
              <Text fontSize="3xl">Login</Text>
              <InputControl
                name="email"
                label="Email"
                inputMode="email"
                inputProps={{ autoComplete: "off" }}
              />
              <InputControl
                name="password"
                label="Password"
                inputProps={{ type: "password" }}
              />
              <SubmitButton>Submit</SubmitButton>
            </Stack>
          )}
        </Formik>
      </Flex>
    </div>
  );
};

export default LoginPage;
