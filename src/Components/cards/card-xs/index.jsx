import React from "react";
import CardXsHeader from "./CardXsHeader";
import CardXsThumbnail from "./CardXsThumbnail";
import CardXsFooter from "./CardXsFooter";

const CardXs = ({data}) => {
  const {name, img, price, reviewsCount, starsCount, id} = data;
   return (
    <div className="w-80 min-w-80 bg-[#F6F6F6] h-[460px] rounded-lg">
      <CardXsHeader />
      <CardXsThumbnail img={img} />
      <CardXsFooter reviewsCount={reviewsCount} starsCount={starsCount} price={price} name={name} id={id}/>
    </div>
  );
};

export default CardXs;
