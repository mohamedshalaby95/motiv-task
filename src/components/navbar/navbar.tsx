import React from "react";
import LanguageSelector from "../languageSelector/languageSelector";

const navbar = () => {
  return (
    <>
      <nav>
        <div className="mx-auto  px-2 lg:px-8">
          <div className="relative flex h-16 items-center justify-between mx-4">
            <div className="flex  items-center justify-center">
              <form className="flex items-centermx-3">
                <div className="relative w-full">
                  <div className="absolute inset-y-2 start-0 flex items-center ps-3 pointer-events-none">
                    <img
                      src="./search icon.svg"
                      alt=" search icon"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="mx-1  mb-1 text-yellow-300 font-bold ">
                      |
                    </span>
                  </div>

                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border  text-[16px] rounded-lg   block mobile:w-[200px] lg:w-full ps-10 p-2.5       "
                    placeholder="Search or type"
                    required
                  />
                </div>
              </form>
            </div>
            <div className=" flex items-center pr-2   sm:pr-0">
              <LanguageSelector />
              <button
                type="button"
                className="flex items-center mobile:gap-2 lg:gap-10"
              >
                <img
                  src="./notification.svg"
                  alt="notification icon"
                  className="h-[24px] w-[19.2px]"
                />
                <div className="w-[48px] h-[48px] rounded">
                  <img
                    src="./portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper.png"
                    alt="profile img"
                    className="rounded-full"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
