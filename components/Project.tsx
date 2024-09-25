import React from "react";
import res from "../public/assets/rest.gif";
import ecom from "../public/assets/ecom.png";

interface Projects {
  title: string;
  githubLink: string;
  imageSrc: string;
}

const projects: Projects[] = [
  {
    title: "Travel Partner APP",
    githubLink:
      "https://github.com/prxxchi/travelpartnerapp",
    imageSrc: res.src, // assuming res.src is defined elsewhere
  },
  {
    title: "AVL tree range query",
    githubLink: "https://github.com/prxxchi/AVLTreeRangeQuery",
    imageSrc: ecom.src, // assuming ecom.src is defined elsewhere
  },
];
const Project = () => {
  return (
    <div className="bg-[#03001e]">
      <div className="hidden md:block">
        <div className="flex justify-start ">
          <div className=" w-[49.2%]"></div>
          <div className="line-hr w-[25.7%]"></div>
        </div>
        <div className="flex justify-start ">
          <div className=" w-[49.1%]"></div>
          <div className="line !text-[#c779d0] w-[41.7%]"></div>{" "}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="heading-2 text-[#0ed2f7] bold-1"> My Projects</span>
        <span className="text-white text-4xl md:text-[70px] bold text-center">
          A selection of my best projects.
        </span>
        <span className="text-white heading-1 font-medium">
          (including this website)
        </span>
      </div>
      <div className="grid grid-cols-2 gap">
        {projects.map((project, index) => (
          <div key={index} className="mx-10 mt-2 flex flex-col gap-2">
            <a href={project.githubLink} target="_blank">
              <img
                src={project.imageSrc}
                alt="project"
                className="w-[90%] border-[#20bdff] border-4 rounded-[50%] hover:scale-105 cursor-pointer"
              />
            </a>
            <span className="text-white heading-3 semibold text-center">
              {project.title}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-4 gap-1">
        <span className="text-white opacity-[60%] heading-3 font-medium">
          Curious about the process?{" "}
        </span>
        <a href="https://github.com/prxxchi">
          <span className="heading-3 font-medium text-[#a5fecb]">
            Visit my Github
          </span>
        </a>
        <span className="line mt-4"></span>
      </div>
    </div>
  );
};

export default Project;
