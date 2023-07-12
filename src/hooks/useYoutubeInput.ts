"use client";

import { ChangeEvent, useState } from "react";

export default function useYoutubeInput() {
  const [videoId, setVideoId] = useState<string | null>(null);

  const youtubeLinkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const videoId = validLinkHandler(value);
    if (videoId) {
      setVideoId(videoId);
      return;
    }
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

  return { videoId, youtubeLinkHandler };
}
