import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
    const [subtotal, setSubtotal] = useState(2198.00);
    const [delivery, setDelivery] = useState(9.90);
    const [discount, setDiscount] = useState(77.00);
    const [total, setTotal] = useState(2207.90);
    const [couponCode, setCouponCode] = useState('');
    const [couponCodeErr, setCouponCodeErr] = useState(false)

    const addCouponCodeHandler = () => {
        setCouponCodeErr(true)
    }

    return (
        <div className='bg-[#F6F6F6] p-6 max-w-[553px] h-[648px] w-full flex flex-col'>
            <div>
                <div className='pb-6 mb-9 border-b border-black font-normal text-[46px] leading-[56px]'>
                    Order Summary
                </div>
                <div className='text-2xl text-[#1D1D1D] border-b border-[#B3B3B3] pb-4 flex flex-col gap-6'>
                    <div className='flex justify-between items-center'>
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span>Delivery</span>
                        <span>${delivery.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span>Discount</span>
                        <span>${discount.toFixed(2)}</span>
                    </div>
                </div>
                <div className='text-2xl text-[#1D1D1D] pt-6'>
                    <div className='flex justify-between items-center mb-5'>
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Coupon Code:</span>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <input type="text" placeholder='Enter your coupon code' onChange={e => setCouponCode(e.target.value)} className='text-base focus:outline-none focus:border-[#45658B] max-w-[218px] mr-2 border-b border-[#B3B3B3] bg-[#F6F6F6] h-14 px-4' />
                                {couponCodeErr && <span className='mt-1 text-[#F14A55] text-xs'>Incorrect Code</span>}
                            </div>
                            <button type='button' onClick={addCouponCodeHandler} disabled={couponCode.length > 2 ? false : true} className='max-w-[109px] h-14 w-full rounded px-[38px] disabled:bg-[#EEEEEE] disabled:text-[#00000061] bg-[#45658B] text-white text-center text-base font-semibold'>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-auto pb-4'>
                <button type='button' className='h-14 text-white text-base font-semibold w-full rounded bg-[#45658B]'>CHECKOUT NOW</button>
                <Link to='/product-filters' className='text-base font-semibold text-black mt-6 text-center w-full block'>CONTINUE SHOPPING</Link>
            </div>
        </div>
    )
}

export default OrderSummary