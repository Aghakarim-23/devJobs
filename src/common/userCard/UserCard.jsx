import React from 'react'

const UserCard = ({userData}) => {
    const {img, time, position, type, country} = userData

  return (
    <div className='rounded-lg bg-white p-5 relative h-[12rem]'>
        <div className=''>
            <img className='absolute -top-6' src={img} alt="" />
        </div>
        <div className='flex flex-col gap-2 mt-5'>
            <p className='text-[#6E8098]'>{time}</p>
            <h1 className='font-bold text-[20px]'>{position}</h1>
            <p className='text-[#6E8098]'>{type}</p>
            <p className='text-[#5964E0] font-medium'>{country}</p>
        </div>
    </div>
  )
}

export default UserCard