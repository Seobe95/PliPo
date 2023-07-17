import {
  loadingContainerClass,
  loadingIndicatorClass,
} from "./ProgressBar.css";

interface ProgressBarProps {}

export default function ProgressBar() {
  return (
    <div className={loadingContainerClass}>
      <div className={loadingIndicatorClass} />
    </div>
  );
}
