import { useState } from "react";

import { useNavigate } from "react-router-dom";

import RatingComponent from "~/components/RatingComponent";

export default function Index() {
  const [activeRating, setActiveRating] = useState<number>();

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("../ratingFinished", {
      replace: true,
      state: { activeRating },
    });
  };

  return (
    <div className="px-2 bg-veryDarkBlue">
      <div className="py-2 flex flex-1 flex-col justify-center items-center min-h-screen">
        <div
          className="shadow-lg rounded-3xl p-10 w-full sm:w-2/4 md:w-2/4 lg:w-2/5 xl:w-1/4 flex flex-col"
          style={{
            background:
              "radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)",
          }}
        >
          <div className="bg-darkBlue rounded-full p-4 w-12 h-12">
            <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                className="absolute"
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </div>

          <h1 className="font-bold text-white text-3xl font-overpass mt-10 mb-4">
            How did we do?
          </h1>
          <p className="text-lightGrey font-normal">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="flex flex-row justify-between mt-6 flex-wrap gap-2">
            {[...Array(5)].map((_item, index) => {
              return (
                <RatingComponent
                  key={index}
                  keyValue={index}
                  content={String(index + 1)}
                  isActive={activeRating === index + 1}
                  onClick={() => {
                    setActiveRating(index + 1);
                  }}
                />
              );
            })}
          </div>

          <button
            type="submit"
            className="mt-8 w-full text-white bg-orange rounded-3xl p-3 uppercase tracking-widest hover:bg-white hover:text-orange"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
