import React from 'react'

const Footer = () => {
  const socialMediaIcon = ['facebook', 'google-plus', 'twitter', 'youtube', 'instagram']

  const middle = [
    {
      message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      date: "August 4, 2000",
      text: "perferendis"
    },
    {
      message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      date: "August 4, 2000",
      text: "perferendis"
    }
  ]

  const thirdpart = [
    {
      name: "Sports",
      color: "red-500"
    },
    {
      name: "Health",
      color: "blue-500"
    },
    {
      name: "Fashion",
      color: "pink-700"
    },
    {
      name: "Products",
      color: "violet-600"
    },
    {
      name: "Lifestyle",
      color: "yellow-700"
    },
    {
      name: "food",
      color: "green-400"
    },
  ]

  return (
    <div className='bg-black text-white mt-5'>
      <div className='w-[70%] m-auto grid grid-cols-1 grid-wrap md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5 text-sm py-10'>
        {/* First container */}
        <div>
          <div className='text-xl md:text-2xl font-bold'>
            LOGO
          </div>

          <div className='text-xs my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto optio similique laborum vel dolore! Nisi provident vero error esse sequi amet.</div>
          
          <div className='text-xl'>
            {socialMediaIcon.map(item => (
              <i className={`fab fa-${item} mr-3`}></i>
            ))}
          </div>
        </div>

        {/* Second Container */}
        <div className='flex flex-col justify-between'>
          {middle.map(item => (
            <div className='flex justify-between'>
              <div className="flex flex-col mr-5">
                <div>{item.message}</div>
                <div className='flex  mt-2'>
                  <div className='mr-5 text-[10px]'>{item.date}</div>
                  <div className='text-[10px]'>{item.text}</div>
                </div>

              </div>
              {/* Image */}
              <div className='mb-2 min-w-[4.5rem] h-[4.5rem]'>
                <img className='w-full h-full object-cover' src="/image/2.jpg" alt="" />
              </div>

            </div>

          ))}
        </div>

        {/* Third Container */}
        <div>
          {thirdpart.map(item => (
            <div className='flex justify-between mb-2'>
              <li className='list-none'>{item.name}</li>
              <div className={`w-5 h-5 rounded-full bg-${item.color}`}></div>
            </div>

          ))}
         
        </div>
      </div>



      <hr className='h-5 ' />


      <div className='w-[70%] m-auto'>
        
      </div>
    </div>
  )
}

export default Footer;
