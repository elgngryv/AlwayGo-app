import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import close from "../../assets/X.svg";
import Dyson from "../../assets/products/p3.png";

const Favorite = () => {
  return (
    <div className="container  px-10 max-w-[1360px] mx-auto">
      <div className="flex gap-[24px] items-center">
        <div className="w-[783px] border-b border-black p-[24px]">
          <h2 className="font-normal text-[46px] leading-[56px] ">Favorites</h2>
        </div>
        <div className="bg-[#F6F6F6] w-[553px] mt-[48px] p-4">
          <div className="flex items-center justify-end gap-3">
            <h2 className="font-thin text-base leading-[24px] text-[#00000099]">
              Search in my favorites
            </h2>
            <CiSearch className="text-[#45658B] text-2xl " />
          </div>
        </div>
      </div>
      <div className="mt-[24px]  grid gap-x-[70px] gap-y-[24px] grid-cols-4">
        <div className="bg-[#F6F6F6] rounded-lg flex flex-col p-10 w-[322px]">
          <div className="flex justify-end">
            <img src={close} alt="" />
          </div>
          <img className="w-[242px]" src={Dyson} alt="" />
          <div className="flex gap-[5px]">
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaRegStar className="text-[#FED84C] " />
            <div>
              <h2 className="font-thin text-xs leading-[16px] text-[#000000DE]">
                21 reviews
              </h2>
            </div>
          </div>
          <div className="w-[200px] mt-[4px] mb-[4px]">
            <h2 className="font-thin text-base text-[#000000DE] leading-[24px] ">
              Comb hair dryer BRAUN AS 720
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-[22px] leading-[28px] text-[#000000DE]">$149.00</h2>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg flex flex-col p-10 w-[322px]">
          <div className="flex justify-end">
            <img src={close} alt="" />
          </div>
          <img className="w-[242px]" src={Dyson} alt="" />
          <div className="flex gap-[5px]">
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaRegStar className="text-[#FED84C] " />
            <div>
              <h2 className="font-thin text-xs leading-[16px] text-[#000000DE]">
                21 reviews
              </h2>
            </div>
          </div>
          <div className="w-[200px] mt-[4px] mb-[4px]">
            <h2 className="font-thin text-base text-[#000000DE] leading-[24px] ">
              Comb hair dryer BRAUN AS 720
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-[22px] leading-[28px] text-[#000000DE]">$149.00</h2>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg flex flex-col p-10 w-[322px]">
          <div className="flex justify-end">
            <img src={close} alt="" />
          </div>
          <img className="w-[242px]" src={Dyson} alt="" />
          <div className="flex gap-[5px]">
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaRegStar className="text-[#FED84C] " />
            <div>
              <h2 className="font-thin text-xs leading-[16px] text-[#000000DE]">
                21 reviews
              </h2>
            </div>
          </div>
          <div className="w-[200px] mt-[4px] mb-[4px]">
            <h2 className="font-thin text-base text-[#000000DE] leading-[24px] ">
              Comb hair dryer BRAUN AS 720
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-[22px] leading-[28px] text-[#000000DE]">$149.00</h2>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg flex flex-col p-10 w-[322px]">
          <div className="flex justify-end">
            <img src={close} alt="" />
          </div>
          <img className="w-[242px]" src={Dyson} alt="" />
          <div className="flex gap-[5px]">
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaRegStar className="text-[#FED84C] " />
            <div>
              <h2 className="font-thin text-xs leading-[16px] text-[#000000DE]">
                21 reviews
              </h2>
            </div>
          </div>
          <div className="w-[200px] mt-[4px] mb-[4px]">
            <h2 className="font-thin text-base text-[#000000DE] leading-[24px] ">
              Comb hair dryer BRAUN AS 720
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-[22px] leading-[28px] text-[#000000DE]">$149.00</h2>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg flex flex-col p-10 w-[322px]">
          <div className="flex justify-end">
            <img src={close} alt="" />
          </div>
          <img className="w-[242px]" src={Dyson} alt="" />
          <div className="flex gap-[5px]">
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaRegStar className="text-[#FED84C] " />
            <div>
              <h2 className="font-thin text-xs leading-[16px] text-[#000000DE]">
                21 reviews
              </h2>
            </div>
          </div>
          <div className="w-[200px] mt-[4px] mb-[4px]">
            <h2 className="font-thin text-base text-[#000000DE] leading-[24px] ">
              Comb hair dryer BRAUN AS 720
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-[22px] leading-[28px] text-[#000000DE]">$149.00</h2>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg flex flex-col p-10 w-[322px]">
          <div className="flex justify-end">
            <img src={close} alt="" />
          </div>
          <img className="w-[242px]" src={Dyson} alt="" />
          <div className="flex gap-[5px]">
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaRegStar className="text-[#FED84C] " />
            <div>
              <h2 className="font-thin text-xs leading-[16px] text-[#000000DE]">
                21 reviews
              </h2>
            </div>
          </div>
          <div className="w-[200px] mt-[4px] mb-[4px]">
            <h2 className="font-thin text-base text-[#000000DE] leading-[24px] ">
              Comb hair dryer BRAUN AS 720
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-[22px] leading-[28px] text-[#000000DE]">$149.00</h2>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg flex flex-col p-10 w-[322px]">
          <div className="flex justify-end">
            <img src={close} alt="" />
          </div>
          <img className="w-[242px]" src={Dyson} alt="" />
          <div className="flex gap-[5px]">
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaRegStar className="text-[#FED84C] " />
            <div>
              <h2 className="font-thin text-xs leading-[16px] text-[#000000DE]">
                21 reviews
              </h2>
            </div>
          </div>
          <div className="w-[200px] mt-[4px] mb-[4px]">
            <h2 className="font-thin text-base text-[#000000DE] leading-[24px] ">
              Comb hair dryer BRAUN AS 720
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-[22px] leading-[28px] text-[#000000DE]">$149.00</h2>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-lg flex flex-col p-10 w-[322px]">
          <div className="flex justify-end">
            <img src={close} alt="" />
          </div>
          <img className="w-[242px]" src={Dyson} alt="" />
          <div className="flex gap-[5px]">
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaStar className="text-[#FED84C] " />
            <FaRegStar className="text-[#FED84C] " />
            <div>
              <h2 className="font-thin text-xs leading-[16px] text-[#000000DE]">
                21 reviews
              </h2>
            </div>
          </div>
          <div className="w-[200px] mt-[4px] mb-[4px]">
            <h2 className="font-thin text-base text-[#000000DE] leading-[24px] ">
              Comb hair dryer BRAUN AS 720
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-[22px] leading-[28px] text-[#000000DE]">$149.00</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[60px] mb-[100px]">
        <button className="border border-[#45658B] font-normal text-base leading-[24px] min-w-[206px] py-4">Show More</button>
      </div>
    </div>
  );
};

export default Favorite;
