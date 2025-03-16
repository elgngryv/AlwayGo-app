import React from 'react';
import { BsGrid3X3Gap } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Dropdown from '@/components/ui/Dropdown';

const dropdowns = {
    sortByRating: {
        name: 'Sort by rating',
        btnClasses: 'bg-[#EEEEEE] font-normal',
        options: [
            'Best Match',
            'Sold',
            'Newest Arrivals',
            'Cheap first',
            'Expensive first'
        ]
    },
    categoriesFilter: {
        name: 'Hair dryers',
        btnClasses: 'bg-[#EEEEEE] font-normal',
        options: [
            'Hair dryers',
            'Hair straighteners',
            'Electric curlers',
            'Electric curlers',
            'Multistylers'
        ]
    }
}
const TopFilters = () => {
    return (
        <div className='flex justify-between items-center pr-3 mb-4'>
            <div className='flex items-center space-x-4'>
                <div>
                    <span className='text-base text-black'>Selected 100 items</span>
                </div>
                <button type='button' className='text-[#45658B] text-base font-medium border border-[#45658B] px-9 rounded h-10 transition-colors hover:bg-[#45658B] hover:text-white'>
                    Reset
                </button>
                <Dropdown data={dropdowns.categoriesFilter} />
                <div className='h-10 bg-[#EEEEEE] px-2 flex items-center rounded'>
                    <span className='text-base text-black font-normal mr-1'>
                        21 - 120$
                    </span>
                    <button type='button'>
                        <IoCloseOutline className='text-black size-6' />
                    </button>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='mr-5'>
                    <Dropdown data={dropdowns.sortByRating} />
                </div>
                <button type='button' className='mr-4'>
                    <BsGrid3X3Gap className='text-[#45658B] size-6 m-auto' />
                </button>
                <button type='button'>
                    <RxHamburgerMenu className='text-[#1D1D1D] size-6 m-auto' />
                </button>
            </div>
        </div>
    )
}

export default TopFilters