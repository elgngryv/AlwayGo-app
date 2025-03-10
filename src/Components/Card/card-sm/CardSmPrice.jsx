import React from 'react';

const CardSmPrice = ({price}) => {
  return (
    <div className="text-lg text-black font-semibold">${price.toFixed(2)}</div>
  )
}

export default CardSmPrice;