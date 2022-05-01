interface IRatingComponent {
  content: string;
}

const RatingComponent = ({ content }: IRatingComponent) => {
  return (
    <button
      className="bg-darkBlue rounded-full text-mediumGrey px-5 py-3"
      type="button"
    >
      {content}
    </button>
  );
};

export default RatingComponent;
