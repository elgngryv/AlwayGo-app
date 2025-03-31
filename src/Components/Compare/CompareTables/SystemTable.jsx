import React from "react";
import Settings from "@/assets/products/Settings.png";
import Help from "@/assets/products/Help.png";

const SystemTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[16rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Settings} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">OPERATING SYSTEM</p>
        </div>
      </div>
      {/* //system section */}

      <div>
        <table className=" w-[85rem] h-[10.5rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Operating System
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              iOS
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              iOS
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">iOS</td>
          </tr>

          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Operating System Version
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              iOS 18
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              iOS 17
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              iOS 16
            </td>
          </tr>

          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Upgradeable Version
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <img src={Help} alt="" />
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              iOS 18
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              iOS 18
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SystemTable;
