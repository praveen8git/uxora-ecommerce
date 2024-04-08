// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import ProductCard from "./ProductCard"
import axios from 'axios';
import { useEffect, useState } from 'react';

const { VITE_SERVER } = import.meta.env;

const ProductSlider = () => {

  const [products, setProducts] = useState([]);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/featured-products`, {
        withCredentials: true,
      });
      console.log("featured-products", response.data);
      setProducts(response.data.products)

    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null
    }
  }

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

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
        {
          products?.map(product => (
            <SwiperSlide key={product._id}>
              <ProductCard
                id={product._id}
                productName={product.productName}
                regularPrice={product.regularPrice}
                salePrice={product.salePrice}
                image={product.image}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default ProductSlider

