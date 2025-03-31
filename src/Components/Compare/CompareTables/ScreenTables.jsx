import React from "react";
import Phone2 from "@/assets/products/Phone2.png";

const SData = [
  { id: 1, li: "1000 cd/m² (nit) Brightness" },
  { id: 2, li: "1600 cd/m² (nit) Brightness (HDR)" },
  { id: 3, li: "2,000,000:1 Contrast Ratio (Typical)" },
  { id: 4, li: "2000 cd/m² (nit) Brightness (Max.)" },
  { id: 5, li: "Frameless Design" },
  { id: 6, li: "Scratch Resistant Glass" },
  { id: 7, li: "DCI-P3 Color Space" },
  { id: 8, li: "Dolby Vision" },
  { id: 9, li: "In-Display Front Camera" },
  { id: 10, li: "HDR" },
  { id: 11, li: "HDR10" },
  { id: 12, li: "HLG" },
  { id: 13, li: "Low-Temperature Polycrystalline Oxide (LTPO)" },
  { id: 14, li: "Multi Touch" },
  { id: 15, li: "Oleophobic Coating" },
  { id: 16, li: "Super Retina XDR Display" },
  { id: 17, li: "Always-on Display" },
  { id: 18, li: "True Tone Display" },
];

const ScreenTables = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[9rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Phone2} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">Screen</p>
        </div>
      </div>
      {/* //screen table */}
      <div>
        <table className=" w-[85rem] h-[72.5rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem] align-center">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem] ">
              Screen Size
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem] ">
              6.9 Inches
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] ">
              6.7 Inches
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem] ">
              6.7 Inches
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem] ">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem]  w-[21rem]">
              Display Technology
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              OLED
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              OLED
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">OLED</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem] ">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Screen Resolution
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              1320x2868 (FHD+) Pixels
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold  w-[21rem]">
              1290x2796 (FHD+) Pixels
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] font-bold w-[21rem]">
              1290x2796 (FHD+) Pixels
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem] ">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Screen Resolution Standard
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              FHD+
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              FHD+
            </td>
            <td className="pl-3 border-gray-300 text-[1rem]">FHD+</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Pixel Density
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              460 PPI
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              460 PPI
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              460 PPI
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Screen Refresh Rate
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              120 Hz
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              120 Hz
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              120 Hz
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Aspect Ratio
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              19.5:9
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              19.5:9
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              19.5:9
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Screen Area
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              115.76 cm²
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              109.27 cm²
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              109.27 cm²
            </td>
          </tr>
          <tr className="w-[85rem] h-[30.5rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold  pt-4 text-[1rem] w-[21rem]">
              Screen Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem] ">
              <ul>
                {SData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {SData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {SData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3  border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Screen Durability
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Corning Ceramic Shield Glass (Gen2)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Corning Ceramic Shield Glass
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Corning Ceramic Shield Glass
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Touch Type
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Capacitive Screen
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Capacitive Screen
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Capacitive Screen
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Number of Colors
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              16 Million
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              16 Million
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              16 Million
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Screen / Body Ratio
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              91.52 %
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              89.1 %
            </td>
            <td className="pl-3  border-gray-300 text-[1rem] w-[21rem]">
              87.63 %
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ScreenTables;
