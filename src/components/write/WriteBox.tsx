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
import { useWritePost } from "@/zustand/useWritePost";
import ProgressBar from "../base/ProgressBar";

export default function WriteBox() {
  const { videoId, youtubeLinkHandler, clearInput } = useYoutubeInput();
  const { setText, contents } = useEditorWrite((state) => ({
    setText: state.setText,
    contents: state.contents,
  }));
  const { isWriteLoading, write } = useWritePost((state) => ({
    isWriteLoading: state.isLoading,
    write: state.postApiHandler,
  }));
  const { user } = useAuthManegement((state) => ({ user: state.user }));
  const {
    isLoading,
    search,
    title,
    clearTitle,
    isValidYoutubeLink,
    youtubeLink,
    setYoutubeLink,
  } = useSearchVideo((state) => ({
    isLoading: state.isLoading,
    title: state.title,
    youtubeLink: state.youtubeLink,
    isValidYoutubeLink: state.isValidYoutubeLink,
    search: state.search,
    clearTitle: state.clearTitle,
    setYoutubeLink: state.setYoutubeLink,
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

  const postWriteHandler = async () => {
    try {
      await write({ contents, youtubeLink: youtubeLink as string });
      clearInput();
      clearTitle();
    } catch (e) {
      console.log("포스트 작성 실패", e);
    }
  };

  if (user) {
    return (
      <div className={editorClass}>
        {isWriteLoading ? (
          <ProgressBar />
        ) : (
          <>
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
              <Button
                color="primary"
                size="small"
                disabled={isValidYoutubeLink ? false : true}
                onClick={postWriteHandler}
              >
                작성하기
              </Button>
            </div>
          </>
        )}
      </div>
    );
  } else {
    return <AuthBox />;
  }
}
