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

type Props = {
  images: any;
  linkeable: boolean;
  arrowsColor?: string;
  paginationColor?: string;
  imageStyle?: string
  imagesPerPage?: number
  spaceBetween?: number
};

const Carousel = ({images,arrowsColor = '#fff',paginationColor = '#fff',linkeable=false,imageStyle='w-[300px] h-auto',imagesPerPage=2,spaceBetween=50}:Props) => {
  return (
    <div className="w-full">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      style={{
        // @ts-ignore
        '--swiper-navigation-color': arrowsColor,
        '--swiper-pagination-color': paginationColor,
        '--swiper-navigation-size': '30px',
      }}
      breakpoints={{
        768: {
          slidesPerView: imagesPerPage,
        }
      }}
      spaceBetween={spaceBetween}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true,dynamicBullets:true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {images.map((image:any, index:any) => (
          <SwiperSlide key={index} className='mb-9'>
            {linkeable ? (
                <Link href={image.url} className='flex flex-col items-center justify-center'>
                    <img src={image.image} alt={`Slide ${index}`} className={imageStyle} />
                    {image.title? <p className="text-white text-3xl font-bold">{image.title}</p> : null}
                </Link>
            ) : (
              <div  className='flex flex-col items-center justify-center w-full h-[400px]'>
              <img src={image.image} alt={`Slide ${index}`} className={imageStyle} />
              {image.title? <p className="text-white text-3xl font-bold">{image.title}</p> : null}
              </div>
            )}

          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};

export default Carousel;
