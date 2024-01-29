"use client"
import { Spinner } from "@material-tailwind/react";

const Loading: React.FC = () => {
  return (
   <div className="h-screen flex justify-center items-center">
    <Spinner className="h-16 w-16 text-gray-900/50" color="indigo" />
   </div>
  );
};

export default Loading;