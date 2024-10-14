import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <AlertDialog open={loading}>
      <VisuallyHidden>
        <AlertDialogTitle />
      </VisuallyHidden>
      <AlertDialogContent className={"bg-white"}>
        <div
          className={"bg-white flex flex-col items-center my-10 justify-center"}
        >
          <Image
            src={"/progress.gif"}
            alt={"Progress loading"}
            width={100}
            height={100}
          />
          <h2>Generating your video.. Do not Refresh</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Loading;
