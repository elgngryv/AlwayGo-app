import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"

const CategoriesFilter = ({ data }) => {
    const [categories, setCategories] = useState(data)
    const searchHandler = event => {
        let searcjQery = event.target.value.toLowerCase(),
            displayedContacts = data.filter(el => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searcjQery) !== -1;
            });
        setCategories(displayedContacts);
    };

    return (
        <>
            <div className='mb-3'>
                <input type="text" placeholder='Search...' onChange={searchHandler} className='bg-[#FCFCFC] border-b w-full p-4 focus:outline-none font-base' />
            </div>
            <div className='space-y-6'>
                {
                    categories?.map((categori, i) => {
                        return (
                            <label key={i} className='flex items-center cursor-pointer select-none'>
                                <Checkbox className='mr-3' />
                                <span>{categori.name}</span>
                            </label>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CategoriesFilter