import React from 'react'

const DetailProductPrice = ({price}) => {
  return (
    <p className="text-3xl text-[#000000DE] font-semibold">${price.toFixed(2)}</p>
)
}

export default DetailProductPrice