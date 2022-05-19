import type { MouseEventHandler } from "react";

interface IRateComponent {
  keyValue: number;
  content: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const RateComponent = ({
  keyValue,
  content,
  isActive,
  onClick,
}: IRateComponent) => {
  return (
    <button
      key={keyValue}
      className={`rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 hover:bg-orange hover:text-white ${
        isActive ? "bg-mediumGrey text-white" : "bg-darkBlue text-mediumGrey"
      }`}
      type="button"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default RateComponent;
