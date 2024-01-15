import React from 'react';
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import FirstSectionCardAtDashbord from '../../components/firstSectionCardAtDashbord/firstSectionCardAtDashbord';
import SecondSectionCardAtDashbord from '../../components/secondSectionCardAtDashbord/SecondSectionCardAtDashbord';

const Dashbord = () => {
 
  const cards = [
    {
      backgroundColor: "#A162F7",
      textColor: "#FFFFFF",
      title: "Energy",
      iconPath: "energy icon.png",
      percent: "45%",
      styleClassName: "first-card",
    },
    {
      backgroundColor: "#FFFFFF",
      textColor: "#242731",
      title: "Range",
      iconPath: "rang icon.svg",
      percent: "157K%",
      styleClassName: "secand-card",
    },
    {
      backgroundColor: "#FFFFFF",
      textColor: "#242731",
      title: "Break fluid",
      iconPath: "break icon.svg",
      percent: "9%",
      styleClassName: "third-card",
    },
    {
      backgroundColor: "#FFFFFF",
      textColor: "#242731",
      title: "Tire Wear",
      iconPath: "tier icon.svg",
      percent: "25%",
      styleClassName: "fourth-card ",
    },
  ];
  const secondCards = [
    {
      backgroundColor: "[#0F2837]",
      text1: "You",
      text2: "have",
      text3: "earned",
      text4: "Badges!",
      text5: "Redeem and claim your rewards!",
      number: "20",
      imagePath: "36. people-rushing-3.png",
    },
    {
      backgroundColor: "[#A162F7]",
      text1: "You",
      text2: "have",
      text3: "earned",
      text4: "Points!",
      text5: "Hooray! Way to go Mohammed!",
      number: "1500",
      imagePath: "second section dashbord image.png",
    },
  ];
 
    return (
      <>
        <PageWrapper>
          <div className="bg-[#F5F5F5] ">
            {/* first section */}
            <section className="mx-3 flex sm:flex-col lg:flex-row justify-center sm:p-2 lg:p-4">
              {cards.map((card) => (
                <FirstSectionCardAtDashbord {...card} />
              ))}
            </section>

            {/* second section */}
            <section className="mx-3 flex sm:flex-col lg:flex-row justify-center sm:p-2 lg:p-4">
              {/* first card */}
              <div className="w-[540px] h-[222px] bg-[#FFE0BA] flex flex-col lg:flex-row justify-between items-center px-4 mx-3 rounded-md">
                {/* text content */}
                <div>
                  <h4 className="text-[24px] text-[#0F2837] font-[ABeeZee]">
                    Apply for a car loan !
                  </h4>
                  <span className="text-[16px] text-[#0F2837] ">
                    This is a sample of a generated <br />
                    text
                  </span>
                  <button className="bg-[#0F2837] h-[38px] w-[126px] mt-2 rounded-md text-[12px] text-[#FFFFFF] flex justify-center items-center">
                    Discover More
                  </button>
                </div>
                {/* image */}
                <div>
                  <img
                    className="h-[185.83px] w-[226.11px]"
                    src="./section2 image.png"
                    alt="section2"
                  />
                </div>
              </div>
              {/* second  card */}
              <div className='flex mx-3'>
                {secondCards.map((card) => (
                  <SecondSectionCardAtDashbord {...card} />
                ))}
              </div>
            </section>
          </div>
        </PageWrapper>
      </>
    );
};

export default Dashbord;