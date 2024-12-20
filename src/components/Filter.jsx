import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
      <div className='flex gap-6 flex-wrap'>
        <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
            <option>Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
        </select>

        <input type="text" name="min" placeholder='min-price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>

        <input type="text" name="max" placeholder='max-price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>

        <select name="Size" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
            <option>Size</option>
        </select>

        <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
            <option>Color</option>
            <option value="physical">Test</option>
        </select>

        <select name="ribbon" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
            <option>Category</option>
            <option value="physical">New Arrival</option>
            <option value="digital">Popular</option>
        </select>
      </div>
      <div className=''>
      <select name="" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
            <option>Sort By</option>
            <option value="physical">Price (low to high)</option>
            <option value="digital">Price (high to low)</option>
            <option value="digital">Newest</option>
            <option value="digital">Oldest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
