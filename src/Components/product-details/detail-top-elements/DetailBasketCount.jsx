import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

const DetailBasketCount = () => {
    return (
        <div className="border-[#000000DE] px-5 pb-2 border-b-2 flex items-center gap-10">
            <button type='button'>
                <FaMinus className="text-[#1D1D1D] size-4" />
            </button>
            <p className="text-[#000000DE] text-3xl font-semibold">1</p>
            <button type='button'>
                <FaPlus className="text-[#1D1D1D] size-4" />
            </button>
        </div>
    )
}

export default DetailBasketCount