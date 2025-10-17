import { TimeLine } from "../components/TimeLine";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";
import { PageHeader } from "../components/PageHeader";

export const Experience = () => {
  const timeLineData = {
    items: [
      {
        date: "July, 2025 - Present",
        header: "Full Stack Developer primarly focused on Frontend",
        employer: "2N TELEKOMUNIKACE a.s.",
        type: "Full-time",
        text: "Having completed my Bachelor's degree, I'm now expanding my skills in software development, contributing to both frontend and backend parts of My2N with backend work mainly in Java, WebFlux and Kafka.",
      },
      {
        date: "July, 2024 - July, 2025",
        header: "Junior React Developer",
        employer: "2N TELEKOMUNIKACE a.s.",
        type: "Part-time",
        text:
          "The role involves contributing to Frontend codebase of the My2N website, cooperating with the team (Backend, QA, Scrum master, PO)" +
          " using Jira and Agile form of development (Stand-ups, Refinements, Estimations, User Story mappings etc.). The stack includes React in JS (new code in TS) with MUI, React Hook Form, Redux, Redux Toolkit, Jest testing library and GitLab.",
      },
      {
        date: "September, 2022 - June, 2025",
        header: "SW Development Bachelor's degree",
        employer: "Unicorn University",
        type: "Day studium",
        text:
          "I am Bachelor of Software Development at Unicorn University." +
          " I've gained knowledge in fields such as React.js, JavaScript, Java, AI, Project Management, Mathematics etc. I have worked with my colleagues on a few group projects (eg. video library and temperature tracking using IoT device). Successfuly defended my bachelor's work on Comparison of component libraries for development in React.",
      },
      {
        date: "October, 2021 - June, 2022",
        header: "Promoter for Acer and Microsoft at Alza.cz",
        employer: "Acer s.r.o.",
        type: "Part-time",
        text: "Work included training on new products regarding the brand Acer, Microsoft and Intel.",
      },
    ],
  };

  return (
    <div id="experience" className="relative lg:px-8 min-h-screen">
      <BackgroundTextEffect text={"EXP"} />
      <PageHeader text1={"My"} text2={"Experience"} />
      <div className="mx-auto max-w-4xl p-4 flex flex-col">
        <TimeLine data={timeLineData} />
      </div>
    </div>
  );
};
