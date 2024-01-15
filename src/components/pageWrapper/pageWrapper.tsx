import React, { ReactNode, ReactElement, useState, useCallback } from "react";
import NavBar from "../navbar/navbar";
import SideNavbar from "../sideNavbar/sideNavbar";
import { useTranslation } from "react-i18next";
interface MyComponentProps {
  children: ReactNode;
}
const PageWrapper: React.FC<MyComponentProps> = ({ children }) => {
  const [isSideNavbarVisible, setIsSideNavbarVisible] =
    useState<boolean>(false);
  const { i18n } = useTranslation();
  const toggleSideNavbar = useCallback(() => {
    setIsSideNavbarVisible(!isSideNavbarVisible);
  }, [isSideNavbarVisible]);
  return (
    <>
      <div className="flex max-w-[1339px] m-auto">
        <div className="mobile:hidden lg:block">
          <SideNavbar />
        </div>
        <div
          className={`mobile:block lg:hidden fixed ${
            i18n.language === "en" ? "left-0 " : "right-0"
          } top-[400px] z-50`}
        >
          <button
            className="lg:hidden px-4 py-2 bg-black text-white rounded-md"
            onClick={toggleSideNavbar}
          >
            {isSideNavbarVisible ? "close" : "Open"}
          </button>
        </div>
        <div>
          <div
            className={`${
              isSideNavbarVisible ? "d-block" : "hidden"
            } relative right-0 left-0 top-0 bottom-0`}
          >
            <SideNavbar />
          </div>
        </div>
        <div className="w-full">
          <NavBar />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default PageWrapper;
