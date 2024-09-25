import React, { ReactNode } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import memoji from "../public/assets/memoji.png";

interface Service {
  name: string;
  description: string;
  icon: ReactNode | (() => ReactNode);
}

const Skills = () => {
  const services: Service[] = [
    {
      name: "Experience",
      description:
        "I am working as a Web development Intern at First contact. During my tenure, I specialized in web development, focusing on enhancing user experience and performance",
      icon: () => (
        <i className="fa-regular fa-window-restore bold heading-2 text-[#20bdff]"></i>
      ),
    },
    {
      name: "Developer Skills",
      description:
        "A great knowledge of HTML / CSS, Javascript, React.js , Angular , NextJs . I make responsive applications with Tailwind with interactive UI's designs.",
      icon: () => (
        <i
          className="fa-solid fa-arrow-pointer  text-[#c779d0] bold heading-2"
          aria-hidden="true"
        ></i>
      ),
    },

    {
      name: "Languages Known",
      description:
        "Proficient in languages such as C++, C, Python. Additionally, adept at utilizing tools like Git and GitHub for version control and collaboration.",
      icon: "🎨",
    },
  ];

  return (
    <div className="bg-[#03001e] text-white ">
      <div className="flex justify-start">
        <div className=" w-1/12"></div>
        <div className="line-hr w-[41.7%]"></div>{" "}
      </div>
      <div className="flex justify-start ">
        <div className=" w-1/12"></div>
        <div className="line !text-[#c779d0] w-[41.7%]"></div>{" "}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:ml-16 relative">
          <span className="heading-2 medium text-[#c779d0] text-center ml-28 md:ml-0">
            My Services
          </span>
          <span className=" md:text-[55px] text-center bold flex flex-wrap">
            The most creative intuitive workmate.
          </span>
          <div>
            <img
              src={memoji.src}
              alt="me"
              className=" align-middle md:ml-20 md:mt-20 ml-4 mt-5 "
            />
            <div className="flex gap-5 items-center justify-center">
              <i className="fas fa-code text-[#20bdff] text-[40px] md:text-[70px] bold md:top-[45%] md:absolute"></i>
              <i className="fa-brands fa-css3-alt text-[#9c6cebf3] text-[40px] md:text-[70px] bold md:absolute md:bottom-[40%] md:left-[60%]"></i>
              <i className="fa-brands fa-square-js text-[40px] md:text-[70px] bold text-yellow-400"></i>
              <i className="fa-brands fa-github text-[40px] md:text-[70px] bold text-green-600 md:absolute md:right-[35%]"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-10 mx-auto justify-center items-center px-20 pt-20 ">
          {services.map((service, index) => (
            <div key={index} className="text-white p-6 rounded-lg  card-skills">
              <div className="flex items-center mb-4 gap-3">
                {typeof service.icon === "function" ? (
                  service.icon()
                ) : (
                  <span className="text-4xl mr-4">{service.icon}</span>
                )}
                <h3 className="heading-3 font-bold">{service.name}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
