import React from 'react';
import style from './Middle.module.css';
import Middle2Temp from '../UI/Middle2Temp';

const Middle = () => {
    const Middle2Data = [
        {
            image: "/image/2.jpg",
            title: "Lorem ipsum dolor sit amet cotetur adiping elit",
            list: ["Lorem", "ipsum", "dolor"]
        },
        {
            image: "/image/3.jpg",
            title: "Lorem ipsum dolor sit amet cotetur adiping elit",
            list: ["Lorem", "ipsum", "dolor"]
        },
        {
            image: "/image/4.jpg",
            title: "Lorem ipsum dolor sit amet cotetur adiping elit",
            list: ["Lorem", "ipsum", "dolor"]
        },
        {
            image: "/image/5.jpg",
            title: "Lorem ipsum dolor sit amet cotetur adiping elit",
            list: ["Lorem", "ipsum", "dolor"]
        },
        {
            image: "/image/6.jpg",
            title: "Lorem ipsum dolor sit amet cotetur adiping elit",
            list: ["Lorem", "ipsum", "dolor"]
        },
        {
            image: "/image/4.jpg",
            title: "Lorem ipsum dolor sit amet cotetur adiping elit",
            list: ["Lorem", "ipsum", "dolor"]
        },
        {
            image: "/image/3.jpg",
            title: "Lorem ipsum dolor sit amet cotetur adiping elit",
            list: ["Lorem", "ipsum", "dolor"]
        },
        {
            image: "/image/6.jpg",
            title: "Lorem ipsum dolor sit amet cotetur adiping elit",
            list: ["Lorem", "ipsum", "dolor"]
        },
        {
            image: "/image/2.jpg",
            title: "Lorem ipsum dolor sit amet cotetur adiping elit",
            list: ["Lorem", "ipsum", "dolor"]
        }
    ];

    const MiddleContentData = [
        {
            subjectImage: "/image/1.jpg",
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi!",
            userImage: "/image/photo-1691264122434-3b5a1dac81d5.avif",
            list: ['Delay', "Layout", "Successfully", "Local"]
        }
    ]

  return (
    <div className='bg-[#f1f1f2] '>
    <div className='w-[70%] m-auto pt-5 pb-10'>
        {/* Header */}
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


        <div>
            <div className='grid gap-3 grid-cols-3 w-full'>


                
                <div className='mr-5 w-full'>
                    <div>
                        <div className='rounded-full w-full h-[20rem] '>
                            <img className='w-full h-full object-cover' src="/image/1.jpg" alt="" />
                        </div>
                        <div className='font-bold'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi!
                        </div>
                    </div>

                    <div className='flex items-center text-xs w-full mt-3'>
                        {/* Image */}
                        <div className='w-5 h-5 rounded-full flex mr-2'>
                            <img className='rounded-full object-cover' src="/image/photo-1691264122434-3b5a1dac81d5.avif" alt="" />
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
                <div className='mr-5 w-full'>
                    <div>
                        <div className='rounded-full w-full h-[20rem] '>
                            <img className='w-full h-full object-cover' src="/image/1.jpg" alt="" />
                        </div>
                        <div className='font-bold'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi!
                        </div>
                    </div>

                    <div className='flex items-center text-xs w-full mt-3'>
                        {/* Image */}
                        <div className='w-5 h-5 rounded-full flex mr-2'>
                            <img className='rounded-full object-cover' src="/image/photo-1691264122434-3b5a1dac81d5.avif" alt="" />
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
                <div className='mr-5 w-full'>
                    <div>
                        <div className='rounded-full w-full h-[20rem] '>
                            <img className='w-full h-full object-cover' src="/image/1.jpg" alt="" />
                        </div>
                        <div className='font-bold'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi!
                        </div>
                    </div>

                    <div className='flex items-center text-xs w-full mt-3'>
                        {/* Image */}
                        <div className='w-5 h-5 rounded-full flex mr-2'>
                            <img className='rounded-full object-cover' src="/image/photo-1691264122434-3b5a1dac81d5.avif" alt="" />
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


            <div className={`grid grid-cols-3 rounded-md grid-rows-3 mt-10 ${style.third}`}>
                {Middle2Data.map(item => (
                    <Middle2Temp image={item.image} title={item.title} list={item.list} />
                ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Middle
