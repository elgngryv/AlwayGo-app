import React from "react";
import starIc from "../../assets/star-ic.svg";
import starOutlineIc from "../../assets/star-outline-ic.svg";

const StarRating = ({ starsCount = 0, reviewsCount = 0, md = false }) => {
  return (
    <div className="flex items-center ">
      <div className={"relative " + (md ? 'w-[120px] h-6' : 'w-[84px] h-4')}>
        <div className="flex gap-px h-full">
          <div className="flex absolute gap-px h-full">
            {Array(5)
              .fill(1)
              .map((s, i) => (
                  <img src={starOutlineIc} alt="Star" className="h-full" key={i}/>
              ))}
          </div>
          {Array(starsCount)
            .fill(1)
            .map((s, i) => (
              <img src={starIc} key={i} alt="Star" className="h-full" />
            ))}
        </div>
      </div>
      {
        !md && <div className="text-xs ml-2 text-black">{reviewsCount} reviews</div>
      }
    </div>
  );
};

export default StarRating;
