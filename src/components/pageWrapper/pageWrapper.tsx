import React, { ReactNode, ReactElement, useState, useCallback } from "react";
import NavBar from "../navbar/navbar";
import SideNavbar from "../sideNavbar/sideNavbar";
interface MyComponentProps {
  children: ReactNode;
}
const PageWrapper: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <div className="flex max-w-[1339px] m-auto">
        <SideNavbar />
        <div className="w-full">
          <NavBar />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default PageWrapper;
