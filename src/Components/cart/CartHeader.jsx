import React from 'react'

const CartHeader = ({count}) => {
    return (
        <div className='flex items-center text-black pb-6 border-b border-black'>
            <h4 className='mr-6 font-normal text-[46px]'>My Bag</h4>
            <span className='text-2xl'>({count} items)</span>
        </div>
    )
}

export default CartHeader