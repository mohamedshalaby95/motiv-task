import React from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate ,useLocation} from "react-router-dom";


const SideNavbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
    const location = useLocation();
  const currentPath = location.pathname;
  
 
    return (
      <div className="min-w-[248px] border-r-2">
        <div className="w-[174px] m-auto ">
          <div className="h-screen flex flex-col">
            <header className="flex items-center">
              <span>
                <img src="./logo.svg" className="py-4" alt="logo" />
              </span>
              <span className="text-[24px] text-[#1F2128] mx-1">
                {t("website name")}
              </span>
            </header>
            {/* //list of navigate */}
            <div className="flex flex-col justify-between flex-grow  mb-3">
              {/* top side navbar */}
              <div className="">
                {/* //dashbord */}
                <div
                  onClick={() => navigate("/")}
                  className={`flex mt-11 border-1 p-1 rounded-md  cursor-pointer ${
                    currentPath === "/" ? "bg-[#F3F5F8]" : ""
                  }`}
                >
                  <img
                    className="h-[20px] w-[20px]"
                    src="./dashboard icon.svg"
                    alt="dashbord icon"
                  />
                  <span className="text-[#5F6165] text-[14px] font-[500] mx-1">
                    {t("dashboard")}
                  </span>
                </div>
                {/* cars */}
                <div
                  onClick={() => navigate("/cars")}
                  className={`flex mt-2 border-1  p-1 rounded-md cursor-pointer ${
                    currentPath === "/cars" ? "bg-[#F3F5F8]" : ""
                  }`}
                >
                  <img
                    className="h-[20px] w-[20px]"
                    src="./cars icon.svg"
                    alt="cars icon"
                  />
                  <span className="text-[#5F6165] text-[14px] font-[500] mx-1">
                    {t("cars")}
                  </span>
                </div>
              </div>
              {/* bottom side navbar content */}
              <div>
                <div>
                  {/* //setting */}
                  <div className="flex mt-11 border-1  p-1 rounded-md">
                    <img
                      className="h-[20px] w-[20px]"
                      src="./setting icon.svg"
                      alt="setting icon"
                    />
                    <span className="text-[#5F6165] text-[14px] font-[500] mx-1">
                      {t("setting")}
                    </span>
                  </div>
                  {/* log out */}
                  <div className="flex mt-2 border-1  p-1 rounded-md">
                    <img
                      className="h-[20px] w-[20px]"
                      src="./log out icon.svg"
                      alt="log out icon"
                    />
                    <span className="text-[#5F6165] text-[14px] font-[500] mx-1">
                      {t("log out")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
};

export default SideNavbar;