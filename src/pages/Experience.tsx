import { TimeLine } from "../components/TimeLine";
import { BackgroundTextEffect } from "../components/BackgroundTextEffect";
import { PageHeader } from "../components/PageHeader";

export const Experience = () => {
  const timeLineData = {
    dates: [
      "October, 2021 - June, 2022",
      "September, 2022 - expected June, 2025",
      "July, 2024 - Present",
    ],
    headers: [
      "Promoter for Acer and Microsoft at Alza.cz",
      "SW Development student at Unicorn University",
      "Part-time Junior React Developer at 2N Telekomunikace a.s.",
    ],
    texts: [
      "Work included training on new products regarding the brand Acer, Microsoft and, for example, Intel.",
      "I am a 3rd year student at Unicorn University, majoring in Software Development." +
        " I am gaining knowledge in fields such as React.js, JavaScript, Java, AI, Project Management, Mathematics etc. I have worked with my colleagues on a few group projects (fe. video library and temperature tracking using IoT device). Currently doing a bachelor's work on Comparison of component libraries for development in React.",
      "The role involves contributing to Frontend codebase of the My2N website, cooperating with the team (Backend, QA, Scrum master, PO)" +
        " using Jira and Agile form of development (Stand-ups, Refinements, Estimations, User Story mappings etc.). The stack includes React in JS (new code in TS) with MUI, React Hook Form, Redux, Redux Toolkit, Jest testing library and GitLab.",
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
