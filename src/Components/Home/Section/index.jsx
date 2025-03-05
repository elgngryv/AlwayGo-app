import Dyson from "../../../assets/Dyson.svg";
import Arrow from "../../../assets/Arrow-Right.svg";

const Section = () => {
  return (
    <div className="container max-w-[1360px] mx-auto sf-font mt-10">
      <div className="w-full h-[520px] bg-[#70808F] flex items-center justify-between px-16 rounded-lg relative overflow-hidden">
        {/* Left content */}
        <div className="flex flex-col z-10">
          <div className="mb-4">
            <h2 className="font-normal text-22px leading-[28px] text-[#FFFFFF99]">
              Great price
            </h2>
            <div className="space-y-2">
              <h1 className="text-white text-[34px] leading-[44px] w-[253px] font-medium">
                Dyson hair dryer at a super price
              </h1>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex gap-3 items-center pt-20">
            <button className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center ">
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </button>
            <button className="w-2 h-2 bg-white/50 rounded-full"></button>
            <button className="w-2 h-2 bg-white/50 rounded-full"></button>
            <button className="w-2 h-2 bg-white/50 rounded-full"></button>
          </div>
        </div>

        {/* Center - Dyson image */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={Dyson || "/placeholder.svg"} alt="Dyson hair dryer" />
        </div>

        {/* Right content */}
        <div className="flex flex-col items-end text-right z-10">
          <div>
            <h2 className="text-white/80 font-thin  text-[22px] leading-[28px] w-[239px] mb-1">
              Promotion period: from May 12 to June 18,2025
            </h2>
          </div>

          <div className="mt-6">
            <p className="text-white text-[34px] leading-[44px]  font-medium">from 1299$</p>
          </div>

          <div className="mt-auto pt-20">
            <div className="flex items-center gap-2 text-white">
              <h2 className="text-base leading-[24px] font-normal ">All promotions (151)</h2>
              <img src={Arrow || "/placeholder.svg"} alt="" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
