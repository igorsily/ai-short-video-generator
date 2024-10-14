import React, { useState } from "react";
import { Thumbnail } from "@remotion/player";
import RemotionVideo, { Video } from "@/remotion/remotion-video";
import PlayerDialog from "@/remotion/player-dialog";

const Videos = ({ videos }: { videos: Video[] }) => {
  const [playDialog, setPlayDialog] = useState(false);
  const [video, setVideo] = useState<Video | null>(null);

  const handleSelecteVideo = (video: Video) => {
    setVideo(video);
    setPlayDialog(true);
  };

  const handleCloseDialog = () => {
    setPlayDialog(false);
    setVideo(null);
  };

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {videos.map((video: Video) => (
        <div
          key={video.id}
          className="cursor-pointer hover:scale-105 transition-all rounded-xl"
          onClick={() => handleSelecteVideo(video)}
        >
          <Thumbnail
            component={RemotionVideo}
            frameToDisplay={30}
            durationInFrames={120}
            compositionWidth={250}
            compositionHeight={390}
            fps={30}
            style={{
              borderRadius: 15,
            }}
            inputProps={{
              ...video,
            }}
          />
        </div>
      ))}

      <PlayerDialog
        playVideo={playDialog}
        video={video}
        handleClose={handleCloseDialog}
      />
    </div>
  );
};

export default Videos;
