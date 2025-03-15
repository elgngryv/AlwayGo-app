import React from 'react'
import { Link } from 'react-router-dom'

const CardMdTitle = ({name, id}) => {
  return (
    <Link to={`/product-details/${id}`} className='text-3xl text-black line-clamp-2 max-w-80 mt-1'>{name}</Link>
  )
}

export default CardMdTitle