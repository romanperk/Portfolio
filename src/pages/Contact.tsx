import { BackgroundTextEffect } from "../components/BackgroundTextEffect";
import { PageHeader } from "../components/PageHeader";
import { AnimatedSlides } from "../components/AnimatedSlides";
import { contactSlides } from "../consts/contactSlides";

export const Contact = () => {
  return (
    <div id="contact" className="relative pb-8">
      <BackgroundTextEffect text={"MSG"} />
      <PageHeader text1={"My"} text2={"Contact"} />
      <div className="mx-auto max-w-4xl mt-8">
        <div className="h-96">
          <AnimatedSlides
            slides={contactSlides}
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>
      </div>
    </div>
  );
};
