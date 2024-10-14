"use client";

import { useState } from "react";
import { OnUserSelectHandler } from "@/app/dashboard/create-video/page";
import Image from "next/image";
import clsx from "clsx";

const SelectStyle = ({
  onUserSelect,
}: {
  onUserSelect: OnUserSelectHandler;
}) => {
  const options = [
    {
      name: "Realistic",
      image: "/realistic.png",
    },
    {
      name: "Cartoon",
      image: "/cartoon.jpg",
    },
    {
      name: "Water Color",
      image: "/watercolor.jpg",
    },
    {
      name: "GTA",
      image: "/gta.jpg",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  const handleSelectOption = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    onUserSelect("imageStyle", selectedOption);
  };

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-primary"> Style</h2>
      <p className="text-gray-500"> Select your video style</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-3">
        {options.map(({ name, image }) => (
          <div
            key={name}
            // className="relative hover:scale-105 transition-all duration-300 cursor-pointer"
            className={clsx(
              "relative hover:scale-105 transition-all  cursor-pointer rounded-xl",
              { "border-4 border-primary rounded-md": selectedOption === name },
            )}
          >
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="h-48 object-cover rounded-md w-full"
              onClick={() => handleSelectOption(name)}
            />
            <h2 className="absolute p-1 bg-black bg-opacity-40 bottom-0 w-full text-white text-center rounded-b-md">
              {name}
            </h2>
          </div>
        ))}
      </div>
      {/*<Select onValueChange={handleSelectOption}>*/}
      {/*  <SelectTrigger className="w-full mt-2 p-6 text-lg">*/}
      {/*    <SelectValue placeholder="Content Type" />*/}
      {/*  </SelectTrigger>*/}
      {/*  <SelectContent>*/}
      {/*    {options.map((item) => (*/}
      {/*      <SelectItem key={item.name} value={item.name}>*/}
      {/*        {item.name}*/}
      {/*      </SelectItem>*/}
      {/*    ))}*/}
      {/*  </SelectContent>*/}
      {/*</Select>*/}
    </div>
  );
};

export default SelectStyle;
