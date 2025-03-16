import React from 'react'
import SideFilter from './SideFilter'
import PriceFilter from './PriceFilter'
import CategoriesFilter from './CategoriesFilter'

const SideFilters = () => {
  const filters = {
    categories: [
      {
        name: 'Hair dryers',
        filter: ''
      },
      {
        name: 'Hair straighteners',
        filter: ''
      },
      {
        name: 'Electric curlers',
        filter: ''
      },
      {
        name: 'Multistylers',
        filter: ''
      },
      {
        name: 'Electric shavers',
        filter: ''
      },
      {
        name: 'Hair clippers',
        filter: ''
      },
      {
        name: 'Trimmers',
        filter: ''
      },
      {
        name: 'Floor scales',
        filter: ''
      },
      {
        name: 'For health',
        filter: ''
      },
      {
        name: 'Electric toothbrushes',
        filter: ''
      }
    ],
    brands: [
      {
        name: 'Philips',
        filter: ''
      },
      {
        name: 'Xiaomi',
        filter: ''
      },
      {
        name: 'DYSON',
        filter: ''
      },
      {
        name: 'Bosch',
        filter: ''
      },
      {
        name: 'Braun',
        filter: ''
      },
      {
        name: 'Remington',
        filter: ''
      },
      {
        name: 'Powertec',
        filter: ''
      },
      {
        name: 'Sinbo',
        filter: ''
      },
      {
        name: 'Rowenta',
        filter: ''
      },
      {
        name: 'Kiwi',
        filter: ''
      },
    ]
  }
  return (
    <div className='max-w-80 w-full mr-6'>
      <div className='h-px w-full bg-[#1D1D1D]'></div>
      <div className='divide-y divide-[#1D1D1D] space-y-6 '>
        <SideFilter title='Categories' count={68}>
          <CategoriesFilter data={filters.categories} />
        </SideFilter>
        <SideFilter title='Brand' count={55}>
          <CategoriesFilter data={filters.brands} />
        </SideFilter>
        <SideFilter title='Price'>
          <PriceFilter />
        </SideFilter>
        <SideFilter title='Socket Type' count={34}>
        </SideFilter>
        <SideFilter title='Warranty Type' count={20}>
        </SideFilter>
        <SideFilter title='Origin' count={31}>
        </SideFilter>
      </div>
    </div>
  )
}

export default SideFilters