import React from "react";
import Camera from "@/assets/products/Camera.png";
import Yes from "@/assets/products/Yes.png";
import Help from "@/assets/products/Help.png";
const CData = [
  { id: 1, li: "1.22μm (2.44μm) Pixel" },
  { id: 2, li: "Built-in QR Code Reader" },
  { id: 3, li: "Physical Shutter Button" },
  { id: 4, li: "Focus Pixels Auto Focus" },
  { id: 5, li: "HDR" },
  { id: 6, li: "Red-eye Correction" },
  { id: 7, li: "Live Photos" },
  { id: 8, li: "Macro Shooting (2 cm)" },
  { id: 9, li: "Auto Focus" },
  { id: 10, li: "Panorama" },
  { id: 11, li: "Phase Detect Auto-Focus (PDAF)" },
  { id: 12, li: "Portrait Mode (Bokeh)" },
  { id: 13, li: "RAW Recording Ability" },
  { id: 14, li: "Sapphire Crystal Lens Cover" },
  { id: 15, li: "Burst Mode" },
  { id: 16, li: "Voice command" },
  { id: 17, li: "Artificial Intelligence (AI) Scene Detection" },
  { id: 18, li: "Timer" },
];

const CData2 = [
  { id: 1, li: "Apple ProRes" },
  { id: 2, li: "Digital image stabilizer (EIS)" },
  { id: 3, li: "Dolby Vision Recording" },
  { id: 4, li: "HDR" },
  { id: 5, li: "HDR (4K)" },
  { id: 6, li: "Stereo Sound Recording" },
  { id: 7, li: "Continuous Auto Focus" },
  { id: 8, li: "Time-lapse (Hyperlapse)" },
  { id: 9, li: "Video Zoom" },
  { id: 10, li: "Slow motion video recording" },
];
const CData3 = [
  { id: 1, li: "720p @ 30fps" },
  { id: 2, li: "1080p @ 25fps" },
  { id: 3, li: "1080P @ 30fps (ProRes)" },
  { id: 4, li: "1080p @ 60fps" },
  { id: 5, li: "1080p @ 30fps" },
  { id: 6, li: "2160p @ 120fps (ProRes)" },
  { id: 7, li: "2160p @ 60fps" },
  { id: 8, li: "2160p @ 25fps" },
  { id: 9, li: "2160p @ 25fps" },
  { id: 10, li: "2160p @ 60fps (ProRes)" },
  { id: 11, li: "2160p @ 120fps" },
  { id: 12, li: "2160p @ 30fps" },
  { id: 12, li: "2160p @ 24fps" },
];
const CData4 = [
  { id: 1, li: "1080p @ 120fps" },
  { id: 2, li: "1080p @ 240fps" },
  { id: 3, li: "2160p @ 120fps" },
];
const CData5 = [
  { id: 1, li: "1.12μm Pixels" },
  { id: 2, li: "120mm" },
  { id: 3, li: "7 Element Lens" },
  { id: 4, li: "Optical Image Stabilization (OIS)" },
  { id: 5, li: "Optics Zoom (5x)" },
  { id: 6, li: "Auto Focus" },
  { id: 7, li: "Periscope Lens" },
  { id: 8, li: "Phase Detect Auto-Focus (PDAF)" },
  { id: 9, li: "Telephoto" },
];
const CData6 = [
  { id: 1, li: "1.4 µm Pixel" },
  { id: 2, li: "13mm" },
  { id: 3, li: "Extra Wide Angle" },
  { id: 4, li: "Extra Wide Angle (120°)" },
  { id: 5, li: "Macro Shooting" },
  { id: 6, li: "Auto Focus" },
  { id: 7, li: "Phase Detect Auto-Focus (PDAF)" },
];
const CData7 = [
  { id: 1, li: "USB 1080p@120fps Recording" },
  { id: 2, li: "2160p @ 60fps (ProRes)" },
  { id: 3, li: "Animoji" },
  { id: 4, li: "Digital image stabilizer (EIS)" },
  { id: 5, li: "HDR" },
  { id: 6, li: "Live Photos" },
  { id: 7, li: "Auto Focus" },
  { id: 8, li: "Portrait Mode" },
  { id: 9, li: "Exposure Control" },
  { id: 10, li: "Virtual Flash" },
  { id: 11, li: "Burst Mode" },
  { id: 12, li: "Time-lapse (Hyperlapse)" },
  { id: 13, li: "TrueDepth Camera" },
  { id: 14, li: "Video HDR" },
  { id: 15, li: "Video HDR Dolby Vision" },
  { id: 16, li: "Slow Motion Video Recording" },
  { id: 17, li: "Face Detection" },
  { id: 18, li: "Face Detection" },
  { id: 19, li: "Timer (self-timer)-C" },
];
const CData8 = [
  { id: 1, li: "Adaptive" },
  { id: 2, li: "LED" },
];

const CameraTable = () => {
  return (
    <div>
      <div className="w-[85rem] h-[3.5rem] bg-[#8298B1] mx-auto">
        <div className="w-[9rem] h-[3.5rem] flex items-center gap-2 pl-3">
          <img src={Camera} className="w-[1.5rem] h-[1.5rem]" />
          <p className="text-[1rem] text-[#FCFCFC]">Camera</p>
        </div>
      </div>
      {/* //table camera  */}
      <div>
        <table className="w-[85rem] h-[204rem] mx-auto">
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Camera Resolution
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              48 MP
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              48 MP
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              48 MP
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem] align-center">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Optical Image Stabilizer (OIS)
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
              OIS Feature
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              Sensor-shift OIS
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem]  w-[21rem]">
              Sensor-shift OIS
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              Sensor-shift OIS
            </td>
          </tr>
          <tr className="w-[85rem] h-[30.5rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Camera Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[5rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Flash
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {CData8.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {CData8.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              <ul>
                {CData8.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Aperture Aperture
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              F1.78
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              F1.78
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              F1.78
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Focal Length
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              24 mm
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              24 mm
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              24 mm
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem] align-center">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Lossless Zoom
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              2 x
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              2 x{" "}
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] text-[#11BA35] w-[21rem]">
              <img src={Help} />
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Video Recording Resolution
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2160p (Ultra HD) 4K
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2160p (Ultra HD) 4K
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              2160p (Ultra HD) 4K
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold">
              Video FPS Value
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem]">
              60 fps
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem]">
              60 fps
            </td>
            <td className="pl-3 border-gray-300 text-[1rem]">60 fps</td>
          </tr>
          <tr className="w-[85rem] h-[17rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem]">
              Video Recording Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem]">
              <ul>
                {CData2.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem]">
              <ul>
                {CData2.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem]">
              <ul>
                {CData2.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[20rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Video Recording Options
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData3.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem] align-top">
              <ul>
                {CData3.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem] align-top">
              <ul>
                {CData3.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[6.5rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Slow Motion Recording Options
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData4.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData4.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData4.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem] align-center">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold text-[1rem] w-[21rem]">
              Second Rear Camera
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
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Second Rear Camera Resolution
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              12 MP
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              12 MP
            </td>
            <td className="pl-3 border-gray-300 text-[1rem]">12 MP</td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Second Rear Camera Aperture
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              F2.8
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              F2.8
            </td>
            <td className="pl-3 border-gray-300 text-[1rem]">F2.8</td>
          </tr>
          <tr className="w-[85rem] h-[15.5rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold pt-4 text-[1rem] w-[21rem] align-top">
              Second Rear Camera Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem] align-top">
              <ul>
                {CData5.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem] align-top">
              <ul>
                {CData5.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem] align-top">
              <ul>
                {CData5.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Third Rear Camera
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
              Third Rear Camera Resolution
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              48 MP
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              12 MP
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              12 MP
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Third Rear Camera Aperture
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              F2.2
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              F2.2
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">F2.2</td>
          </tr>
          <tr className="w-[85rem] h-[14rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Third Rear Camera Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData6.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData6.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData6.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>

          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Front Camera Resolution
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              12 MP
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              12 MP
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              12 MP
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Front Camera Video Resolution
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2160p (Ultra HD) 4K
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              2160p (Ultra HD) 4K
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              2160p (Ultra HD) 4K
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Front Camera FPS Value
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              60 fps
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              60 fps
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              60 fps
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              Front Camera Aperture
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              F1.9
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              F1.9
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">F1.9</td>
          </tr>
          <tr className="w-[85rem] h-[29rem] align-top">
            <td className="pl-3 border-r-[1px] border-gray-300 font-bold align-top pt-4 text-[1rem] w-[21rem]">
              Front Camera Features
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData7.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData7.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
            <td className="pl-3 border-gray-300 pt-4 text-[1rem] w-[21rem]">
              <ul>
                {CData7.map((data) => (
                  <li key={data.id}>{data.li}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="w-[85rem] h-[3.5rem]">
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] font-bold w-[21rem]">
              DxOMark Camera (v5)
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem] font-bold">
              157 Mrs.
            </td>
            <td className="pl-3 border-r-[1px] border-gray-300 text-[1rem] w-[21rem]">
              154 Mrs.
            </td>
            <td className="pl-3 border-gray-300 text-[1rem] w-[21rem]">
              146 Mrs.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CameraTable;
