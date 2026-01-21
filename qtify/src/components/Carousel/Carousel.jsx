import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({
  children,
  slidesPerView = 8,
  spaceBetween = 20,
  loop = false,
  autoplay = false,
  navigation = true,
  pagination = false,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      allowTouchMove={true}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay}
      breakpoints={{
        0: { slidesPerView: 2 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
