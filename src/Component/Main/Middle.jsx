import React from 'react';
import Middle2Temp from '../../UI/Middle2Temp';
import MiddleNav from './MiddleNav';
import MiddleContent1 from '../../UI/MiddleContent1';

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
        },
        {
            subjectImage: "/image/1.jpg",
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi!",
            userImage: "/image/photo-1691264122434-3b5a1dac81d5.avif",
            list: ['Delay', "Layout", "Successfully", "Local"]
        },
        {
            subjectImage: "/image/1.jpg",
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi!",
            userImage: "/image/photo-1691264122434-3b5a1dac81d5.avif",
            list: ['Delay', "Layout", "Successfully", "Local"]
        },
    ]

  return (
    <div className='bg-[#f1f1f2] '>
    <div className='w-[90%] md:w-[80%] lg:w-[70%] m-auto pt-5 pb-10'>
        {/* Header */}
        <MiddleNav />


        <>  
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
                {MiddleContentData.map((item, index) => (
                    <MiddleContent1 key={index} subjectImage={item.subjectImage} title={item.title} userImage={item.userImage} list={item.list} />
                ))}
            </div> 

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md gap-5 md:gap-[70px] mt-10 `}>
                {Middle2Data.map((item, index) => (
                    <Middle2Temp key={index} image={item.image} title={item.title} list={item.list} />
                ))}
            </div>
        </>

    </div>
    </div>
  )
}

export default Middle
