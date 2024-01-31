"use client";
import Form from "@/app/components/Forms/Form";
import FormInput from "@/app/components/Forms/FormInput";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

const CreateProfileKeyword = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { email, password } = useAppSelector((state) => state.loginUser);
  const dispatch = useAppDispatch();
  const onSubmit = async (data: any) => {
    console.log("Login Data", data);
  };
  return (
    <div>
      <h1 className="text-3xl">Keyword Research For Content profile</h1>
      {/* Overall Form */}
      <div className="bg-gray-300 p-2 rounded">
        <Form submitHandler={onSubmit}>
          <div className="lg:flex items-center">
            <h1 className="w-32 mr-2 text-xl text-l font-bold">Main Keyword</h1>
            <div className="flex-1">
              <FormInput name="overview" type="text" placeholder="Overview" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Relevant Keyword</h1>
            <div className="flex-1">
              <FormInput name="key" type="text" placeholder="Key Featured" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Profile Title</h1>
            <div className="flex-1">
              <FormInput name="pros" type="text" placeholder="Pros" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Relevant URL</h1>
            <div className="flex-1">
              <FormInput name="cons" type="text" placeholder="Cons" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Add More</h1>
            <div className="flex-1">
              <FormInput name="cons" type="text" placeholder="Cons" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Vendor Name</h1>
            <div className="flex-1">
              <FormInput
                name="userReview"
                type="text"
                placeholder="User Review"
              />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Vendor Website</h1>
            <div className="flex-1">
              <FormInput name="faq" type="text" placeholder="FAQ" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Vendor Email</h1>
            <div className="flex-1">
              <FormInput name="faq" type="text" placeholder="FAQ" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">
              Vendor Phone or WhatsApp
            </h1>
            <div className="flex-1">
              <FormInput name="faq" type="text" placeholder="FAQ" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">
              Vendor Social Network
            </h1>
            <div className="flex-1">
              <FormInput name="faq" type="text" placeholder="FAQ" />
            </div>
          </div>
          <Button type="submit" className="mt-6 bg-blue-600" fullWidth>
            Generate
          </Button>
        </Form>
      </div>

      {/* Contents Publishing */}
      
      <div className="grid ">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="flex items-center justify-center border-2 border-black">
            <h1>All Content Creation</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Key Features</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Pros</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Cons</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Faq</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>All meta Creation</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Key Features</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Pros</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>Cons</h1>
          </div>
          <div className="flex items-center justify-center border-2 border-black">
            <h1>FAQ</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfileKeyword;
