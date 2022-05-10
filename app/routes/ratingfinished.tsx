import { useLocation } from "react-router-dom";

import banner from "../images/illustration-thank-you.svg";

export default function RatingFinished() {
  return (
    <div className="px-2 bg-veryDarkBlue">
      <div className="py-2 flex flex-1 flex-col justify-center items-center min-h-screen">
        <div
          className="shadow-lg rounded-3xl p-10 w-full sm:w-2/4 md:w-2/4 lg:w-2/5 xl:w-1/4 flex flex-col items-center text-center"
          style={{
            background:
              "radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)",
          }}
        >
          <div className="w-2/4">
            <img src="/illustration-thank-you.svg" alt="" />
          </div>
          <h1 className="text-orange mt-10 bg-darkBlue px-4 py-2 rounded-3xl">
            You selected 4 out of 5
          </h1>
          <h2 className="font-bold text-white text-3xl font-overpass mt-10 mb-4">
            Thank you!
          </h2>
          <p className="text-lightGrey font-normal text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}
