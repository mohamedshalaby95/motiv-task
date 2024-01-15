import React from "react";

interface ISecondSectionCardAtDashbord {
  backgroundColor: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  number: string;
  imagePath: string;
}

const SecondSectionCardAtDashbord: React.FC<ISecondSectionCardAtDashbord> = ({
   backgroundColor,
  text1,
  text2,
  text3,
  text4,
  text5,
  number,
  imagePath,
}) => {
  
  return (
    <div
      className={`h-[222px] w-[220px] rounded-md bg-${backgroundColor} flex p-3 flex-col mx-2`}
    >
      {/* content text */}
      <div className="flex ">
        <div>
          <h6 className="text-[#FFFFFF] text-[20px] leading-[23.64px]">
            {text1}
          </h6>
          <h6 className="text-[#FFFFFF] text-[20px] leading-[23.64px]">
            {text2}
          </h6>
          <h6 className="text-[#FFFFFF] text-[20px] leading-[23.64px]">
            {text3}
          </h6>
          <span className="text-[36px] font-[italic] text-[#FF9619]">
            {number}
          </span>
          <h6 className="text-[#FFFFFF] text-[20px]">{text4}</h6>
        </div>
        {/* image */}
        <div>
          <img src={`./${imagePath}`} alt="imgfor secand" />
        </div>
      </div>
      <div className="text-[12px] text-[#FF9619]">{text5}</div>
    </div>
  );
};

export default SecondSectionCardAtDashbord;
