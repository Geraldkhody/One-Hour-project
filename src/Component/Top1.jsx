import React from 'react';
import style from "./Top.module.css";

const Top1 = () => {
  return (
    <div className={style.wrapper}>
    <div className={style.container}>
        <div className={style.box1}>
            {/* ----- Background image ------- */}
            <div className="w-full h-[15rem] ">
                <img className={style.top_image} src="/image/people1.avif" alt="" />
            </div>

            {/* ---------- Text on the background ---------- */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.7)] flex items-end text-white mt-auto p-3'>
                <div>
                    <div className='flex mb-1'>
                        <div className='rounded-full mr-1 w-5 h-5 bg-pink-600'></div>
                    </div>

                    <div className='flex mb-2'>
                        <div className="text-lg  font-bold">Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Cumque.</div>
                    </div>

                    {/* -------- image with its List of Items  -------- */}
                    <div className='flex items-center text-xs'>
                        {/* Image */}
                        <div className='w-5 h-5 rounded-full flex mr-2'>
                            <img className='rounded-full' src="/image/photo-1691264122434-3b5a1dac81d5.avif" alt="" />
                        </div>
                        {/* List */}
                        <div>
                            <ul className='flex justitfy-between items-center text-[10px]'>
                                <li className='mr-4'>Delay</li>
                                <li className='mr-4'>Layout</li>
                                <li className='mr-4'>Successfully </li>
                                <li className='mr-4'>Local</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className={style.box2}>
            <div className="w-full  h-[15rem] ">
                <img className={style.top_image} src="/image/people2.avif" alt="" />
                {/* <img className='w-full h-full object-cover' src="/image/people2.avif" alt="" /> */}
            </div>

            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,.7)] flex items-end text-white mt-auto px-3 py-2'>
                <div>
                    <div className='flex mb-1'>
                        <div className="text-sm  font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque.</div>
                    </div>

                    <div className='flex items-center text-xs'>
                        <div>
                            <ul className='flex justitfy-between items-center text-[10px]'>
                                <li className='mr-4'>Delay</li>
                                <li className='mr-4'>Layout</li>
                                <li className='mr-4'>Successfully </li>
                                <li className='mr-4'>Local</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={style.box3}>
            <div className="w-full h-[15rem] ">
                <img className={style.top_image} src="/image/people3.avif" alt="" />
                {/* <img className='w-full h-full object-cover' src="/image/people3.avif" alt="" /> */}
            </div>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,0.7)]'>
                
            </div>
        </div>
        
        <div className={style.box4}>
            <div className="w-full h-[15rem] ">
                <img className={style.top_image} src="/image/people4.avif" alt="" />
                {/* <img className='w-full h-full object-cover' src="/image/people4.avif" alt="" /> */}
            </div>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,0.7)]'>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Top1;
