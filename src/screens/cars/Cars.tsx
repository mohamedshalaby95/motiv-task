import React from 'react';
import PageWrapper from '../../components/pageWrapper/pageWrapper';

const Cars = () => {
    return (
      <>
        <PageWrapper>
          <div className="bg-[#F5F5F5] p-5">
            <header className="">
              <h1 className="my-4 text-[#242731] text-[30px] font-[700]">
                Booking
              </h1>
            </header>
            <nav className="h-[44px] flex justify-between mt-10">
              {/* left nav */}
              <div className="flex gap-[23px]">
                <div className="bg-[#FFFFFF] w-[122px] h-[36px] rounded-[23px] px-[10] py-[20] flex items-center justify-around ">
                  <span className="text-[#5F6165] text-[16px]"> New</span>
                  <img
                    src="./Rectangle.svg"
                    alt="icon arrow"
                    className="w-[8.67px] h-[13.87px]"
                  />
                </div>
                <div className="bg-[#FFFFFF] w-[122px] h-[36px] rounded-[23px] px-[10] py-[20] flex items-center justify-around ">
                  <span className="text-[#5F6165] text-[16px]">Toyota</span>
                  <img
                    src="./Rectangle.svg"
                    alt="icon arrow"
                    className="w-[8.67px] h-[13.87px]"
                  />
                </div>
              </div>
              {/* right nav */}
              <div className="flex gap-[16px] items-start">
                <div className="bg-[#FFFFFF]  w-[44px] h-[44px] rounded-full flex justify-center items-center">
                <img
                  src="./filter2 icon.svg"
                  alt="icon filter 1"
                  className="rounded-full mt-1"
                />
                </div>

                <img
                  src="./filter.svg"
                  alt="icon filter 1"
                  className="w-[44px] h-[44px] rounded-full flex justify-center items-center"
                />
              </div>
            </nav>
          </div>
        </PageWrapper>
      </>
    );
};

export default Cars;