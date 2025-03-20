import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import p6 from '@/assets/products/p6.png'
import p2 from '@/assets/products/p2.png'

const products = [
    {
        img: p6,
        name: 'iPhone 15 Pro Max 1 TB Black Titanium',
        price: 949.00,
        seller: 'Apple',
        count: 1
    },
    {
        img: p2,
        name: 'Apple Macbook Air M2 16gb 256gb Ssd Macos 13"',
        price: 1249.00,
        seller: 'Apple',
        count: 22
    }
]

const CartProducts = () => {
    return (<div className='mr-6 w-full'>
        {
            products.map((product, i) => (
                <div className='flex items-center py-9 border-b border-[#1D1D1D] justify-between' key={i}>
                    <div className='flex items-center'>
                        <div className='flex bg-[#F6F6F6] size-[200px] rounded-sm mr-6'>
                            <img src={product.img} alt='Product' className='size-40 m-auto' />
                        </div>
                        <div>
                            <h5 className='text-2xl font-normal mb-4 text-[#1D1D1D] max-w-[297px] line-clamp-2'>{product.name}</h5>
                            <span className='text-[#1D1D1D] font-semibold text-3xl'>${product.price.toFixed(2)}</span>
                            <div className='text-base text-[#00000099] flex mt-9'>
                                <span className='mr-2'>Seller:</span>
                                {product.seller}
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='border-b-2 border-[#1D1D1D] flex items-center mr-[38px]'>
                            <button type='button' className='flex w-14 h-[60px]'>
                                <FiMinus className='size-8 m-auto' />
                            </button>
                            <span className='text-3xl font-semibold text-[#1D1D1D] w-16 text-center'>{product.count}</span>
                            <button type='button' className='flex w-14 h-[60px]'>
                                <FiPlus className='size-8 m-auto' />
                            </button>
                        </div>
                        <button type='button' className='size-12 bg-[#EEEEEE] rounded-full flex'>
                            <IoCloseOutline className='m-auto size-7 text-[#1D1D1D]' />
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
    )
}

export default CartProducts