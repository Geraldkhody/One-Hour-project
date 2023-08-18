import React from 'react'
import BottomMain from './BottomMain'

const Bottom = () => {
  return (
    <div className='w-[90%] md:w-[80%] lg:w-[70%] flex m-auto mt-10'>
        {/* 2.3.1 */}
        <div className='w-full md:w-[70%] mr-4'>
            {/* 2.3.1.1 */}
            <div className='text-3xl font-bold mb-5'>Around Of The World</div>

            {/* 2.3.1.2 */}
            <div>
                {/* 2.3.1.2.1 */}
                <BottomMain />
                <BottomMain />
                <BottomMain />
                <BottomMain />
                <BottomMain />
                <BottomMain />

            </div>

            {/* 2.3.1.3 */}
            <div className='flex justify-center w-full mb-5'>
                <button className='bg-[#f1f1f2] px-6 py-2 rounded-full text-sm text-center'>View More</button>
            </div>
        </div>

        {/* 2.3.2 */}
        <div className='hidden md:max-w-[28%] md:block'>
            <div className='grid grid-cols-4 grid-row-2'>
                <div className=''>
                    <i className="fab fa-square-facebook"></i>
                    <div className='text-xs font-bold'>M+ JM</div>
                    <div className='text-[10px]'>Facebook</div>
                </div>
                <div className=''>
                    <i className="fa fa-facebook"></i>
                    <div className='text-xs font-bold'>M+ JM</div>
                    <div className='text-[10px]'>Facebook</div>
                </div>
                <div className=''>
                    <i className="fa fa-facebook"></i>
                    <div className='text-xs font-bold'>M+ JM</div>
                    <div className='text-[10px]'>Facebook</div>
                </div>
                <div className=''>
                    <i className="fa fa-facebook"></i>
                    <div className='text-xs font-bold'>M+ JM</div>
                    <div className='text-[10px]'>Facebook</div>
                </div>
                <div className=''>
                    <i className="fa fa-facebook"></i>
                    <div className='text-xs font-bold'>M+ JM</div>
                    <div className='text-[10px]'>Facebook</div>
                </div>
                <div className=''>
                    <i className="fa fa-facebook"></i>
                    <div className='text-xs font-bold'>M+ JM</div>
                    <div className='text-[10px]'>Facebook</div>
                </div>
                <div className=''>
                    <i className="fa fa-facebook"></i>
                    <div className='text-xs font-bold'>M+ JM</div>
                    <div className='text-[10px]'>Facebook</div>
                </div>
                <div className=''>
                    <i className="fa fa-facebook"></i>
                    <div className='text-xs font-bold'>M+ JM</div>
                    <div className='text-[10px]'>Facebook</div>
                </div>
            </div>

            <div className=''>
                <div className='mb-3 relative'>
                    <img className='rounded-[10px] h-[5rem] w-full' src="./image/8.jpg" alt="" />
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.7)] rounded-[10px] flex justify-between items-center px-3 text-white'>
                        <div>Life Style</div>
                        <div className='bg-[rgb(241,241,242,0.4)] rounded-full text-sm w-7 h-7 flex justify-center items-center'>20</div>
                    </div>
                </div>
                <div className='mb-3 relative'>
                    <img className='rounded-[10px] h-[5rem] w-full' src="./image/8.jpg" alt="" />
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.7)] rounded-[10px] flex justify-between items-center px-3 text-white'>
                        <div>Life Style</div>
                        <div className='bg-[rgb(241,241,242,0.4)] rounded-full text-sm w-7 h-7 flex justify-center items-center'>20</div>
                    </div>
                </div>
                <div className='mb-3 relative'>
                    <img className='rounded-[10px] h-[5rem] w-full' src="./image/8.jpg" alt="" />
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.7)] rounded-[10px] flex justify-between items-center px-3 text-white'>
                        <div>Life Style</div>
                        <div className='bg-[rgb(241,241,242,0.4)] rounded-full text-sm w-7 h-7 flex justify-center items-center'>20</div>
                    </div>
                </div>
                <div className='mb-3 relative'>
                    <img className='rounded-[10px] h-[5rem] w-full' src="./image/8.jpg" alt="" />
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.7)] rounded-[10px] flex justify-between items-center px-3 text-white'>
                        <div>Life Style</div>
                        <div className='bg-[rgb(241,241,242,0.4)] rounded-full text-sm w-7 h-7 flex justify-center items-center'>20</div>
                    </div>
                </div>
            </div>

            <div>
                <div className='font-bold mb-4 mt-4 text-lg'>Popular Post</div>
                <div className='mb-3'>
                    <div className='flex'>
                        <div className='w-[15rem] h-[7rem]'>
                            <img className='w-[15rem] h-[7rem]' src="./image/3.jpg" alt="" />
                        </div>
                        <div className='flex flex-col justify-between  ml-3'>
                            <div className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            <div className='mb-2 text-sm'>June 24, 2023</div>
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='flex'>
                        <div className='w-[15rem] h-[7rem]'>
                            <img className='w-[15rem] h-[7rem]' src="./image/3.jpg" alt="" />
                        </div>
                        <div className='flex flex-col justify-between  ml-3'>
                            <div className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            <div className='mb-2 text-sm'>June 24, 2023</div>
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='flex'>
                        <div className='w-[15rem] h-[7rem]'>
                            <img className='w-[15rem] h-[7rem]' src="./image/3.jpg" alt="" />
                        </div>
                        <div className='flex flex-col justify-between  ml-3'>
                            <div className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            <div className='mb-2 text-sm'>June 24, 2023</div>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>

            <div className='relative'>
                <img className='rounded-5 h-[20rem] w-full' src="./image/people2.avif" alt="" />
                <div className='absolute object-cover top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.7)] rounded-[10px] flex flex-col justify-between p-4 text-white'>
                    <div className='flex'>
                        <div className='w-7 h-7 bg-[rgb(241,241,242,.4)] rounded-full mr-1'><i className="fa fa-arrow"></i></div>
                        <div className='w-7 h-7 bg-[rgb(241,241,242,.4)] rounded-full'><i className="fa fa-arrow"></i></div>
                    </div>
                    <div>
                        <div className='w-7 h-7 rounded-full bg-blue-600'></div>
                        <div className='font-bold text-lg mt-3'>Lorem ipsum dolor sit amet.</div>
                        <div className='mt-1     text-sm'>October 24, 2022</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bottom
