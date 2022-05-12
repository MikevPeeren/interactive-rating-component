import type { MouseEventHandler } from "react";

interface IStarComponent {
  keyValue: number;
  content: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const StarComponent = ({
  keyValue,
  content,
  isActive,
  onClick,
}: IStarComponent) => {
  return (
    <button
      key={keyValue}
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

export default StarComponent;
