import React from 'react';

const CardXsPrice = ({price = 0}) => {
  return (
    <div className="text-[22px] text-black font-semibold">${price?.toFixed(2)}</div>
  )
}

export default CardXsPrice;