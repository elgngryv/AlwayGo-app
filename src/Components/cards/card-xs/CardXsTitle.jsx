import React from 'react'
import { Link } from 'react-router-dom'

const CardXsTitle = ({ name, id }) => {
    return (
        <div className="mb-2 mt-1">
            <Link to={`/product-details/${id}`} className="text-black text-base leading-5 line-clamp-2 max-w-48">
                {name}
            </Link>
        </div>
    )
}

export default CardXsTitle