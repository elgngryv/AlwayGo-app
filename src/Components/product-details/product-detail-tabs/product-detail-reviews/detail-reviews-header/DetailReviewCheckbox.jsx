import React from 'react';
import { Checkbox } from "@/components/ui/checkbox"

const DetailReviewCheckbox = ({ text }) => {
    return (
        <label className='flex items-center'>
            <Checkbox className='mr-3' />
            <span className='text-base text-black font-normal select-none cursor-pointer'>{text}</span>
        </label>
    )
}

export default DetailReviewCheckbox