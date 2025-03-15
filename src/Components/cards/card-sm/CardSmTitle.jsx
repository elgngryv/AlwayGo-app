import React from 'react'
import { Link } from 'react-router-dom'

const CardSmTitle = ({ name, id }) => {
    return (
        <div className="mb-4 mt-1">
            <Link to={`/product-details/${id}`} className="text-black text-2xl line-clamp-2 max-w-80">
                {name}
            </Link>
        </div>
    )
}

export default CardSmTitle