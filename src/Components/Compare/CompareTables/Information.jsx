import React from "react";
import Wireless from "@/assets/products/WirelessConnections.png";
import Help from "@/assets/products/Help.png";

const Information = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[16rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Wireless} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">BASIC INFORMATION</p>
        </div>
      </div>
      {/* //table information  */}
      <div>
        <table className=" w-[85rem] h-[17.5rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Release Year
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2024
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2023
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">2022</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Announcement Date
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              September, 2024
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              September, 2023
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              September, 2022
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Release Date
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <img src={Help} alt="" />
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <img src={Help} alt="" />
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              September, 2022
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Series
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Apple iPhone 16
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Apple iPhone 15
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Apple iPhone 14
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              All Series
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Apple iPhone 16 Pro Max
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Apple iPhone 15 Pro Max
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Apple iPhone 14 Pro Max
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Information;
