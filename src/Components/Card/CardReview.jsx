import React from "react";
import starIc from "../../assets/star-ic.svg";
import starOutlineIc from "../../assets/star-outline-ic.svg";

const CardReview = ({starsCount = 0, reviewsCount = 0}) => {
  return (
    <div className="flex items-center">
      <div className="relative w-[84px] h-4">
        <div className="flex gap-px">
          <div className="flex absolute gap-px">
            {Array(5)
              .fill(1)
              .map((s, i) => (
                <img src={starOutlineIc} key={i} alt="Star" />
              ))}
          </div>
          {Array(starsCount)
            .fill(1)
            .map((s, i) => (
              <img src={starIc} key={i} alt="Star" />
            ))}
        </div>
      </div>
      <div className="text-xs ml-2 text-black">{reviewsCount} reviews</div>
    </div>
  );
};

export default CardReview;
