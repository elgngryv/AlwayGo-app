import React from 'react';

const CardXsPrice = ({price}) => {
  return (
    <div className="text-[22px] text-black font-semibold">${price.toFixed(2)}</div>
  )
}

export default CardXsPrice;