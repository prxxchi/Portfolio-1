import React from "react";
import me from "../public/assets/me.png";
const Intro = () => {
  return (
    <section>
      <div className="flex flex-col items-center relative justify-center mt-7 gap-7">
        <div className="flex items-center justify-center">
          <img
            src={me.src}
            alt="me"
            className=" w-[35%] rounded-[50%] border-8 main-img"
          />
          <span className="bubble md:block hidden  text-black absolute right-[32%] p-4 top-[3%] font-semibold body-1">
            REACT
          </span>
          <span className="bubble md:block hidden  text-black absolute right-[32%] p-4 top-[40%] font-semibold body-1">
            Next Js
          </span>
          <div className="bubble text-black absolute left-[25%] p-4 top-[25%] font-semibold body-1">
            Hi, I am <span className="heading-5">Prachi</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className=" text-[70px] text-white font-semibold text-center">
            Front-End Developer
          </span>
          <span className="heading-3 font-semibold text-[#f2f6f9] opacity-[60%]">
            {" "}
            Based in Noida, Uttar Pradesh
          </span>
        </div>
        <span className="heading-4 text-white font-medium">
          Let's Work! &gt;
        </span>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default Intro;
