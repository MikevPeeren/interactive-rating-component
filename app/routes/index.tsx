export default function Index() {
  return (
    <div className="px-2 bg-veryDarkBlue">
      <div className="py-2 flex flex-1 flex-col justify-center items-center min-h-screen">
        <div
          className="shadow-lg rounded-3xl p-10 w-1/4 flex flex-col"
          style={{
            background:
              "radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)",
          }}
        >
          <svg
            className="bg-darkBlue rounded-full p-4"
            width="24"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="absolute"
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>

          <h1 className="font-bold text-white text-3xl">How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
      </div>
    </div>
  );
}
