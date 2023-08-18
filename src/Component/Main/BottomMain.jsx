import React from 'react'

const BottomMain = () => {
  return (
    <div>
      <div className='flex mb-4'>
                    <div className='w-[30rem] h-[12rem]'>
                        <img className='w-[20rem] h-[12rem] object-cover' src="/image/7.jpg" alt="" />
                    </div>

                    <div className='flex flex-col justify-between ml-5'>
                        <div>
                            {/* Title */}
                            <div className='mb-3 font-bold'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eos provident nostrum.
                            </div>

                            {/* Image with List */}
                            <div className='flex items-center'>
                                    {/* Image */}
                                <div className='w-5 h-5 rounded-full flex mr-2'>
                                    <img className='rounded-full' src="/image/photo-1691264122434-3b5a1dac81d5.avif" alt="" />
                                </div>

                                {/* List */}
                                <div>
                                    <ul className='flex justitfy-between items-center text-[10px]'>
                                        <li className='mr-4 font-bold'>Delay</li>
                                        <li className='mr-4'>Layout</li>
                                        <li className='mr-4'>Successfully </li>
                                        <li className='mr-4'>Local</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='text-sm mb-3'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, neque animi. Quaerat doloribus corporis illum ea! Sequi nulla molestiae tempora commodi tenetur.
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default BottomMain;
