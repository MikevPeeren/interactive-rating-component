import type { MouseEventHandler } from "react";

interface IRatingComponent {
  key: number;
  content: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const RatingComponent = ({
  key,
  content,
  isActive,
  onClick,
}: IRatingComponent) => {
  return (
    <button
      key={key}
      className={`rounded-full  px-5 py-3 hover:bg-orange hover:text-white ${
        isActive ? "bg-mediumGrey text-white" : "bg-darkBlue text-mediumGrey"
      }`}
      type="button"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default RatingComponent;
