export const Home = () => {
  return (
    <div id="home" className="relative isolate lg:px-8">
      <h1 className="absolute text-[15rem] font-extrabold text-gray-800 opacity-20 top-2/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        HEY
      </h1>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-700 to-indigo-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-42 lg:py-52 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-6xl">
          I'm
        </h1>
        <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl">
          Roman Perk
        </h1>
        <p className="mt-8 text-lg font-medium text-purple-400 sm:text-xl">
          Frontend Developer | SW Development Student
        </p>
        <p className="mt-8 text-md font-medium text-gray-300 sm:text-xl">
          Bachelor's student in Software Development at Unicorn University,
          passionate about programming and continuously expanding my knowledge
          in the field.
        </p>
      </div>
    </div>
  );
};
