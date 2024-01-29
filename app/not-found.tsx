"use client"
import { useRouter } from "next/navigation";
import notFound from "../assets/404page.svg";
import { useEffect } from "react";
import Image from "next/image";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 2000);
   
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2">
        <Image src={notFound} className="w-full h-auto" alt="error page"></Image>
      </div>
    </div>
  );
};

export default NotFound;