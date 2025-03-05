import React from "react";
import Logo from "../../../assets/LOGO.svg";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import Catalog from "../../../assets/Catalog.svg";

const Header = () => {
  return (
    <div className="container max-w-[1360px] mx-auto sf-font">
      {/* Header üst kısmı */}
      <div className="flex justify-between items-center py-4">
        {/* Logo ve başlık */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-12" />
          <h2 className="font-bold text-[46px] leading-[56px] text-[#314863]">
            AlWayGo
          </h2>
        </div>

        {/* Arama formu ve ikonlar */}
        <div className="flex items-center gap-6">
          {/* Arama formu */}
          <form className="w-[439px] flex items-center gap-2">
            <input
              id="search"
              type="text"
              className="flex-grow px-4 py-1 outline-none text-black text-base leading-[24px] font-thin border-b border-gray-300"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search">
              <FiSearch className="h-5 w-5 text-gray-700" />
            </button>
          </form>

          {/* Kullanıcı ve alışveriş ikonları */}
          <div className="flex items-center gap-6">
            <FaRegUser className="w-[20px] h-[20px] text-gray-700" />
            <div className="flex items-center gap-2">
              <FaRegHeart className="w-[20px] h-[20px] text-gray-700" />
              <p className="font-normal text-base leading-[24px]">0</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineShoppingBag className="w-[20px] h-[20px] text-gray-700" />
              <p className="font-normal text-base leading-[24px]">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Header alt kısmı */}
     
    </div>
  );
};

export default Header;
