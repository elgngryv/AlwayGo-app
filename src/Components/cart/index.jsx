import React from 'react'
import SwripperProducts from '../common/SwripperProducts';
import OrderSummary from './OrderSummary';
import CartHeader from './CartHeader';
import CartProducts from './CartProducts';

import p1 from '@/assets/products/p2.png'
import p3 from '@/assets/products/p3.png'
import p5 from '@/assets/products/p5.png'
import p6 from '@/assets/products/p6.png'

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
            <section>
                <CartHeader count={2} />
                <div className='flex'>
                    <CartProducts />
                    <OrderSummary />
                </div>
            </section>
            <SwripperProducts data={likeThisProducts} title='Like This? Check These Out' cardType='xs' />
        </div>
    )
}

export default Cart