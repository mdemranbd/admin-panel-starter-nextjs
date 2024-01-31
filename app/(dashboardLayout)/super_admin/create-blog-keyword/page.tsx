"use client"
import Form from '@/app/components/Forms/Form';
import FormInput from '@/app/components/Forms/FormInput';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const CreateBlogKeywords = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { email, password } = useAppSelector((state) => state.loginUser);
    const dispatch = useAppDispatch();
    const onSubmit = async (data: any) => {
      console.log("Login Data", data);
    };
    return (
        <div>
            <h1 className="text-3xl">Android Application</h1>
      {/* Overall Form */}
      <div className="bg-gray-300 p-2 rounded">
      <Form submitHandler={onSubmit}>
        <div className="lg:flex items-center">
          <h1 className="w-32 mr-2 text-xl text-l font-bold">Main keyword</h1>
          <div className="flex-1">
            <FormInput name="mainKeyword" type="text" placeholder="Overview" />
          </div>
        </div>
        <div className="lg:flex items-center mt-4 lg:mt-0">
          <h1 className="w-32 mr-2 text-l font-bold">Relevant Keyword</h1>
          <div className="flex-1">
            <FormInput name="relevantKeyword" type="text" placeholder="Key Featured" />
          </div>
        </div>
        <div className="lg:flex items-center mt-4 lg:mt-0">
          <h1 className="w-32 mr-2 text-l font-bold">Relevant URL</h1>
          <div className="flex-1">
            <FormInput name="relevantURL" type="text" placeholder="URL" />
          </div>
        </div>
        <div className='flex items-center justify-center'>
        <Button type="submit" className="m-6 bg-gray-500 text-black" >
          Content Creation
        </Button>
        <Button type="submit" className="m-6 bg-gray-500 text-black" >
          Meta Creation
        </Button>
        </div>
      </Form>
      </div>

        </div>
    );
};

export default CreateBlogKeywords;