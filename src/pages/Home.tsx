import { PageHeader } from "../components/PageHeader";
import { InfiniteCarousel } from "../components/InfiniteCarousel";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";

export const Home = () => {
  return (
    <div id="home" className="relative lg:px-8 min-h-screen">
      <BackgroundTextEffect text="HEY" />
      <PageHeader text1="I'm" text2="Roman Perk" />
      <div className="mx-auto max-w-5xl text-center p-8">
        <p className="mt-8 text-sm font-medium text-purple-500 sm:text-xl">
          Full Stack developer at 2N | Barchelor's degree in SW Development
        </p>
        <p className="mt-8 text-sm font-medium text-gray-300 sm:text-xl text-center">
          Bachelor of Software Development from Unicorn University, where I
          gained a strong foundation in programming and software engineering.
          Motivated and passionate about software development Currently working
          at 2N as a Full Stack Developer, primarily focused on frontend
          development, while also contributing to the backend side of My2N
          platform.
        </p>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-18 sm:pt-24">
          <InfiniteCarousel />
        </div>
      </div>
    </div>
  );
};
