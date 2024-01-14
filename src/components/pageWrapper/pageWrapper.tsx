import React ,{ ReactNode, ReactElement }  from 'react';
import NavBar from "../navbar/navbar"
interface MyComponentProps {
  children: ReactNode;
}
const pageWrapper : React.FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default pageWrapper;