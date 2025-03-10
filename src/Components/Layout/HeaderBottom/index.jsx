import React from "react";
import Catalog from "../../../assets/Catalog.svg";

const HeaderBottom = () => {
  return (
    <div className="container max-w-[1360px] px-10 mx-auto sf-font border-b border-[#B3B3B3] p-[12px] mt-[24px]">
      <div className="">
        {/* Category Links */}
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img src={Catalog} alt="Catalog Icon" className="w-6 h-6" />
            <p className="text-lg font-medium">Product Catalog</p>
          </div>
          <h2 className="font-medium text-base leading-[24px] cursor-pointer hover:text-blue-500 mr-[17.33px]">
            Man
          </h2>
          <h2 className="font-medium text-base leading-[24px] cursor-pointer hover:text-blue-500 mr-[17.33px]">
            Woman
          </h2>
          <h2 className="font-medium text-base leading-[24px] cursor-pointer hover:text-blue-500 mr-[17.33px]">
            Child
          </h2>
          <h2 className="font-medium text-base leading-[24px] cursor-pointer hover:text-blue-500 mr-[17.33px]">
            Shoes
          </h2>
          <h2 className="font-medium text-base leading-[24px] cursor-pointer hover:text-blue-500 mr-[17.33px]">
            Electronic
          </h2>
          <h2 className="font-medium text-base leading-[24px] cursor-pointer hover:text-blue-500 mr-[17.33px]">
            Cosmetics
          </h2>
          <h2 className="font-medium text-base leading-[24px] cursor-pointer hover:text-blue-500 mr-[17.33px]">
            Collections
          </h2>
          <h2 className="font-medium text-base leading-[24px] cursor-pointer hover:text-blue-500 mr-[17.33px]">
            Beauty
          </h2>
          <h2 className="font-medium text-base leading-[24px] cursor-pointer hover:text-blue-500">
            Best Seller
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
