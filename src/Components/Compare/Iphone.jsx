import React from "react";
import { FiPlus } from "react-icons/fi";
import ComparePhoto1 from "@/assets/products/p-compare1.png";
import ComparePhoto2 from "@/assets/products/p-compare2.png";
import ComparePhoto3 from "@/assets/products/p-compare3.png";
import { MdOutlineClear } from "react-icons/md";

const Iphone = () => {
  return (
    <div>
      <div>
        <div className="w-[85rem] h-[24rem] flex gap-2 items-center mx-auto justify-between ">
          <div className="w-[20.1rem] h-[24.1rem] border-[1px] border-[#1D1D1D] ">
            <div className="w-full h-[17rem] pt-[7rem]">
              <FiPlus className="w-[6.25rem] h-[6.25rem] stroke-[1] text-[#1D1D1D] mx-auto" />
            </div>
            <div className="w-full h-[7rem]  text-center pt-8">
              <p className="w-[11.3rem] mx-auto text-[#000000DE] text-[1rem] ">
                iPhone 15 Pro Max 1 TB Black Titanium
              </p>
            </div>
          </div>
          <div className="w-[20.1rem] h-[24.1rem] bg-[#F6F6F6] ">
            <div className="w-full h-[17rem] pt-16 relative">
              <img
                src={ComparePhoto1}
                className="w-[6rem] h-[11.5rem] mx-auto"/>
              <MdOutlineClear className="w-[1.5rem] h-[1.5rem] absolute top-5 right-5 " />
            </div>
            <div className="w-full h-[7rem] text-center pt-8">
              <p className="w-[11.3rem] mx-auto text-[#000000DE] text-[1rem] ">
                iPhone 15 Pro Max 1 TB Black Titanium
              </p>
            </div>
          </div>
          <div className="w-[20.1rem] h-[24.1rem] bg-[#F6F6F6]">
            <div className="w-full h-[17rem] pt-16 relative">
              <img
                src={ComparePhoto2}
                className="w-[6rem] h-[11.5rem] mx-auto"/>
              <MdOutlineClear className="w-[1.5rem] h-[1.5rem] absolute top-5 right-5 " />
            </div>
            <div className="w-full h-[7rem] text-center pt-8">
              <p className="w-[11.3rem] mx-auto text-[#000000DE] text-[1rem] ">
                iPhone 15 Pro Max 1 TB Black Titanium
              </p>
            </div>
          </div>
          <div className="w-[20.1rem] h-[24.1rem] bg-[#F6F6F6]">
            <div className="w-full h-[17rem] pt-16 relative">
              <img
                src={ComparePhoto3}
                className="w-[6rem] h-[11.5rem] mx-auto"/>
              <MdOutlineClear className="w-[1.5rem] h-[1.5rem] absolute top-5 right-5 " />
            </div>
            <div className="w-full h-[7rem] text-center pt-8">
              <p className="w-[11.3rem] mx-auto text-[#000000DE] text-[1rem] ">
                iPhone 15 Pro Max 1 TB Black Titanium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
