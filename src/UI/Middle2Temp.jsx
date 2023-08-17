import React from 'react'

const Middle2Temp = ({image, title, list}) => {
  return (
    <div>
      <div className='flex font-bold text-sm'>
                    <div className='relative'>
                        <img className='w-[7rem] h-[8rem] object-cover' src={image} alt="" />
                        <div className='absolute top-0 bottom-0 left-0 right-0 bg-[rgb(0,0,0,.2)] '></div>
                    </div>
                    <div className='ml-3'>
                        <div>
                            {title}
                        </div>
                        <div className='mt-5 text-xs'>
                            <ul className='flex'>
                                {list.map(item => (
                                    <li className='mr-3'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Middle2Temp
