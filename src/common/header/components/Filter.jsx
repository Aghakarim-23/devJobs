import React from 'react'
import filterBtn from '../../../assets/filterBtn.svg'
import searchBtn from '../../../assets/searchBtn.svg'

const Filter = () => {
  return (
    <div className='flex mx-auto  items-center w-[327px] h-[80px] bg-white rounded-md absolute top-[96px] left-[24px]'>
        <div className='w-[80%] h-full'>
            <input type="text"
                placeholder='Filter by title...'
                className='outline-none pl-[24px] w-full h-full'/>
        </div>

        <div className='flex h-full items-center'>
            <div className='flex justify-center items-center mr-[24px]'>
                <img src={filterBtn} alt="" className='hover:cursor-pointer' />
            </div>
            <div className='bg-[#5964E0] w-[48px] h-[48px] mr-[1rem] flex justify-center items-center rounded-md '>
                <img src={searchBtn} alt="" className='hover:cursor-pointer' />
            </div>
        </div>
  </div>
  )
}

export default Filter