import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="p-3 px-5 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3 ">
        <Image
          src={"/logo.svg"}
          alt={"Ai Short Logo"}
          width={30}
          height={30}
          className="w-auto h-auto"
        />
        <h2 className="font-bold text-xl">Ai Short Video</h2>
      </div>

      <div className="flex items-center gap-3">
        <Button> Dashboard </Button>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
