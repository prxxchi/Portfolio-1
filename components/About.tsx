import React from "react";
import AboutMeCard from "./AboutMeCard";
import memoji from "../public/assets/memo.png";
interface About {
  title: string;
  description: string;
}
const About = () => {
  const about: About[] = [
    {
      title: "Education",
      description:
        "Computer Science UnderGraduate at Aligarh College of Engineering and Technology",
    },
    {
      title: "Hackathon",
      description:
        "Participated in Devfolio Hackathon 2023, showcasing problem-solving skills and innovative thinking. ",
    },
    {
      title: "Achievements",
      description:
        "Achieved Ninja dominator status on Coding ninja . ",
    },
    {
      title: "Problem Solving",
      description:
        "With a track record of solving over 1000 problems across various coding platforms, I demonstrate a strong commitment to continuous learning and improvement.",
    },
  ];
  return (
    <div className="bg-[#03001e]">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <span className="text-[#fbd485] heading-3 font-medium opacity-[60%]">
          About Me
        </span>
        <span className="text-white text-[50px] font-semibold text-center">
          Welcome to Prachi's World{" "}
        </span>
      </div>
      <div className="flex flex-col md:flex-row p-16 justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {about.map((item, index) => (
            <AboutMeCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <img src={memoji.src} alt="me" />
      </div>
      <div className="flex flex-col items-center justify-center mt-4 gap-1 pb-8">
        <span className="text-white  heading-1 font-medium text-center">
          Multitalented. Intuitive. Dedicated.{" "}
        </span>
        <a href="https://github.com/prxxchi">
          <span className="heading-3 font-medium text-white opacity-[60%]">
            Wanna know more? Visit my Instagram
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
