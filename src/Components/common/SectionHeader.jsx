import React from 'react'
import sArrowRight from "@/assets/s-arrow-right.svg";

const SectionHeader = ({title}) => {
  return (
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-[2.8rem] text-black font-semibold">{title}</h1>
        <div>
          <a href="#" className="flex items-center text-2xl">
            <div className="mr-2.5">See all</div>
            <img src={sArrowRight} alt="Arrow" className="w-2.5" />
          </a>
        </div>
      </div>
  )
}

export default SectionHeader