import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#26243b]">
      <div className="flex flex-col justify-center items-center">
        <div className="line"></div>
        <span className="work pt-20 font-semibold text-center">
          Lets's Work Together
        </span>
        <button
          type="button"
          className="text-white mt-20 cursor-pointer p-3 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-semibold rounded-[2.5rem] text-lg px-5  text-center me-2 mb-2"
        >
          Contact Me &gt;
        </button>
      </div>
      <div className="mt-20 border-t-2 border-[#c779d0]"></div>
      <div className="flex justify-between md:p-12 text-white">
        <span>&#169; 2024 Prachi Singh</span>
        <span className="md:block hidden">Frontend Developer</span>
        <div className="flex gap-1 md:gap-4 items-end justify-end ">
          <span className="cursor-pointer">Github</span>
          <span className="cursor-pointer">LinkedIn</span>
          <a href="mailto:prachi.singh2907@gmail.com">
            {" "}
            <span className="cursor-pointer">Email</span>{" "}
          </a>
          <span className="cursor-pointer">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
