import React from 'react'

const MiddleContent1 = ({subjectImage, title, userImage, list}) => {
  return (
      <div className=''>
        <div>
            <div className='rounded-full max-w-[20rem] h-[20rem] '>
                <img className='w-full h-full object-cover' src={subjectImage} alt="" />
            </div>
            
            <div className='font-bold'>
                {title}
            </div>
        </div>

        <div className='flex items-center text-xs w-[20rem] mt-3'>
            {/* Image */}
            <div className='w-5 h-5 rounded-full flex mr-2'>
                <img className='rounded-full object-cover' src={userImage} alt="" />
            </div>

            {/* List */}
            <div>
                <ul className='flex justitfy-between items-center text-[10px]'>
                    {list.map((item, index) => (
                        <li className='mr-4' key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MiddleContent1
