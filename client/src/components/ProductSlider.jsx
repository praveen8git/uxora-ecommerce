// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import ProductCard from "./ProductCard"

const ProductSlider = () => {
  const breakpoints = {
    // when window width is >= 220px
    220: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1
    },
    // when window width is >= 720px
    720: {
      slidesPerView: 2
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3
    }
  }
  return (
    <section className="slider mt-3">
      <h2 className="font-color text-uppercase fs-1 m-5">
        Featured Products
      </h2>
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={16}
        slidesPerView={3}
        autoplay
        breakpoints={breakpoints}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ProductCard
            productName={'Girl t-shirt'}
            regularPrice={74}
            salePrice={32.5}
            img={''}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            productName={'Black t-shirt'}
            regularPrice={74}
            salePrice={32.5}
            img={'https://cdn.prod.website-files.com/63cffb7c16ab33a28e9734f2/63d4f24c2929613918600279_product-03-thumb.webp'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            productName={'Men t-shirt'}
            regularPrice={64}
            salePrice={37.5}
            img={'https://cdn.prod.website-files.com/63cffb7c16ab33a28e9734f2/63d4f225026df869f409bbcc_product-01-thumb.webp'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            productName={'Girl t-shirt'}
            regularPrice={74}
            salePrice={32.5}
            img={'https://source.unsplash.com/random/600x600/?girl,fashion'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            productName={'Girl t-shirt'}
            regularPrice={74}
            salePrice={32.5}
            img={'https://source.unsplash.com/random/600x600/?boy,fashion'}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default ProductSlider

