import React from 'react'

const DetailProductCode = ({code}) => {
  return (
    <p className="text-[#000000DE] text-base font-medium">
    Product code: <span className="text-[#000000DE] font-semibold text-[16px]">{code}</span>
  </p>  )
}

export default DetailProductCode