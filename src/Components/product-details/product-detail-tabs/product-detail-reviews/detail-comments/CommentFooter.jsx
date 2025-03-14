import React, { useState } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";


const CommentFooter = ({ likes, dislikes }) => {
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);

    const likeHandler = () => {
        setLike(prev => !prev);
        setDislike(false)
    }

    const dislikeHandler = () => {
        setDislike(prev => !prev);
        setLike(false)
    }

    return (
        <div className='flex items-center justify-between'>
            <div>
                <a href="#" className='text-base font-normal text-[#909090]'>Answer</a>
            </div>
            <div className='flex items-center text-[#909090]'>
                <div className='flex items-center mr-5'>
                    <button type='button' onClick={() => likeHandler()}>
                        {
                            like ? <BiSolidLike className='size-6 text-[#45658B]' />
                                : <BiLike className='size-6' />
                        }
                    </button>
                    <span className='text-base font-semibold ml-0.5'>
                        ({like ? likes + 1 : likes})
                    </span>
                </div>
                <div className='flex items-center'>
                    <button type='button' onClick={() => dislikeHandler()}>
                        {
                            dislike ? <BiSolidDislike className='size-6 text-[#45658B]' />
                                : <BiDislike className='size-6' />
                        }
                    </button>
                    <span className='text-base font-semibold ml-0.5'>
                        ({dislike ? dislikes + 1 : dislikes})
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CommentFooter