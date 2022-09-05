import { Box, Stack } from "@chakra-ui/react";
import { InputControl, SubmitButton } from "../components";
import { NextPage } from "next";
import { Field, Formik, FormikHelpers } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import { IRegister, Schema } from "../schema/user.schema";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const mutation = trpc.useMutation(["users.signup"]);

  return (
    <div>
      <div>
        <Box as="p" textAlign="center">
          Register Page
        </Box>
        <Formik
          initialValues={initialValues}
          onSubmit={async(values: IRegister) => {
            mutation.mutate(values);
            router.push("/");
          }}
          validationSchema={toFormikValidationSchema(Schema)}
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
              <InputControl
                name="username"
                label="Username"
                inputProps={{ autoComplete: "off" }}
              />
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
      </div>
    </div>
  );
};

export default RegisterPage;
