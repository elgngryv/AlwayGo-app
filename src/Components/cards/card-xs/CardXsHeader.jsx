import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const CardXsHeader = () => {
    return (
        <div className="flex px-6 pt-6 ">
            <div className="text-xs text-white bg-[#45658B] p-1 rounded-3xl">Banner</div>
            <button type="button" className="ml-auto">
                <FaRegHeart className="w-5 h-5" />
            </button>
        </div>
    )
}

export default CardXsHeader;