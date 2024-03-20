import Commonbtn from '@/app/commonbtn/Commonbtn'
import Image from 'next/image'
import React from 'react'


const Mapsection = () => {
    const data = [
        {
            img: "/image/mustang.jpg"
        },
        {
            img: "/image/camaro.webp"
        },
        {
            img: "/image/challenger.jpg"
        },
    ]
  return (
    <div className=' flex flex-col gap-4 justify-center h-screen items-center'>
    <div className=' flex items-center justify-center  gap-3 '>

            {data.map((mydata, index) => (
                <div key={index} className=' bg-[white]  rounded-[20px] h-full max-h-[500px] w-full max-w-[500px] card overflow-hidden'>
        <Image src={mydata.img} width={400 } height={400} className=' rounded-md w-full h-full img  duration-300 '/>
                </div>
            ))
            }
        </div>
        <Commonbtn text='CARS'/>
        </div>

  )
}

export default Mapsection