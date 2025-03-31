import React from "react";
import Multimedia from "@/assets/products/Multimedia.png";
import No from "@/assets/products/No.png";

const MData = [
  { id: 1, li: "Dual Speakers" },
  { id: 2, li: "Stereo" },
];

const MultimediaTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[16rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Multimedia} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">MULTIMEDIA</p>
        </div>
      </div>
      {/* // */}
      <div>
        <table className=" w-[85rem] h-[12rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Radio
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#F14A55] w-[21rem]">
              <div className="flex gap-2">
                <img src={No} />
                <p>None</p>
              </div>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#F14A55] w-[21rem]">
              <div className="flex gap-2">
                <img src={No} />
                <p>None</p>
              </div>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] text-[#F14A55] w-[21rem]">
              <div className="flex gap-2">
                <img src={No} />
                <p>None</p>
              </div>
            </td>
          </tr>

          <tr className="w-[85rem] h-[5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Speaker Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {MData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {MData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {MData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Audio Output
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              USB Type-C
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              USB Type-C
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Lightning
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MultimediaTable;
