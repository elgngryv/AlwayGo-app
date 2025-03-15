import SwripperProducts from '@/components/common/SwripperProducts'
import React from 'react'

import p1 from "@/assets/products/p1.png";
import p3 from "@/assets/products/p3.png";
import p5 from "@/assets/products/p5.png";
import p6 from "@/assets/products/p6.png";

const ProductList = () => {
    const products = {
        lastViewed: [
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
        ],
        likeThis: [
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
    }
    return (
        <>
            <SwripperProducts data={products.lastViewed} title='Last viewed' cardType='xs' />
            <SwripperProducts data={products.likeThis} title='Like This? Check These Out' cardType='xs' />
        </>
    )
}

export default ProductList