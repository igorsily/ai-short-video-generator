import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TranscriptWord } from "assemblyai";

export type Video = {
  id?: string;
  script?: object;
  audioUrl?: string;
  captions: TranscriptWord[];
  images: string[];
  createdBy?: string;
  setDurationInFrame?: (durationFrame: number) => void;
};

const RemotionVideo = ({
  captions,
  images,
  audioUrl,
  setDurationInFrame,
}: Video) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const getDurationFrames = () => {
    const durationFrame = (captions[captions.length - 1].end / 1000) * fps;

    if (setDurationInFrame) {
      setDurationInFrame(durationFrame);
    }

    return durationFrame;
  };

  const getCurrentCaptions = () => {
    const currentTime = (frame / fps) * 1000;
    const currentCaption = captions.find((word) => {
      return currentTime >= word.start && currentTime <= word.end;
    });

    return currentCaption?.text ?? "";
  };

  return (
    <AbsoluteFill className="bg-black">
      {images.map((image, i) => {
        const startTime = (i * getDurationFrames()) / images.length;
        const duration = getDurationFrames();
        const scale = interpolate(
          frame,
          [startTime, startTime + duration / 2, startTime + duration],
          i % 2 === 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
        return (
          <Sequence
            key={i}
            from={startTime}
            durationInFrames={getDurationFrames()}
          >
            <AbsoluteFill
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img
                src={image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: `scale(${scale})`,
                }}
              />
              <AbsoluteFill
                style={{
                  color: "white",
                  justifyContent: "center",
                  top: undefined,
                  bottom: 40,
                  height: 150,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <h2 className={"text-2xl"}>{getCurrentCaptions()}</h2>
              </AbsoluteFill>
            </AbsoluteFill>
          </Sequence>
        );
      })}

      <Audio src={audioUrl} />
    </AbsoluteFill>
  );
};

export default RemotionVideo;
