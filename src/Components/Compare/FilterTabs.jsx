import React, { useState } from "react";

const FilterTabs = () => {
  const [tab, setTab] = useState("parameters");

  const handleTabClick = (tab) => {
    setTab(tab);
  };
  return (
    <div>
      <div className="w-[85rem] h-[3rem] mx-auto">
        <div className="flex border-b-[1px] border-[#000000] ">
          <div
            onClick={() => handleTabClick("parameters")}
            className={`w-[9rem] h-[3rem] text-[1rem]
                         flex justify-center items-center cursor-pointer duration-100
                         ${tab === "parameters"
                             ? "text-[#45658B] border-b-[2px] border-[#45658B]"
                             : "text-[#000000]"
                         }`}>
            <p>All parameters</p>
          </div>
          <div
            onClick={() => handleTabClick("differences")}
            className={`w-[9rem] h-[3rem] text-[1rem] duration-100
                    flex justify-center items-center cursor-pointer 
                    ${tab === "differences"
                        ? "text-[#45658B] border-b-[2px] border-[#45658B]"
                        : "text-[#000000]"
                    }`}>
            <p>Only differences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
