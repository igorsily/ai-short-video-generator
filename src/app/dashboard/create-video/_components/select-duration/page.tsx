"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { OnUserSelectHandler } from "@/app/dashboard/create-video/page";

const SelectDuration = ({
  onUserSelect,
}: {
  onUserSelect: OnUserSelectHandler;
}) => {
  const options = [
    {
      duration: "15",
      text: "15 Seconds",
    },
    {
      duration: "30",
      text: "30 Seconds",
    },
    {
      duration: "45",
      text: "45 Seconds",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  const handleSelectOption = (selectedOption: string) => {
    setSelectedOption(selectedOption);

    onUserSelect("duration", selectedOption);
  };

  return (
    <div className="mt-7 ">
      <h2 className="font-bold text-2xl text-primary"> Duration</h2>
      <p className="text-gray-500"> Select the duration of your video</p>
      <Select onValueChange={handleSelectOption}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Duration" />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ duration, text }) => (
            <SelectItem key={duration} value={duration}>
              {text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDuration;
