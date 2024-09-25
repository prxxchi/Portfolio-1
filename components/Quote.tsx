import React from "react";

const Quote = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#03001e]">
      <div className="line"></div>
      <span className="text-white text-center text-3xl md:text-[50px] pt-3 font-semibold">
        {" "}
        Is not just what it looks like and feels like.
      </span>
      <span className="text-[#feac5e] text-[50px] font-semibold ">
        {" "}
        Is how it works.
      </span>
      <span className="heading-2 font-medium text-[#ffffff] opacity-[60%] mb-12">
        - Steve Jobs
      </span>
      <div className="line"></div>
    </div>
  );
};

export default Quote;
