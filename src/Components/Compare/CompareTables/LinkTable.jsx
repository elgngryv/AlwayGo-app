import React from "react";
import OtherLinks from "@/assets/products/OtherLink.png";

const LData = [
  { id: 1, li: "DisplayPort" },
  { id: 2, li: "Headphone Audio Output" },
];

const LData1 = [
  { id: 1, li: "e.g" },
  { id: 2, li: "Nano-SIM (4FF)" },
];
const LinkTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[16rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={OtherLinks} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">OTHER LINKS</p>
        </div>
      </div>
      {/* //LINK section */}
      <div>
        <table className=" w-[85rem] h-[12rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              USB Version
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              USB 3.2 Gen 2 (USB 3.1)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              USB 3.2 Gen 2 (USB 3.1)
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">2.0</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              USB Connection Type
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
          <tr className="w-[85rem] h-[6.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              USB Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {LData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {LData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {LData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Number of Lines
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Double Line
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Double Line
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Double Line
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Dual Line Feature
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Dual Standby
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Dual Standby
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Dual Standby
            </td>
          </tr>
          <tr className="w-[85rem] h-[5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              SIM
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {LData1.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {LData1.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {LData1.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default LinkTable;
