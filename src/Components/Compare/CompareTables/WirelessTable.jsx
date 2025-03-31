import React from "react";
import Wireless from "@/assets/products/WirelessConnections.png";

const WData = [
  { id: 1, li: "2X MIMO" },
  { id: 2, li: "Dual-Band (5GHz)" },
  { id: 3, li: "DESPITE" },
  { id: 4, li: "Thread Networking Protocol" },
  { id: 5, li: "VoWiFi (Wi-Fi Calling)" },
  { id: 6, li: "Wi-Fi Hotspot" },
];

const WData1 = [
  { id: 1, li: "Dual-Frequency GPS" },
  { id: 2, li: "NavIC" },
  { id: 3, li: "Galileo" },
  { id: 4, li: "QZSS" },
  { id: 5, li: "GLONASS" },
  { id: 6, li: "GPS" },
  { id: 7, li: "BDS" },
];

const WirelessTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[16rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Wireless} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">WIRELESS CONNECTIONS</p>
        </div>
      </div>
      {/* //table wireless  */}

      <div>
        <table className=" w-[85rem] h-[37.5rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Wi-Fi Channels
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Wi-Fi 7 (802.11 a/b/g/n/ac/ax/be)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Wi-Fi 6E (802.11 a/b/g/n/ac/ax)
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Wi-Fi 6 (802.11 a/b/g/n/ac/ax)
            </td>
          </tr>
          <tr className="w-[85rem] h-[11rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Wi-Fi Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {WData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {WData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {WData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              NFC
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
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Bluetooth Version
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              5.3
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              5.3
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">5.3</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Infrared
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
          <tr className="w-[85rem] h-[12.5rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Navigation Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {WData1.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {WData1.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {WData1.map((data) => (
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

export default WirelessTable;
