import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className='flex md:flex-row flex-col text-white w-[100vw] h-16 items-center justify-around  p-4'>
        <img src={logo} alt="logo" className='w-20 h-8' />
        <div className='flex font-[700] items-center md:justify-around  gap-3 md:w-[50vw] md:mt-0 mt-4' >
            <button>Home</button>
            <button>Shop</button>
            <button>Delivery </button>
            <button>Contact</button>
            <button className='border p-2 rounded-[5px]'>Order Your Ice-cream</button>
        </div>

      
    </div>
  )
}
