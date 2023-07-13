"use client"

import { InputHTMLAttributes } from "react";
import {
  youtubeInputContainerClass,
  youtubeInputClass,
  loadingIndicatorClass,
} from "./YoutubeInput.css";

interface YoutubeLinkInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading: boolean;
  isValid: boolean;
}

export default function YoutubeLinkInput({
  isLoading,
  isValid,
  ...props
}: YoutubeLinkInputProps) {


  return (
    <div className={youtubeInputContainerClass}>
      <input className={youtubeInputClass} {...props} />
      {isLoading && <div className={loadingIndicatorClass} />}
    </div>
  );
}
