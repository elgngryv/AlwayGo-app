import React from 'react'

const DetailProductStockInfo = ({ stockCount }) => {
    return (
        <div>
            <p className="text-base text-[#000000DE] font-normal">
                Only <span className="text-sky-400"> 
                    {stockCount} Items</span> Letf! <br /> Don`t miss it
            </p>
        </div>
    )
}

export default DetailProductStockInfo