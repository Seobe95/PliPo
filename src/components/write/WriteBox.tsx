"use client";

import { editorClass, subContainer } from "./Editor.css";
import Button from "../base/Button";
import Editor from "./Editor";
import YoutubeLinkInput from "./YoutubeLinkInput";
import useYoutubeInput from "@/hooks/useYoutubeInput";
import { useEditorWrite } from "@/zustand/useEditorWrite";
import { useEffect } from "react";
import { useSearchVideo } from "@/zustand/useSearchVideo";
import SongTitleBox from "./SongTitleBox";
import useAuthManegement from "@/zustand/useAuthManegement";
import AuthBox from "./AuthBox";
import SkeletonWriteBox from "../skeleton/SkeletonWriteBox";

export default function WriteBox() {
  const { videoId, youtubeLinkHandler } = useYoutubeInput();
  const { setText } = useEditorWrite((state) => ({ setText: state.setText }));
  const { user } = useAuthManegement((state) => ({ user: state.user }));
  const { isLoading, search, title, clearTitle } = useSearchVideo((state) => ({
    isLoading: state.isLoading,
    title: state.title,
    search: state.search,
    clearTitle: state.clearTitle,
  }));

  useEffect(() => {
    const searchVideo = async () => {
      if (videoId) {
        await search(videoId);
      } else {
        clearTitle();
      }
    };
    searchVideo();
  }, [videoId]);

  if (user) {
    return (
      <div className={editorClass}>
        <Editor setText={setText} />
        <div className={subContainer}>
          {title ? (
            <SongTitleBox title={title} onClick={clearTitle} />
          ) : (
            <YoutubeLinkInput
              isLoading={isLoading}
              isValid={false}
              placeholder="Youtube Link"
              onChange={youtubeLinkHandler}
            />
          )}
          <Button color="primary" size="small">
            작성하기
          </Button>
        </div>
      </div>
    );
  } else {
    return <AuthBox />
  }
}
