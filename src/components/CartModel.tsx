"use client"
import Image from 'next/image'
import React from 'react'

const CartModel = () => {
    const cartItems=true
  return (
    <div className='w-max absolute p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems?(<div>Card is empty</div>)
      :(<>
      <h2 className='text-xl'>Shopping Cart</h2>
      <div className='flex flex-col gap-8'>
            <div className='flex gap-4'>
            <Image src="https://images.pexels.com/photos/17994286/pexels-photo-17994286/free-photo-of-hummingbird-moth.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='' width={72} height={96} className='object-cover rounded-md'/>
            <div className='flex flex-col justify-between w-full'>
                {/* TOP */}
                <div className=''>
                    <div className='flex items-center justify-between gap-8'>
                        <h3 className='font-semibold'>Product Name</h3>
                        <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                    </div>
                    <div className='text-sm text-gray-500'>
                        available
                    </div>
                </div>
                {/* BOTTOM */}
                <div className='flex justify-between text-sm'>
                    <span className='text-gray-500'>Qty. 2</span>
                    <span className='text-blue-500'>Remove</span>
                </div>
            </div>
            </div>
        </div>
        <div className=''>
            <div className='flex justify-between items-center font-semibold'>
                <span className=''>SubTotal</span>
                <span className=''>$49</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>Shipping and texes calculated at checkout</p>
            <div className='flex justify-between text-sm'>
                <button className='rounded-md py-3 px-4 ring-gray-300'>View Cart</button>
                <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>

            </div>
        </div>
      </>
      )}
    </div>
  )
}

export default CartModel
