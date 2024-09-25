import React from "react";

interface AboutMeCardProps {
  title: string;
  description: string;
}
const AboutMeCard = ({ title, description }: AboutMeCardProps) => {
  return (
    <div className="card  hover:shadow-lg shadow-[#0dcaf0] cursor-pointer">
      <h3 className="card-heading font-semibold heading-2 text-[#ec77ab] text-center">
        {title}
      </h3>
      <p className="text-white body-1 font-medium text-center break-words">
        {description}
      </p>
    </div>
  );
};

export default AboutMeCard;
