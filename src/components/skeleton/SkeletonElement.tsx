import { skeletonElementClass } from "./skelton.css";

interface SkeletonElementProps {
  type: "title" | "text" | "profile"
};

export default function SkeletonElement ({type}: SkeletonElementProps) {
  return (
    <div className={skeletonElementClass({ type })} />
  );
};
