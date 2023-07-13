'use client'

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { boxContainerClass, cancelIconClass, ellipsisStyle, titleBox } from "./SongTitleBox.css";

interface SongTitleBoxProps {
  title: string;
  onClick: () => void;
}

export default function SongTitleBox({ title, onClick }: SongTitleBoxProps) {
  return (
    <div className={boxContainerClass}>
      <div className={titleBox}>
        <p title={title} className={ellipsisStyle}>
          {title}
        </p>
        <FontAwesomeIcon className={cancelIconClass} icon={faXmark} width={20} height={20} onClick={onClick} />
      </div>
    </div>
  );
}
