import React from 'react';
import pDetailPhoto1 from '@/assets/products/p-detail1.png';
import pDetailPhoto2 from '@/assets/products/p-detail2.png';
import pDetailPhoto3 from '@/assets/products/p-detail3.png';
import pDetailPhoto4 from '@/assets/products/p-detail4.png';
import pDetailPhoto5 from '@/assets/products/p-detail5.png';
import pDetailPhoto6 from '@/assets/products/p-detail6.png';

const ProductDetailPhotos = () => {
    const photos = [
        pDetailPhoto1,
        pDetailPhoto2,
        pDetailPhoto3,
        pDetailPhoto4,
        pDetailPhoto5,
        pDetailPhoto6,
    ]

    return (
        <div className='flex flex-wrap gap-6 mt-4 fadeIn'>
            {
                photos?.map((photos, i) => (
                    <img src={photos} key={i} alt="" className='max-w-[668px] object-cover' />
                ))
            }
        </div>
    )
}

export default ProductDetailPhotos