import React from 'react';
const DetailProductColors = ({colors}) => {
    return (
        <div className="mb-[50px]">
            <p className="mb-4 text-[#000000DE] font-semibold text-2xl">Choose a Color</p>
            <div className="flex items-center gap-6">
                {
                    colors?.map((color, i) => (
                        <label className='group cursor-pointer size-[104px] relative' key={i}>
                            <img className="w-full h-full object-cover rounded" src={color} />
                            <input type="radio" className='hidden peer/color' name='color'/>
                            <div className='absolute inset-0 size-full bg-[#F6F6F6] -z-10 peer-checked/color:ring-2 ring-[#45658B] rounded'></div>
                        </label>
                    ))
                }
            </div>
        </div>
    )
}

export default DetailProductColors