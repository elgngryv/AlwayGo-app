import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from "react-icons/fa6";

const DetailFavoriteBtn = () => {
  const [added, setAdded] = useState(true);
  const addFavoriteHandler = () => {
    setAdded(prev => !prev)
  }
  return (
    <button type="button" className="mb-auto mt-1 mr-0.5" onClick={addFavoriteHandler}>
      {
        added ? <FaHeart className="size-8 text-red-600" />
          : <FaRegHeart className="size-8" />
      }
    </button>
  )
}

export default DetailFavoriteBtn