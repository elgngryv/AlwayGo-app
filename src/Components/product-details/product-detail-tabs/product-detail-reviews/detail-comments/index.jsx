import React from 'react'
import DetailComment from './DetailComment'

import pReview1 from '@/assets/products/p-review1.png'
import pReview2 from '@/assets/products/p-review2.png';

const DetailComments = () => {
    const comments = [
        {
            firstName: 'Elgun',
            lastName: 'Qarayev',
            createdDate: '13 May 2021',
            ratingCount: 4,
            description: `A Game-Changer for My Wife's Hair Care Routine (and Our Marriage)
                         I'm not exactly the target audience for hair styling products, but I'm writing this review because my wife's enthusiasm for the Dyson Airwrap™ Multi-Styler Complete Long is simply infectious. She's been using it for a few weeks now, and I've witnessed a transformation – not just in her hair, but also in her morning  routine's stress levels.`,
            photos: [pReview1, pReview2, pReview1],
            likes: 21,
            dislikes: 3
        },
        {
            firstName: 'Alakbar',
            lastName: 'Alakbarov',
            createdDate: '13 Iyun 2024',
            ratingCount: 5,
            description: `A Game-Changer for My Wife's Hair Care Routine (and Our Marriage)
                         I'm not exactly the target audience for hair styling products, but I'm writing this review because my wife's enthusiasm for the Dyson Airwrap™ Multi-Styler Complete Long is simply infectious. She's been using it for a few weeks now, and I've witnessed a transformation – not just in her hair, but also in her morning  routine's stress levels.`,
            photos: [pReview2, pReview1, pReview2],
            likes: 14,
            dislikes: 9
        },
        {
            firstName: 'Layla',
            lastName: 'Ahmedova',
            createdDate: '22 Mart 2019',
            ratingCount: 3,
            description: `A Game-Changer for My Wife's Hair Care Routine (and Our Marriage)
                         I'm not exactly the target audience for hair styling products, but I'm writing this review because my wife's enthusiasm for the Dyson Airwrap™ Multi-Styler Complete Long is simply infectious. She's been using it for a few weeks now, and I've witnessed a transformation – not just in her hair, but also in her morning  routine's stress levels.`,
            photos: [pReview1, pReview2, pReview1],
            likes: 78,
            dislikes: 56
        }
    ]
    return (
        <div className='space-y-8'>
            {
                comments.map((comment, i) => (
                    <DetailComment key={i} data={comment}/>
                ))
            }
        </div>
    )
}

export default DetailComments