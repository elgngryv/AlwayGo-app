import React from 'react'
import SideFilters from '@/components/product-filters/side-filters';
import Pagination from '@/components/product-filters/Pagination';
import TopFilters from '@/components/product-filters/top-filters';
import FilteredProducts from '@/components/product-filters/FilteredProducts';

const ProductFilters = () => {
  return (
    <div className='max-w-[1448px] mx-auto px-10 mt-10'>
      <div className='flex justify-center'>
        <SideFilters />
        <div className='max-w-[1014px]'>
          <div className='h-px w-full bg-[#1D1D1D] mb-8'></div>
          <TopFilters />
          <FilteredProducts />
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default ProductFilters