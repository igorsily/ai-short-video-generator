import React from "react";
import { Composition } from "remotion";
import RemotionVideo, { Video } from "@/remotion/remotion-video";

export const RemotionRoot = () => {
  const defaultProps = {} as Video;

  return (
    <Composition
      id="Empty"
      component={RemotionVideo}
      durationInFrames={60}
      fps={30}
      width={1280}
      height={720}
      defaultProps={defaultProps}
    />
  );
};
