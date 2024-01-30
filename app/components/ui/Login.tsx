"use client";
import { Card, Button, Typography } from "@material-tailwind/react";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { loginUser } from "@/app/redux/slice/loginSlice";
import Link from "next/link";
type FormValues = {
  email: string;
  password: string;
};

export function Login() {
  const { email, password } = useAppSelector((state) => state.loginUser);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log("Login Data", data);
    dispatch(loginUser(data));
  };

  return (
    <div className="w-[32rem]">
      {/* heading */}
      <div className="flex justify-between items-center">
        <h1 className="bg-blue-200">Logo</h1>
        <Typography variant="h5" color="blue-gray">
          Mystrey Box
        </Typography>
      </div>

      <div className="bg-gray-200 p-4">
        <Card className="bg-white p-4" color="transparent" shadow={false}>
          <Form submitHandler={onSubmit}>
            <FormInput
              name="email"
              type="text"
              size="large"
              label="Email"
              placeholder="name@mail.com"
            />

            <FormInput
              name="password"
              type="password"
              size="large"
              label="Password"
            />

            <Button type="submit" className="mt-6 bg-blue-600" fullWidth>
              Log in
            </Button>
          </Form>
          <div>
            <h1 className="text-center border-b-1 border-indigo-500  mt-2 text-blue-700">
              <Link href="/forget">Forgotten password?</Link>
            </h1>
            <hr className="border-t-2 my-2 " />
            <Button type="submit" className="mx-auto block mt-6 bg-green-600">
              Create new account
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
