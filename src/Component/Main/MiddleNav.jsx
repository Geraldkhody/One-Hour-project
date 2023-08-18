import React from 'react'

const MiddleNav = () => {
  return (
    <div className="flex justify-between items-center h-[5rem] text-sm">
        <div className='text-2xl font-bold '>
            Top Stories
        </div>
        <div>
            <ul className='hidden md:flex justify-between items-center'>
                <li className='ml-8 rounded-full bg-red-600 text-white px-5 py-1'><i className="fa fa-clock mr-1"></i>Latest</li>
                <li className='ml-8'><i className="fa fa-caret-down mr-1"></i>Trending</li>
                <li className='ml-8'><i className="fa fa-caret-down mr-1"></i>Popular</li>
            </ul>
            <i className="fa fa-bars text-xl hover:opacity-70 transition-all cursor-pointer md:hidden"></i>
        </div>
    </div>
  )
}

export default MiddleNav
