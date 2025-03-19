import React from 'react'
import SwripperProducts from '../common/SwripperProducts';
import { IoCloseOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

import p6 from '@/assets/products/p6.png'
import p2 from '@/assets/products/p2.png'
import p1 from '@/assets/products/p2.png'
import p5 from '@/assets/products/p5.png'
import p3 from '@/assets/products/p3.png'

const Cart = () => {
    const likeThisProducts = [
        {
            id: 1,
            reviewsCount: 11,
            starsCount: 3,
            name: "Comb hair dryer BRAUN AS 720",
            price: 49.0,
            img: p1,
        },
        {
            id: 1,
            reviewsCount: 43,
            starsCount: 4,
            name: "Comb hair dryer BRAUN AS 320",
            price: 79.0,
            img: p3,
        },
        {
            id: 1,
            reviewsCount: 75,
            starsCount: 5,
            name: "Iphone 16 Pro Max 256 GB Black Titanium",
            price: 1500.0,
            img: p6,
        },
        {
            id: 1,
            reviewsCount: 41,
            starsCount: 3,
            name: "Comb hair dryer BRAUN AS 720",
            price: 29.0,
            img: p5,
        },
        {
            id: 1,
            reviewsCount: 41,
            starsCount: 3,
            name: "Comb hair dryer BRAUN AS 720",
            price: 39.0,
            img: p1,
        },
    ]

    return (
        <div className='max-w-[1448px] mx-auto px-10 mt-10'>
            <div className='flex items-center text-black pb-6 border-b border-black'>
                <h4 className='mr-6 font-normal text-[46px]'>My Bag</h4>
                <span className='text-2xl'>(2 items)</span>
            </div>
            <div className='flex'>
                <div className='mr-6'>
                    <div className='flex items-center py-9 border-b border-[#1D1D1D]'>
                        <div className='flex bg-[#F6F6F6] size-[200px] rounded-sm mr-6'>
                            <img src={p6} alt='Product' className='size-40 m-auto' />
                        </div>
                        <div>
                            <h5 className='text-2xl font-normal mb-4 text-[#1D1D1D] max-w-[297px] line-clamp-2'>iPhone 15 Pro Max 1 TB Black Titanium</h5>
                            <span className='text-[#1D1D1D] font-semibold text-3xl'>$949.00</span>
                            <div className='text-base text-[#00000099] flex mt-9'>
                                <span className='mr-2'>Seller:</span>
                                Apple
                            </div>
                        </div>
                        <div className='border-b-2 border-[#1D1D1D] flex items-center mr-[38px]'>
                            <button type='button' className='flex w-14 h-[60px]'>
                                <FiMinus className='size-8 m-auto' />
                            </button>
                            <span className='text-3xl font-semibold text-[#1D1D1D] w-16 text-center'>1</span>
                            <button type='button' className='flex w-14 h-[60px]'>
                                <FiPlus className='size-8 m-auto' />
                            </button>
                        </div>
                        <button type='button' className='size-12 bg-[#EEEEEE] rounded-full flex'>
                            <IoCloseOutline className='m-auto size-7 text-[#1D1D1D]' />
                        </button>
                    </div>

                    <div className='flex items-center py-9 border-b border-[#1D1D1D]'>
                        <div className='flex bg-[#F6F6F6] size-[200px] rounded-sm mr-6'>
                            <img src={p2} alt='Product' className='size-40 m-auto' />
                        </div>
                        <div>
                            <h5 className='text-2xl font-normal mb-4 text-[#1D1D1D] max-w-[297px] line-clamp-2'>AppleMacbook Air M2 16gb 256gb Ssd Macos 13"</h5>
                            <span className='text-[#1D1D1D] font-semibold text-3xl'>$1249.00</span>
                            <div className='text-base text-[#00000099] flex mt-9'>
                                <span className='mr-2'>Seller:</span>
                                Apple
                            </div>
                        </div>
                        <div className='border-b-2 border-[#1D1D1D] flex items-center mr-[38px]'>
                            <button type='button' className='flex w-14 h-[60px]'>
                                <FiMinus className='size-8 m-auto' />
                            </button>
                            <span className='text-3xl font-semibold text-[#1D1D1D] w-16 text-center'>22</span>
                            <button type='button' className='flex w-14 h-[60px]'>
                                <FiPlus className='size-8 m-auto' />
                            </button>
                        </div>
                        <button type='button' className='size-12 bg-[#EEEEEE] rounded-full flex'>
                            <IoCloseOutline className='m-auto size-7 text-[#1D1D1D]' />
                        </button>
                    </div>
                </div>

                <div className='bg-[#F6F6F6] p-6 max-w-[553px] h-[648px] w-full flex flex-col'>
                    <div>
                        <div className='pb-6 mb-9 border-b border-black font-normal text-[46px] leading-[56px]'>
                            Order Summary
                        </div>
                        <div className='text-2xl text-[#1D1D1D] border-b border-[#B3B3B3] pb-4 flex flex-col gap-6'>
                            <div className='flex justify-between items-center'>
                                <span>Subtotal</span>
                                <span>$2198.00</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span>Delivery</span>
                                <span>$9.90</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span>Discount</span>
                                <span>$9.90</span>
                            </div>
                        </div>

                        <div className='text-2xl text-[#1D1D1D] pt-6'>
                            <div className='flex justify-between items-center mb-5'>
                                <span>Total</span>
                                <span>$2207.9</span>
                            </div>

                            <div className='flex justify-between'>
                                <span>Coupon Code:</span>
                                <div className='flex'>
                                    <div className='flex flex-col'>
                                        <input type="text" placeholder='Enter your coupon code' className='text-base focus:outline-none focus:border-[#45658B] max-w-[218px] mr-2 border-b border-[#B3B3B3] bg-[#F6F6F6] h-14 px-4' />
                                        <span className='mt-1 text-[#F14A55] text-xs'>Incorrect Code</span>
                                    </div>
                                    <button type='button' className='max-w-[109px] h-14 w-full rounded px-[38px] bg-[#EEEEEE] text-center text-base font-semibold text-[#00000061]'>
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-auto pb-4'>
                        <button type='button' className='h-14 text-white text-base font-semibold w-full rounded bg-[#45658B]'>CHECKOUT NOW</button>
                        <Link to='/' className='text-base font-semibold text-black mt-6 text-center w-full block'>CONTINUE SHOPPING</Link>
                    </div>
                </div>
            </div>
            <SwripperProducts data={likeThisProducts} title='Like This? Check These Out' cardType='xs' />
        </div>
    )
}

export default Cart