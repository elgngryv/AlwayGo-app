import React from 'react'
import SectionHeader from '@/components/common/SectionHeader';
import CardXs from '@/components/cards/card-xs';

const ProductSecWrap = ({ data, title }) => {
    return (
        <section className='my-24'>
            <SectionHeader title={title} />
            <div className='flex flex-wrap justify-center gap-6'>
                {
                    data.map((d, i) => (
                        <CardXs data={d} key={i} />
                    ))
                }
            </div>
        </section>
    )
}

export default ProductSecWrap