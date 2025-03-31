import React from "react";
import DataPhoto from "@/assets/products/Data.png";
import No from "@/assets/products/No.png";
import Help from "@/assets/products/Help.png";

const BasicTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[12rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={DataPhoto} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">BASIC HARDWARE</p>
        </div>
      </div>

      <div>
        <table className=" w-[85rem] h-[46.5rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Chipset
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Apple A18 Pro
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Apple A17 Pro
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Apple A16 Bionic
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem]  w-[21rem]">
              CPU Frequency
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              4.04 GHz
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              3.78 GHz
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              3.46 GHz
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              CPU Core
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              6 Core
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] ">
              6 Core
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              6 Core
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Main Processor (CPU)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2x 4.04 GHz
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2x 3.78 GHz
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              2x 3.46 GHz Everest
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              1. Coprocessor
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              4x
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              4x 2.11 GHz
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              4x 2.0 GHz Sawtooth
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Processor Architecture
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              64-bit
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              64-bit
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              64-bit
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Graphics Processor (GPU)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              6x Apple GPU
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              6x Apple GPU
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              5x Apple GPU
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              CPU Manufacturing Technology
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              3 nm
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              3 nm
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">4 nm</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              AnTuTu Score (v9)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <img src={Help} />
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <img src={Help} />
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              998.900 Mrs.
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              AnTuTu Score (v10)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              1,806,600 Mrs.
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              1,628,700 Mrs.
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              1,554,500 Mrs.
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Geekbench 5 (Single-core)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <img src={Help} />
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2.170 Mrs.
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              1.890 Mrs.
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Geekbench 5 (Multi-core)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <img src={Help} alt="" />
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              6.015 Mrs.
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              5.495 Mrs.
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Geekbench 6 (Single-core)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              3.435 Mrs.
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2.965 Mrs.
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              2,650 Mrs.
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Geekbench 6 (Multi-core)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              8.630 Mrs.
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              7.460 Mrs.
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              7.005 Mrs.
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Memory (RAM)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              8 GB
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              8 GB
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">6 GB</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Internal Storage
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              1 TB
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              1 TB
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">1 TB</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Memory Card Support
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
              Other Memory Options
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              There are 256/512GB/1TB Storage options
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              There are 256/512GB/1TB Storage options
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              There are 256/512GB/1TB Storage options
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BasicTable;
