import React from "react";
import StarRating from "../StarRating";
import CardMdThumbnail from "./CardMdThumbnail";
import CardMdTitle from "./CardMdTitle";
import CardMdFooter from "./CardMdFooter";

const CardMd = ({ data }) => {
  const { name, img, price, reviewsCount, starsCount, id } = data;
  return (
    <div className="bg-[#F6F6F6] px-10 flex items-center w-[783px] h-[380px] rounded-lg">
      <CardMdThumbnail img={img} />
      <div className="ml-[60px]">
        <StarRating reviewsCount={reviewsCount} starsCount={starsCount} />
        <CardMdTitle name={name} id={id} />
        <CardMdFooter price={price} />
      </div>
    </div>
  );
};

export default CardMd;
