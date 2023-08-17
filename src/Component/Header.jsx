import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] m-auto flex flex-col justify-between h-full">
      <NavBar />

      <div className='flex flex-col h-[100%] items-center md:justify-end md:bottom-6'>
        <div>
            <div className='flex mb-2'>
              <div className='rounded-full mr-1 w-5 h-5 bg-pink-600'></div>
              <div className='rounded-full w-5 h-5 bg-blue-600'></div>
                
            </div>
            <div className='flex mb-3'>
                <div className="md:text-2xl lg:text-4xl text-white font-bold">Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Cumque.</div>
                <div className='w-10 h-10 rounded-md'>
                </div>
            </div>

            <div className='flex items-center text-xs'>
                <div className='w-6 h-6 rounded-full flex mr-2'>
                    <img className='rounded-full object-cover' src="/image/photo-1691264122434-3b5a1dac81d5.avif" alt="" />
                </div>
                <div>
                    <ul className='flex justitfy-between items-center'>
                        <li className='mr-4'>Delay</li>
                        <li className='mr-4'>Layout</li>
                        <li className='mr-4'>Successfully </li>
                        <li className='mr-4'>Local</li>
                    </ul>
                </div>
            </div>
        </div>


          <div className='hidden md:flex items-center mt-16 text-sm'>
            <div className='flex mr-5 mb-3 md:mb-0'>
              <img className='rounded-full mr-3 w-10 h-10' src="/image/photo-1690149347199-f1e5751e42f7.avif" alt="" />
              <span>
                Lorem ipsum <br />dolor amet.
              </span>
            </div>
            <div className='flex mr-5 mb-3 md:mb-0'>
              <img className='rounded-full mr-3 w-10 h-10' src="/image/photo-1690149347199-f1e5751e42f7.avif" alt="" />
              <span>
                Lorem ipsum <br />dolor amet.
              </span>
            </div>
            <div className='flex mr-5 mb-3 md:mb-0'>
              <img className='rounded-full mr-3 w-10 h-10' src="/image/photo-1690149347199-f1e5751e42f7.avif" alt="" />
              <span>
                Lorem ipsum <br />dolor amet.
              </span>
            </div>
            <div className='flex mr-5 mb-3 md:mb-0'>
              <img className='rounded-full mr-3 w-10 h-10' src="/image/photo-1690149347199-f1e5751e42f7.avif" alt="" />
              <span>
                Lorem ipsum <br />dolor amet.
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
