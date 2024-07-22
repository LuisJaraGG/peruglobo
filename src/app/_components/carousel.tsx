// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay  } from 'swiper/modules';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


const Carousel = ({images}:any) => {
  return (
    <div className="w-full">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {images.map((image:any, index:any) => (
          <SwiperSlide key={index} className='mb-9'>
            <Link href={image.url} className='flex flex-col items-center justify-center'>
                <img src={image.image} alt={`Slide ${index}`} className="w-[300px] h-auto" />
                {image.title? <p className="text-white text-3xl font-bold">{image.title}</p> : null}
            </Link>

          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};

export default Carousel;
