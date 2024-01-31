"use client";
import Form from "@/app/components/Forms/Form";
import FormInput from "@/app/components/Forms/FormInput";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

const CreateAppsProfile = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { email, password } = useAppSelector((state) => state.loginUser);
  const dispatch = useAppDispatch();
  const onSubmit = async (data: any) => {
    console.log("Login Data", data);
  };
  return (
    <div>
      <h1 className="text-3xl">Create New Apps Profile</h1>
      {/* Contents Publishing */}
      <div className="lg:m-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-1</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-2</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-3</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-4</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-5</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-1</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-2</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-3</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-4</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Site-5</h1>
          </div>
        </div>
      </div>
      {/* Overall Form */}
      <div className="bg-gray-300 p-2 rounded">
        <Form submitHandler={onSubmit}>
          <div>
            <div className="flex items-start text-xl">
              <h1>Overview</h1>
              <h1 className="ml-auto ">Auto Generate, Manual Input</h1>
            </div>
            <FormInput name="overview" type="text" placeholder="Overview" />
          </div>
          <div>
            <div className="flex items-start text-xl">
              <h1>Key Features</h1>
              <h1 className="ml-auto ">Auto Generate, Manual Input</h1>
            </div>
            <FormInput
              name="keyFeatured"
              type="text"
              placeholder="Key Featured"
            />
          </div>
          <div>
            <div className="flex items-start text-xl">
              <h1>Pros</h1>
              <h1 className="ml-auto ">Auto Generate, Manual Input</h1>
            </div>
            <FormInput name="pros" type="text" placeholder="FAQ" />
          </div>
          <div>
            <div className="flex items-start text-xl">
              <h1>Cons</h1>
              <h1 className="ml-auto ">Auto Generate, Manual Input</h1>
            </div>
            <FormInput name="cons" type="text" placeholder="FAQ" />
          </div>
          <div>
            <div className="flex items-start text-xl">
              <h1>FAQ</h1>
              <h1 className="ml-auto ">Auto Generate, Manual Input</h1>
            </div>
            <FormInput name="faq" type="text" placeholder="FAQ" />
          </div>
          <Button type="submit" className="ml-auto bg-gray-400 text-black">
            Submit for Publish
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAppsProfile;
