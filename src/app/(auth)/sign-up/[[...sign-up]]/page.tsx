import React from "react";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image
          priority={true}
          src={"/login.png"}
          alt={"Imagem de Login do sistema"}
          width={640}
          height={960}
          className="object-contain"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <SignUp />
      </div>
    </div>
  );
};

export default Page;
