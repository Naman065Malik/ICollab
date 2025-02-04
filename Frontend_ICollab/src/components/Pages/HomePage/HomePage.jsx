import React from "react";
import LeftDiv from "./LeftDiv/LeftDiv";
import MidDiv from "./MidDiv/MidDiv";
import RightDiv from "./RightDiv/RightDiv";
const HomePage = () => {
  return (
    <>
      <div className="w-[90svw] h-[90svh] mt-14 flex   justify-evenly p-2">
        <LeftDiv />
        <MidDiv />
        <RightDiv />
      </div>
    </>
  ); 
  
}

export default HomePage;