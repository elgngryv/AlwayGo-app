import React, { useState } from 'react'
import { DualRangeSlider } from '@/components/ui/DualRangeSlider';



const PriceFilter = () => {
    const [values, setValues] = useState([0, 9999]);
    return (
        <>
            <div className='flex items-center gap-3'>
                <input type="text" value={values[0]} className='max-w-[140px] px-3 py-1.5 text-center text-sm text-black h-9 rounded bg-[#EEEEEE] focus:outline-none ring-[#45658B] focus:ring-1' />
                <div className='w-full max-w-5 bg-black h-px'></div>
                <input type="text" value={values[1]} className='max-w-[140px] px-3 py-1.5 text-center text-sm text-black h-9 rounded bg-[#EEEEEE] focus:outline-none ring-[#45658B] focus:ring-1' />
            </div>
            <div className='mt-5 pb-1'>
                <DualRangeSlider
                    color="orange"
                    value={values}
                    onValueChange={setValues}
                    min={0}
                    max={9999}
                    step={1}
                />
            </div>
        </>
    )
}

export default PriceFilter