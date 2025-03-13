import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa6";
import product from "../../../assets/products/p6.png";

const Details = () => {
  return (
    <section className="py-8 bg-white md:pt-[40px] md:pb-[92px] antialiased">
      <div className="container max-w-[1360px] mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Image */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full" src={product} alt="product" />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            {/* Title */}
            <h1 className="text-[34px] font-semibold leading-[44px] text-[#000000DE] sm:text-2xl">
              Hair dryer Dyson HD07 NICKEL PINK
            </h1>

            {/* Stars */}
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1 text-[#FED84C]">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="w-[20px] h-[19px]" />
                  ))}
                </div>
                <p className="text-[16px] font-medium leading-[24px] text-[#000000DE]">(345)</p>
              </div>
              <p className="text-[#000000DE] text-[16px] font-medium leading-[24px]">
                Product code: <span className="text-[#000000DE] font-semibold text-[16px]">187774</span>
              </p>
            </div>

            {/* Title */}
            <div className="flex justify-between mt-[60px] mb-[40px]">
              <p className="text-[30px] text-[#000000DE] font-semibold">$149.00</p>
              <div className="w-[306px] h-[48px]">
                <p className="text-[#000000DE] text-[16px] font-normal">
                  <span className="text-[#000000DE] text-[16px] font-semibold">from $62,99 / month</span> when
                  purchasing goods on credit or paying in installments
                </p>
              </div>
            </div>

            {/* Choose color */}
            <div className="mb-[50px]">
              <p className="mb-[16px] text-[#000000DE] font-semibold text-[24px]">Choose a Color</p>
              <div className="flex items-center gap-[24px]">
                <img className="w-[104px] h-[104px]" src={product} />
                <img className="w-[104px] h-[104px]" src={product} />
                <img className="w-[104px] h-[104px]" src={product} />
              </div>
            </div>

            {/* - 1 + */}
            <div className="flex items-center gap-[24px] mb-[40px]">
              <div className="border-[#000000DE] px-[20px] pb-[8px] border-b-2 flex items-center gap-[40px]">
                <FaMinus className="text-[#1D1D1D] w-[16px] h-[16px]" />
                <p className="text-[#000000DE] text-[30px] font-semibold">1</p>
                <FaPlus className="text-[#1D1D1D] w-[16px] h-[16px]" />
              </div>
              <div className="w-[141px]">
                <p className="text-[16px] text-[#000000DE] font-normal">
                  Only
                  <span className="text-sky-400"> 12 Items</span> Letf! Don`t miss it
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-[140px]">
              <button className="bg-[#45658B] text-[#FFFFFF] rounded-[4px] w-[322px] py-[16px] flex justify-center">
                Buy Now
              </button>
              <p className="text-[#313131] text-[16px] font-semibold">Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
