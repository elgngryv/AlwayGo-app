import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const CardSmHeader = () => {
    return (
        <div className="flex px-6 pt-6 ">
            <div className="text-sm text-white bg-[#45658B] py-1 px-2 rounded-3xl">Banner</div>
            <button type="button" className="ml-auto">
                <FaRegHeart className="w-6 h-6" />
            </button>
        </div>
    )
}

export default CardSmHeader;