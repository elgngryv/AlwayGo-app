import React from "react";
import Battery from "@/assets/products/Battery.png";
import Yes from "@/assets/products/Yes.png";
import No from "@/assets/products/No.png";

const BData = [
  { id: 1, li: "Wireless Fast Charging (15W)" },
  { id: 2, li: "Wireless Fast Charging " },
  { id: 3, li: "Wireless Fast Charging with MagSafe (25W)" },
];

// const BData1 =[
//     {id:1,li:"Wireless Charging (7.5W)"},
//     {id:2,li:"Wireless Fast Charging with MagSafe (15W)"},
//     {id:3,li:"Wireless Fast Charging"}
// ]

const BatteryTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[9rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Battery} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">Battery</p>
        </div>
      </div>
      {/* //table battery  */}
      <div>
        <table className=" w-[85rem] h-[46.5rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Battery Capacity (Typical)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              4685 mAh
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              4441 mAh
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              4323 mAh
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem] ">
              Play Video
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              29 Hours
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              25 Hours
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              25 Hours
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Video Playback Note
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Online
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] ">
              Online
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Online
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Play Music
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              105 Hours
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              95 Hours
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              95 Hours
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Charge
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              USB Type-C
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              USB Type-C
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Lightning - USB cable
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Battery Technology
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Lithium Ion (Li-Ion)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Lithium Ion (Li-Ion)
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Lithium Ion (Li-Ion)
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem] align-center">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Fast Charge
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              {" "}
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>{" "}
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <div className="flex gap-2">
                <img src={Yes} /> <p>Available</p>
              </div>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Fast Charge Power (Max.)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              30 W
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              20 W
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">20 W</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Fast Charging Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Fast Charging (30W)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Fast Charging (20W)
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Fast Charging (20W)
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Wireless Charging
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
          <tr className="w-[85rem] h-[8rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Wireless Charging Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {BData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {BData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {BData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Replaceable Battery
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
        </table>
      </div>
    </div>
  );
};

export default BatteryTable;
