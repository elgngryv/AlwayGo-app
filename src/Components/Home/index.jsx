import React from 'react'
import HeroSection from '@/components/home/hero-section'
import SwripperProducts from '@/components/common/SwripperProducts'
import FreeDeliveryBox from '@/components/home/FreeDeliveryBox';

import p1 from "@/assets/products/p1.png";
import p3 from "@/assets/products/p3.png";
import p5 from "@/assets/products/p5.png";
import p6 from "@/assets/products/p6.png";
import p2 from "@/assets/products/p2.png";
import p4 from "@/assets/products/p4.png";
import ProductSecWrap from '../common/ProductSecWrap';

const HomeWrapper = () => {
    const products = {
        popular: [
            {
                id: 1,
                reviewsCount: 11,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 49.00,
                img: p1,
            },
            {
                id: 2,
                reviewsCount: 43,
                starsCount: 4,
                name: "Comb hair dryer BRAUN AS 320",
                price: 79.00,
                img: p3,
            },
            {
                id: 3,
                reviewsCount: 75,
                starsCount: 5,
                name: "Iphone 16 Pro Max 256 GB Black Titanium",
                price: 1500.0,
                img: p6,
            },
            {
                id: 4,
                reviewsCount: 41,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 29.00,
                img: p5,
            },
            {
                id: 5,
                reviewsCount: 41,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 39.00,
                img: p1,
            },
        ],
        moreProductsChooseFrom: [
            {
                id: 1,
                reviewsCount: 21,
                starsCount: 4,
                name: 'MacBook Air 13.6" Apple M3 (8C CPU/8C GPU)',
                price: 149.0,
                img: p2,
            },
            {
                id: 1,
                reviewsCount: 13,
                starsCount: 3,
                name: "Apple iPhone 20W USB-C Power Adapter",
                price: 40.0,
                img: p4,
            },
            {
                id: 1,
                reviewsCount: 45,
                starsCount: 5,
                name: "Iphone 16 Pro Max 256 GB Black Titanium",
                price: 1500.0,
                img: p6,
            },
        ],
        newProducts: [
            {
                id: 1,
                reviewsCount: 11,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 49.00,
                img: p1,
            },
            {
                id: 1,
                reviewsCount: 43,
                starsCount: 4,
                name: "Comb hair dryer BRAUN AS 320",
                price: 79.00,
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
                name: 'Comb hair dryer BRAUN AS 720',
                price: 29.00,
                img: p5,
            },
            {
                id: 1,
                reviewsCount: 41,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 39.00,
                img: p1,
            },
        ],
        onlyInAlWayGo: [
            {
                id: 1,
                reviewsCount: 11,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 49.00,
                img: p1,
            },
            {
                id: 1,
                reviewsCount: 43,
                starsCount: 4,
                name: "Comb hair dryer BRAUN AS 320",
                price: 79.00,
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
                name: 'Comb hair dryer BRAUN AS 720',
                price: 29.00,
                img: p5,
            },
            {
                id: 1,
                reviewsCount: 41,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 39.00,
                img: p1,
            },
        ],
        addedWishlist: [
            {
                id: 1,
                reviewsCount: 11,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 49.00,
                img: p1,
            },
            {
                id: 1,
                reviewsCount: 43,
                starsCount: 4,
                name: "Comb hair dryer BRAUN AS 320",
                price: 79.00,
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
                name: 'Comb hair dryer BRAUN AS 720',
                price: 29.00,
                img: p5,
            },
            {
                id: 1,
                reviewsCount: 41,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 39.00,
                img: p1,
            },
        ],
        topSales: [
            {
                id: 1,
                reviewsCount: 11,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 49.00,
                img: p1,
            },
            {
                id: 1,
                reviewsCount: 43,
                starsCount: 4,
                name: "Comb hair dryer BRAUN AS 320",
                price: 79.00,
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
                name: 'Comb hair dryer BRAUN AS 720',
                price: 29.00,
                img: p5,
            },
            {
                id: 1,
                reviewsCount: 41,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 39.00,
                img: p1,
            },
            {
                id: 1,
                reviewsCount: 11,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 49.00,
                img: p1,
            },
            {
                id: 1,
                reviewsCount: 43,
                starsCount: 4,
                name: "Comb hair dryer BRAUN AS 320",
                price: 79.00,
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
                name: 'Comb hair dryer BRAUN AS 720',
                price: 29.00,
                img: p5,
            },
            {
                id: 1,
                reviewsCount: 41,
                starsCount: 3,
                name: 'Comb hair dryer BRAUN AS 720',
                price: 39.00,
                img: p1,
            },
            {
                id: 1,
                reviewsCount: 43,
                starsCount: 4,
                name: "Comb hair dryer BRAUN AS 320",
                price: 79.00,
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
        ]
    }
    return (
        <div className="container max-w-[1433px] mx-auto px-[40px]">
            <HeroSection />
            <SwripperProducts data={products.popular} cardType='xs' title='Our Popular products' />
            <SwripperProducts data={products.moreProductsChooseFrom} cardType='md' title='More products to choose from' />
            <SwripperProducts data={products.newProducts} cardType='xs' title='Hot New Products' />
            <FreeDeliveryBox />
            <SwripperProducts data={products.addedWishlist} cardType='xs' title='Most often added to wishlist' />
            <SwripperProducts data={products.onlyInAlWayGo} cardType='sm' title='Only in AlWayGo' />
            <ProductSecWrap data={products.topSales} title='Top sales'/>
        </div>
    )
}

export default HomeWrapper