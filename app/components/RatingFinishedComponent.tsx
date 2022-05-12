interface IRatingFinishedComponent {
  activeRating: number | undefined;
}

const RatingFinishedComponent = ({
  activeRating,
}: IRatingFinishedComponent) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-2/4">
          <img src="/illustration-thank-you.svg" alt="" />
        </div>
        <h1 className="text-orange mt-10 bg-darkBlue px-4 py-2 rounded-3xl">
          {`You selected ${activeRating} out of 5 stars`}
        </h1>
        <h2 className="font-bold text-white text-3xl font-overpass mt-10 mb-4">
          Thank you!
        </h2>
        <p className="text-lightGrey font-normal text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default RatingFinishedComponent;
