import { PageHeader } from "../components/PageHeader";
import { InfiniteCarousel } from "../components/InfiniteCarousel";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";

export const Home = () => {
  return (
    <div id="home" className="relative lg:px-8 min-h-screen">
      <BackgroundTextEffect text="HEY" />
      <PageHeader text1="I'm" text2="Roman Perk" />
      <div className="mx-auto max-w-5xl text-center p-8">
        <p className="mt-8 text-lg font-medium text-purple-500 sm:text-xl">
          Frontend Developer | SW Development Student
        </p>
        <p className="mt-8 text-md font-medium text-gray-300 sm:text-xl">
          Bachelor's student in Software Development at Unicorn University,
          React developer at 2N, passionate about programming and continuously
          expanding my knowledge in the field.
        </p>
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-18 sm:pt-24">
          <InfiniteCarousel />
        </div>
      </div>
    </div>
  );
};
