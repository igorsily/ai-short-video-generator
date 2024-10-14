"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Player } from "@remotion/player";
import RemotionVideo, { Video } from "@/remotion/remotion-video";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type PlayerDialogType = {
  playVideo: boolean;
  video: Video | null;
  handleClose?: () => void;
};

const PlayerDialog = ({ playVideo, video, handleClose }: PlayerDialogType) => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [durationInFrame, setDurationInFrame] = useState(100);

  useEffect(() => {
    setOpenDialog(playVideo);
  }, [playVideo]);

  const handleCancelButton = () => {
    router.replace("/dashboard");
    setOpenDialog(false);
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={handleCancelButton}>
      <DialogContent className="bg-white flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold my-6">
            Your video is ready!
          </DialogTitle>
          <DialogDescription>
            <Player
              component={RemotionVideo}
              durationInFrames={Number(durationInFrame.toFixed(0))}
              compositionWidth={300}
              compositionHeight={450}
              fps={30}
              controls={true}
              inputProps={{
                ...video!,
                setDurationInFrame: (frameValue: number) =>
                  setDurationInFrame(frameValue),
              }}
            />
          </DialogDescription>
        </DialogHeader>
        <div
          className="mt-9"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant={"ghost"} onClick={handleCancelButton}>
            Cancel
          </Button>
          <Button>Export</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlayerDialog;
