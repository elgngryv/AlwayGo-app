import React from "react";

const Clear = () => {
  return (
    <div>
      <div className="w-[85rem] h-[6.5rem] flex justify-between items-center mx-auto ">
        <div className="pl-3">
          <h1 className="text-[2.8rem] text-[#000000] font-[400]">Compare</h1>
        </div>
        <div>
          <button className="w-[12.9rem] h-[3.5rem] text-[#000000DE] border-[1px] border-[#45658B] rounded-sm text-[1rem] font-semibold">
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clear;
