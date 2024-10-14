"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EmptyState from "@/app/dashboard/_components/empty-state";
import Link from "next/link";
import Videos from "@/app/dashboard/_components/videos";
import { useVideos } from "@/_context/videos-context";
import { useEffect } from "react";

const DashboardPage = () => {
  const { videos, fetchVideos } = useVideos();

  useEffect(() => {
    void fetchVideos();
  }, [fetchVideos]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-primary">Dashboard</h2>
        <Link href={"dashboard/create-video"}>
          <Button className="flex items-center gap-1">
            {" "}
            <Plus width={20} height={20} /> Create video
          </Button>
        </Link>
      </div>

      {/*Empty State*/}
      {videos?.length === 0 && <EmptyState />}
      {videos?.length > 0 && <Videos videos={videos} />}
    </div>
  );
};

export default DashboardPage;
