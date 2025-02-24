export const Contact = () => {
  return (
    <div id="contact" className="relative isolate lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(24.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 60.7% 2%, 72.5% 82.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 75.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 87.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1055/578] w-[36.125rem] -translate-x-1/2 rotate-[180deg] bg-gradient-to-tr from-pink-700 to-indigo-700 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-42 lg:py-52">
        <h2 className="text-3xl font-semibold text-center text-gray-100">
          My Contact
        </h2>
        <div className="mt-6 text-center">
          <p className="text-gray-400">You can find me on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://github.com/romanperk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/roman-perk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
