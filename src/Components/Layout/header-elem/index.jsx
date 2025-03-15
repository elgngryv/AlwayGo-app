import React from "react";
import Facebook from "../../../assets/Facebook.svg";
import Instagram from "../../../assets/White4.svg";
import Telegram from "../../../assets/Telegram.svg";
import Twitter from "../../../assets/White2.svg";
import Linkedin from "../../../assets/White.svg";
import Flag from "../../../assets/flag.svg";
import { IoChevronDownSharp } from "react-icons/io5";
import Truck from "../../../assets/Truck.svg";

const HeaderElem = () => {
  return (
    <div className="bg-[#1D1D1D] text-white h-[48px] items-center text-center flex sf-font">
      <div className="container max-w-[1360px] mx-auto">
        <div className="flex justify-end">
          <div className="flex gap-[8px] pr-[10px] border-r">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Telegram} alt="Telegram" />
            <img src={Twitter} alt="Twitter" />
            <img src={Linkedin} alt="Linkedin" />
          </div>
          <div className="flex items-center gap-[8px] pl-[10px] pr-[10px] border-r">
            <img src={Flag} alt="Flag" />
            <div className="text-sm leading-[20px] font-normal">ENG</div>
            <IoChevronDownSharp className="text-xs" />
          </div>
          <div className="flex items-center pl-[10px] pr-[10px] gap-[8px] border-r">
            <h2 className="text-sm leading-[20px] font-normal">USD</h2>
            <IoChevronDownSharp className="text-xs" />
          </div>
          <div className="flex items-center pl-[10px] gap-[8px]">
            <img src={Truck} alt="Truck" />
            <h2 className="text-sm leading-[20px] font-normal">
              Track My Order
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderElem;
