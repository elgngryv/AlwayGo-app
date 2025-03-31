import React from "react";
import Design from "@/assets/products/Design.png";

const DData = [
  { id: 1, li: "Copper" },
  { id: 2, li: "White" },
  { id: 3, li: "Black" },
  { id: 4, li: "Titanium" },
];

const DesignTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[12rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Design} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">Design</p>
        </div>
      </div>
      <div>
        <table className=" w-[85rem] h-[29rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Length
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              163 mm
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              159.9 mm
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              160.7 mm
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Width
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              77.6 mm
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              76.7 mm
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              77.6 mm
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Thickness
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              8.25 mm
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              8.25 mm
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem] font-bold">
              7.85 mm
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Weight
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              227 Gram
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              221 Gram
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              240 Gram
            </td>
          </tr>
          <tr className="w-[85rem] h-[8rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Color Options
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {DData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {DData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {DData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Body Material (Cover)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Glass
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Glass
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Glass
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Body Material (Frame)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Titanium
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Titanium
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Stainless steel
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DesignTable;
