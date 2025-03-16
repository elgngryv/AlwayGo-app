import React, { Children, useState } from 'react'
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

const SideFilter = ({title = '', count = null, children}) => {
    const [active, setActive] = useState(false);
    const toggleFilterHandler = () => {
        setActive(prev => !prev)
    }
    return (
        <div className='pt-10'>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold flex items-center'>
                    <span className='text-2xl mr-3 text-black'>{title}</span>
                    <span className='text-base text-[#B3B3B3]'>{count && '(' + count +')'}</span>
                </h3>
                <div>
                    <button type='button' onClick={toggleFilterHandler}>
                        {
                            active ? <LuMinus className='text-black size-6' />
                                : <LuPlus className='text-black size-6' />
                        }
                    </button>
                </div>
            </div>
            <div className={'mt-3 ' + (active ? 'block' : 'hidden')}>
                    {children}
            </div>
        </div>
    )
}

export default SideFilter