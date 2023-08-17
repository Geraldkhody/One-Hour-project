import React from 'react'
import Header from '../Component/Header'
import Content from '../Component/Content'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div>
        <div className='relative w-full h-[480px]'>
            <div className="w-full h-full">
                <img className='object-cover w-full h-full' src="http://localhost:3000/image/premium_photo-1661963942331-50c037df1c7f.avif" alt="" />
            </div>
            <div className="absolute top-0 right-0 left-0 bottom-0  bg-[rgb(0,0,0,.7)] py-8 text-white">
                <Header />
                {/* <h1 className="text-6xl font-bold">Welcome</h1> */}
            </div>
        </div>
        
        <div className='m-auto pt-5'>
          <Content />

        </div>
      <Footer />
    </div>
  )
}

export default Home
