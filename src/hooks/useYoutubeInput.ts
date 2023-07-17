"use client";

import { useSearchVideo } from "@/zustand/useSearchVideo";
import { ChangeEvent, useState } from "react";

export default function useYoutubeInput() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const { setYoutubeLink } = useSearchVideo((state) => ({
    setYoutubeLink: state.setYoutubeLink,
  }));

  const youtubeLinkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const videoId = validLinkHandler(value);
    if (videoId) {
      console.log(videoId);
      setYoutubeLink(value);
      setVideoId(videoId);
      return;
    }
    setYoutubeLink(null);
    setVideoId(null);
  };

  const validLinkHandler = (value: string) => {
    let videoId: string | null;

    if (value.includes("youtube.com")) {
      videoId = value.split("v=")[1];
    } else if (value.includes("youtu.be")) {
      videoId = value.split("be/")[1];
    } else {
      videoId = null;
    }

    return videoId;
  };

  const clearInput = () => {
    setYoutubeLink(null);
    setVideoId(null);
  };

  return { videoId, youtubeLinkHandler, clearInput };
}
