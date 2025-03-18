import React from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa6";
import x from "../../../assets/icons/x.png";

const Cards = () => {
  const cards = [
    { type: "Visa", number: ".... .... .... 4567" },
    { type: "Mastercard", number: ".... .... .... 4567" },
    { type: "Visa", number: ".... .... .... 4567" },
  ];

  return (
    <div className="bg-[#F6F6F6] px-[24px] min-h-screen relative">
      <div className="mt-6 space-y-4">
        {cards.map((card, index) => (
          <div key={index} className="flex items-center justify-between bg-[#FCFCFC] p-3 rounded shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 flex items-center justify-center text-2xl text-black">
                {card.type === "Visa" ? (
                  <FaCcVisa className="rounded-full" />
                ) : (
                  <FaCcMastercard className="rounded-full" />
                )}
              </div>
              <p className="text-[16px] font-semibold text-[#000000DE]">{card.number}</p>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-[#000000DE] font-medium text-[16px]">Edit</button>
              <img src={x} alt="Remove card" className="w-[12px] text-[#1D1D1D] h-[12px] cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <button className="absolute bottom-7 right-4 text-[#000000DE] font-semibold text-[16px]">Add new card</button>
    </div>
  );
};

export default Cards;
