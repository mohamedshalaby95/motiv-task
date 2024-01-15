import React from "react";

interface IFirstSectionCardAtDashbord {
  iconPath: string;
  title: string;
  percent: string;
  backgroundColor: string;
  textColor: string;
  styleClassName:string
}

const FirstSectionCardAtDashbord: React.FC<IFirstSectionCardAtDashbord> = ({
  textColor,
  backgroundColor,
  percent,
  title,
  iconPath,
  styleClassName,
}) => {
    const cardClasses = `bg-[${backgroundColor}] text-[${textColor}]`;
    console.log("cardClasses", cardClasses);
  return (
    <div
      className={`${cardClasses} mx-4 px-[20px]  h-[266px] w-[232px] rounded-md `}
    >
      <div className="flex flex-col justify-center items-center m-auto  py-[20px] ">
        <img
          className="w-[38px] h-[38px]"
          alt={`${title}`}
          src={`./${iconPath}`}
        />
        <h3 className="text-[24px] h-[31px]  my-3">{title}</h3>
        <div
          className={`${styleClassName} make-circle-range flex justify-center items-center bg-[${backgroundColor}]`}
        >
          {percent}
        </div>
      </div>
    </div>
  );
};

export default FirstSectionCardAtDashbord;
