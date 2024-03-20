'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y  } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Link from 'next/link'; 
import Image from 'next/image';
import Commonbtn from '../commonbtn/Commonbtn';

const Page = () => {
  return (
    <div className=' bg-[yellow] h-screen flex items-center justify-center flex-col gap-5'>
      <div className=' container '>
      <Swiper

        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={35}
        slidesPerView={3.5}
        loop={true}
        
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')
      }
      >
        <SwiperSlide className=' bg-[white]  rounded-[20px] h-full max-h-[500px] w-full max-w-[500px] card overflow-hidden'>
        <Image src='/image/camaro.webp' width={400 } height={400} className=' rounded-md w-full h-full img  duration-300 '/>
        </SwiperSlide>
        <SwiperSlide className=' bg-[white]  rounded-[20px] h-full max-h-[500px] w-full max-w-[500px] card overflow-hidden'>
        <Image src='/image/mustang.jpg' width={400 } height={400} className=' rounded-md w-full h-full img  duration-300 '/>
              </SwiperSlide>
              <SwiperSlide className=' bg-[white]  rounded-[20px] h-full max-h-[500px] w-full max-w-[500px] card overflow-hidden'>
        <Image src='/image/challenger.jpg' width={400 } height={400} className=' rounded-md w-full h-full img  duration-300 '/>
              </SwiperSlide>
              <SwiperSlide className=' bg-[white]  rounded-[20px] h-full max-h-[500px] w-full max-w-[500px] card overflow-hidden'>
        <Image src='/image/mustang.jpg' width={400 } height={400} className=' rounded-md w-full h-full img  duration-300 '/>
              </SwiperSlide>
      </Swiper>


      <Link href="/" className="absolute top-4 start-4 fs-[35px] font-semibold text-black">HOME
      </Link>
    
      </div>
      <Commonbtn text='SWIPER'/>
    </div>
  );
};

export default Page;
