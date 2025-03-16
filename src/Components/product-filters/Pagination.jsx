import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-center mt-10'>
      <div className='flex gap-1'>
        <button type='button' className='py-1.5 px-2.5 text-base font-normal rounded-sm border border-transparent bg-[#314863] underline-offset-2 text-white underline'>
          1
        </button>
        <button type='button' className='py-1.5 px-2.5 text-base text-black font-normal rounded-sm border border-transparent hover:border-[#EEEEEE]'>
          2
        </button>
        <button type='button' className='py-1.5 px-2.5 text-base text-black font-normal rounded-sm border border-transparent hover:border-[#EEEEEE]'>
          3
        </button>
        <span className='py-1.5 px-2.5 text-base text-black font-normal rounded-sm border border-transparent'>
          ...
        </span>
        <button type='button' className='py-1.5 px-2.5 text-base text-black font-normal rounded-sm border border-transparent hover:border-[#EEEEEE]'>
          29
        </button>
        <button type='button' className='py-1.5 px-2.5 text-base text-black font-normal rounded-sm border border-transparent hover:border-[#EEEEEE]'>
          30
        </button>
      </div>
    </div>
  )
}

export default Pagination