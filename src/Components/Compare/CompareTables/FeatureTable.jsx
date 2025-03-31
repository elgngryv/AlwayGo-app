import React from "react";
import Drop from "@/assets/products/Drop.png";
import Yes from "@/assets/products/Yes.png";
import No from "@/assets/products/No.png";

const FData = [
  { id: 1, li: "Barometer" },
  { id: 2, li: "Accelerometer" },
  { id: 3, li: "Gyroscope" },
  { id: 4, li: "LIDAR (Light Detection and Ranging) Scanner" },
  { id: 5, li: "Ambient Light Sensor" },
  { id: 6, li: "Ambient Light Sensor (Rear)" },
  { id: 7, li: "Compass" },
  { id: 8, li: "Proximity Sensor" },
];
const FData1 = [
  { id: 1, li: "AirPlay" },
  { id: 2, li: "Apple Pay" },
  { id: 3, li: "Augmented Reality (AR) Compatibility" },
  { id: 4, li: "Dolby Atmos" },
  { id: 5, li: "Screen Mirroring" },
  { id: 6, li: "Face ID" },
  { id: 7, li: "FaceTime" },
  { id: 8, li: "4 Noise Cancelling Microphones" },
  { id: 9, li: "iCloud Drive" },
  { id: 10, li: "Shortcut Key (Customizable)" },
  { id: 11, li: "MagSafe" },
  { id: 12, li: "Siri" },
  { id: 13, li: "Traffic Accident Detection" },
  { id: 14, li: "Ultra Wide Band (UWB)" },
  { id: 15, li: "Face Recognition" },
  { id: 16, li: "Face Recognition (3D)" },
];
const FData2 = [
  { id: 1, li: "SIM Eject Pin" },
  { id: 2, li: "USB Cable (Type-C to Type-C)" },
];
const FeatureTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[9rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Drop} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">FEATURES</p>
        </div>
      </div>
      {/* //table features  */}
      <div>
        <table className="w-[85rem] h-[78rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Water Resistance
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
              Water Resistance Level
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              IPX8
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              IPX8
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">IPX8</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Dust Resistance
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem]  w-[21rem]">
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
              Dust Resistance Level
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              IP6X
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              IP6X
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">IP6X</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Video Conversation (Application)
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
          <tr className="w-[85rem] h-[15.5rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Sensors
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {FData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {FData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {FData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Fingerprint Reader
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
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Notification Light (LED)
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

          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              SAR Value 10g (Head)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              1.22 W/kg
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              0.98 W/kg
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              0.99 W/kg
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              SAR Value 10g (Body)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              1.45 W/kg
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              0.98 W/kg
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem] font-bold">
              0.98 W/kg
            </td>
          </tr>
          <tr className="w-[85rem] h-[26rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Service and Applications
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {FData1.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {FData1.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {FData1.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[5rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Box Contents
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {FData2.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {FData2.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {FData2.map((data) => (
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

export default FeatureTable;
