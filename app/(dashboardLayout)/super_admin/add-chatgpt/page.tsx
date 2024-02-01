"use client";
import Form from "@/app/components/Forms/Form";
import FormInput from "@/app/components/Forms/FormInput";
import { CustomBreadCrumbs } from "@/app/components/ui/BreadCrumb";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

const AddChatGPTPage = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { email, password } = useAppSelector((state) => state.loginUser);
  const dispatch = useAppDispatch();
  const onSubmit = async (data: any) => {
    console.log("Login Data", data);
  };
  const breadcrumbData = [
    { label: "Home", link: "/" },
    { label: "Category", link: "/category" },
    { label: "Current Page", link: "/category/current" },
  ];
  return (
    <div>
      <CustomBreadCrumbs
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "add-chatgpt",
            link: "/super_admin/add-chatgpt/",
          },
        ]}
      />
      <h1 className="text-3xl">Android Application</h1>
      {/* Overall Form */}
      <div className="bg-gray-300 p-2 rounded">
        <Form submitHandler={onSubmit}>
          <div className="lg:flex items-center">
            <h1 className="w-32 mr-2 text-xl text-l font-bold">Overview</h1>
            <div className="flex-1">
              <FormInput name="overview" type="text" placeholder="Overview" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Key Feature</h1>
            <div className="flex-1">
              <FormInput name="key" type="text" placeholder="Key Featured" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Pros</h1>
            <div className="flex-1">
              <FormInput name="pros" type="text" placeholder="Pros" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">Cons</h1>
            <div className="flex-1">
              <FormInput name="cons" type="text" placeholder="Cons" />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">User Review</h1>
            <div className="flex-1">
              <FormInput
                name="userReview"
                type="text"
                placeholder="User Review"
              />
            </div>
          </div>
          <div className="lg:flex items-center mt-4 lg:mt-0">
            <h1 className="w-32 mr-2 text-l font-bold">FAQ</h1>
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
      <div>
        <Typography
          color="blue-gray"
          className="mr-auto text-2xl font-bold  my-4"
        >
          Content Publishing Period
        </Typography>
      </div>
      <div className="grid ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="flex items-center border-2 border-black">
            <h1 className="flex items-center pr-4 border-r-4 border-black h-full">
              Site-1
            </h1>
            <h1 className="pl-4">40-60 min Interval</h1>
          </div>
          <div className="flex items-center border-2 border-black">
            <h1 className="flex items-center pr-4 border-r-4 border-black h-full">
              Site-2
            </h1>
            <h1 className="pl-4">40-60 min Interval</h1>
          </div>
          <div className="flex items-center border-2 border-black">
            <h1 className="flex items-center pr-4 border-r-4 border-black h-full">
              Site-3
            </h1>
            <h1 className="pl-4">40-60 min Interval</h1>
          </div>
          <div className="flex items-center border-2 border-black">
            <h1 className="flex items-center pr-4 border-r-4 border-black h-full">
              Site-4
            </h1>
            <h1 className="pl-4">40-60 min Interval</h1>
          </div>
          <div className="flex items-center border-2 border-black">
            <h1 className="flex items-center pr-4 border-r-4 border-black h-full">
              Site-5
            </h1>
            <h1 className="pl-4">40-60 min Interval</h1>
          </div>
          <div className="flex items-center border-2 border-black">
            <h1 className="flex items-center pr-4 border-r-4 border-black h-full">
              Site-6
            </h1>
            <h1 className="pl-4">40-60 min Interval</h1>
          </div>
          <div className="flex items-center border-2 border-black">
            <h1 className="flex items-center pr-4 border-r-4 border-black h-full">
              Site-7
            </h1>
            <h1 className="pl-4">40-60 min Interval</h1>
          </div>
          <div className="flex items-center border-2 border-black">
            <h1 className="flex items-center pr-4 border-r-4 border-black h-full">
              Site-8
            </h1>
            <h1 className="pl-4">40-60 min Interval</h1>
          </div>
          <div className="flex items-center border-2 border-black">
            <h1 className="flex items-center pr-4 border-r-4 border-black h-full">
              Site-9
            </h1>
            <h1 className="pl-4">40-60 min Interval</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChatGPTPage;
