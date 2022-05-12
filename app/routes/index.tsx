import { useState } from "react";

import RatingComponent from "~/components/RatingComponent";
import RatingFinishedComponent from "~/components/RatingFinishedComponent";

export default function Index() {
  const [activeRating, setActiveRating] = useState<number>();

  const onSubmit = (activeRating: number | undefined) => {
    if (activeRating) setActiveRating(activeRating);
  };

  return (
    <div className="px-2 ">
      <div className="py-2 flex flex-1 flex-col justify-center items-center min-h-screen">
        <div
          className="shadow-lg rounded-3xl p-10 w-full sm:w-2/4 md:w-2/4 lg:w-2/5 xl:w-1/4 flex flex-col"
          style={{
            background:
              "radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)",
          }}
        >
          {!activeRating && <RatingComponent onSubmit={onSubmit} />}
          {activeRating && (
            <RatingFinishedComponent activeRating={activeRating} />
          )}
        </div>
      </div>
    </div>
  );
}
