import React from 'react'

const DetailProductImages = ({images}) => {
    return (
        <div className="shrink-0 max-w-[668px] mx-auto">
            {
                images?.map((img, i) => (
                    <img className="w-full object-cover" src={img} alt="product" key={i}/>
                ))
            }
        </div>
    )
}

export default DetailProductImages