import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-[5rem] text-sm">
      <div className='text-xl md:text-2xl font-bold'>
        LOGO
      </div>
      <div className='flex justify-between items-center'>
        <ul className='hidden md:flex justify-between items-center '>
            <li className='md:ml-6 hover:opacity-70 transition-all cursor-pointer lg:ml-8'>Home<i className="fa fa-caret-down ml-1"></i></li>
            <li className='md:ml-6 hover:opacity-70 transition-all cursor-pointer lg:ml-8'>Contact<i className="fa fa-caret-down ml-1"></i></li>
            <li className='md:ml-6 hover:opacity-70 transition-all cursor-pointer lg:ml-8'>Categories<i className="fa fa-caret-down ml-1"></i></li>
            <li className='md:ml-6 hover:opacity-70 transition-all cursor-pointer lg:ml-8'>Pressure<i className="fa fa-caret-down ml-1"></i></li>
            <li className='md:ml-6 hover:opacity-70 transition-all cursor-pointer lg:ml-8'>Page<i className="fa fa-caret-down ml-1"></i></li>
            <li className='md:ml-6 hover:opacity-70 transition-all cursor-pointer lg:ml-8'><i className="fa fa-search mr-2"></i>Search</li>
        </ul>
        <i className="fa fa-bars text-xl hover:opacity-70 transition-all cursor-pointer md:hidden"></i>
      </div>
    </div>
  )
}

export default NavBar
