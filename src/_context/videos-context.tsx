import React, { createContext, ReactNode, useContext, useState } from "react";
import { Video } from "@/remotion/remotion-video";

export interface VideoContextType {
  videos: Video[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
  fetchVideos: () => Promise<void>;
}

const VideosContext = createContext<VideoContextType | undefined>(undefined);

interface VideosProviderProps {
  children: ReactNode;
}

export const VideosProvider = ({ children }: VideosProviderProps) => {
  const [videos, setVideos] = useState<Video[]>([]);

  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/videos");
      const data = await res.json();
      setVideos(data);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };

  return (
    <VideosContext.Provider value={{ videos, setVideos, fetchVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => {
  const context = useContext(VideosContext);
  if (!context) {
    throw new Error("useVideos must be used within a VideosProvider");
  }
  return context;
};
