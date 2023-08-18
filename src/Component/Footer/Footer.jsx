import React from 'react'

const Footer = () => {
  const socialMediaIcon = ['facebook']

  return (
    <div className='bg-black text-white mt-5'>
      <div className='w-[70%] m-auto grid grid-cols-3 gap-5 text-sm py-10'>
        {/* First container */}
        <div>
          <div className='text-xl md:text-2xl font-bold'>
            LOGO
          </div>

          <div className='text-xs my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto optio similique laborum vel dolore! Nisi provident vero error esse sequi amet.</div>
          
          <div className='text-xl'>
            <i className="fab fa-facebook mr-3"></i>
            <i className="fab fa-google-plus mr-3"></i>
            <i className="fab fa-twitter mr-3"></i>
            <i className="fab fa-youtube mr-3"></i>
            <i className="fab fa-instagram mr-3"></i>
          </div>
        </div>

        {/* Second Container */}
        <div className='flex flex-col justify-between'>

          <div className='flex justify-between'>
            <div className="flex flex-col">
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div className='flex  mt-2'>
                <div className='mr-5 text-[10px]'>August 4, 2000</div>
                <div className='text-[10px]'>perferendis</div>
              </div>

            </div>
            {/* Image */}
            <div className='mb-2 min-w-[4.5rem] h-[4.5rem]'>
              <img className='w-full h-full object-cover' src="/image/2.jpg" alt="" />
            </div>

          </div>
          
          <div className='flex justify-between'>
            <div className="flex flex-col">
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
              <div className='flex  mt-2'>
                <div className='mr-5 text-[10px]'>August 4, 2000</div>
                <div className='text-[10px]'>perferendis</div>
              </div>

            </div>
            {/* Image */}
            <div className='mb-2 min-w-[4.5rem] h-[4.5rem]'>
              <img className='w-full h-full object-cover' src="/image/2.jpg" alt="" />
            </div>

          </div>


          

        </div>

        {/* Third Container */}
        <div>
          <div className='flex justify-between mb-2'>
            <li className='list-none'>Sport</li>
            <div className='w-5 h-5 rounded-full bg-red-500'></div>
          </div>
          <div className='flex justify-between mb-2'>
            <li className='list-none'>Sport</li>
            <div className='w-5 h-5 rounded-full bg-red-500'></div>
          </div>
          <div className='flex justify-between mb-2'>
            <li className='list-none'>Sport</li>
            <div className='w-5 h-5 rounded-full bg-red-500'></div>
          </div>
          <div className='flex justify-between mb-2'>
            <li className='list-none'>Sport</li>
            <div className='w-5 h-5 rounded-full bg-red-500'></div>
          </div>
          <div className='flex justify-between mb-2'>
            <li className='list-none'>Sport</li>
            <div className='w-5 h-5 rounded-full bg-red-500'></div>
          </div>
          <div className='flex justify-between mb-2'>
            <li className='list-none'>Sport</li>
            <div className='w-5 h-5 rounded-full bg-red-500'></div>
          </div>
        </div>
      </div>



      <hr className='h-5 ' />


      <div className='w-[70%] m-auto'>
        
      </div>
    </div>
  )
}

export default Footer
