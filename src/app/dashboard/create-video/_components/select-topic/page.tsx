"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { OnUserSelectHandler } from "@/app/dashboard/create-video/page";

const OptionType = {
  CUSTOM_PROMPT: "Custom Prompt",
  RANDOM_AI_STORY: "Random AI Story",
  SCARY_STORY: "Scary Story",
  HISTORICAL_FACTS: "Historical Facts",
  BED_TIME_STORY: "Bed Time Story",
  MOTIVATIONAL: "Motivational",
  FUN_FACTS: "Fun Facts",
};

const SelectTopic = ({
  onUserSelect,
}: {
  onUserSelect: OnUserSelectHandler;
}) => {
  const options = Object.values(OptionType);

  const [selectedOption, setSelectedOption] = useState<string>();

  const handleSelectOption = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    if (selectedOption !== OptionType.CUSTOM_PROMPT) {
      onUserSelect("topic", selectedOption);
    }
  };

  const handleCustomPrompt = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onUserSelect("topic", event.target.value);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl text-primary"> Content</h2>
      <p className="text-gray-500"> What is the topic of your video</p>
      <Select onValueChange={handleSelectOption}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedOption === OptionType.CUSTOM_PROMPT && (
        <Textarea
          className="mt-3"
          placeholder={"Write prompt on witch you want to generate video"}
          onChange={handleCustomPrompt}
        />
      )}
    </div>
  );
};

export default SelectTopic;
