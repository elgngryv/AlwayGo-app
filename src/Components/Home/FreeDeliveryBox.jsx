import React from "react";
import arrowRight from "@/assets/arrow-right-b.svg";
import deliveryTruck from "@/assets/delivery-truck.png";

const FreeDeliveryBox = () => {
  return (
    <div className="rounded-lg bg-[#32A960] h-[520px] sf-font mt-24 px-[60px] pt-[60px] pb-16 relative">
      <div className="text-black  font-semibold">Promotions!</div>
      <div className="flex items-center">
        <div className="text-white text-[58px] leading-[64px] font-semibold absolute inset-y-0 flex items-center">Free delivery <br /> to Starex branches</div>
        <div className="mr-16 ml-auto">
          <img src={deliveryTruck} alt="" className="w-[592px]" />
        </div>
        <div className="text-black text-2xl mt-auto">
          <span>until May 31 for orders</span> <br />
          <div className="flex flex-col">
            <span className="font-semibold text-3xl ml-auto">over $50</span>
            <a href="#" className="flex items-center mt-[138px] ml-auto">
              <span className="mr-2 text-base">Find out more</span>
              <img src={arrowRight} alt="Arrow" className="w-7"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDeliveryBox;
