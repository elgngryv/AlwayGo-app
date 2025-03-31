import React from "react";
import Network from "@/assets/products/NetworkConnections.png";
import Yes from "@/assets/products/Yes.png";

const NetworkTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[16rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Network} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">NETWORK CONNECTIONS</p>
        </div>
      </div>
      {/* //table network  */}

      <div>
        <table className=" w-[85rem] h-[21rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              2G
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              3G
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
          </tr>

          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              4G
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
          </tr>

          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              4G Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              VoLTE (Voice over LTE) Support
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              VoLTE (Voice over LTE) Support
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              VoLTE (Voice over LTE) Support
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              4.5G Support
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              5G
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default NetworkTable;
