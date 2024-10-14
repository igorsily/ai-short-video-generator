"use client";

import React, { useState } from "react";
import SelectTopic from "@/app/dashboard/create-video/_components/select-topic/page";
import SelectStyle from "@/app/dashboard/create-video/_components/select-style/page";
import SelectDuration from "@/app/dashboard/create-video/_components/select-duration/page";
import { Button } from "@/components/ui/button";
import Loading from "@/app/dashboard/create-video/_components/loading/page";
import PlayerDialog from "@/remotion/player-dialog";
import { Video } from "@/remotion/remotion-video";

export type OnUserSelectHandler = (
  fieldName: string,
  value: string | number,
) => void;

const CreateVideo = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<Video>({} as Video);
  const [playerVideo, setPlayerVideo] = useState(false);
  // const { videos, setVideos } = useContext(VideoContext);

  const onHandleInputChange = (fieldName: string, value: string | number) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleCreateVideo = async () => {
    setLoading(true);
    const body = JSON.stringify({
      video: {
        ...formData,
      },
    });

    const videoResponse = await fetch("/api/videos", {
      method: "POST",
      body,
    });

    const { video } = await videoResponse.json();

    setVideo(video);
    setPlayerVideo(true);
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center">
        Create Video
      </h2>

      <div className="mt-10 shadow-md p-10">
        {/*select topic*/}
        <SelectTopic onUserSelect={onHandleInputChange} />
        {/*select style*/}
        <SelectStyle onUserSelect={onHandleInputChange} />
        {/*  Duration */}
        <SelectDuration onUserSelect={onHandleInputChange} />
        {/*create button*/}
        <Button
          className="mt-10 w-full"
          onClick={handleCreateVideo}
          disabled={formData.length < 2}
        >
          {" "}
          Create Short Video
        </Button>

        <Loading loading={loading} />

        <PlayerDialog playVideo={playerVideo} video={video} />
      </div>
    </div>
  );
};

export default CreateVideo;
