import SkeletonElement from "./SkeletonElement";
import { skeletonContainerClass } from "./skelton.css";

interface SkeletonWriteBoxProps {};

export default function SkeletonWriteBox () {
  return (
    <div className={skeletonContainerClass}>
      <SkeletonElement type="text"/>
      <SkeletonElement type="text"/>
    </div>
  );
};
