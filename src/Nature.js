import { Fragment } from "react";
import { Jumbotron } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

export default function About() {
  return (
    <Fragment>
      <Jumbotron>
        <h1 style={{ textAlign: "center" }}>Our Nature</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={"3"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }}
          pagination={true}
          className="mySwiper"
          style={{ height: "300px", width: "900px" }}
        >
          <SwiperSlide>
            <img src="https://picsum.photos/id/11/367/267" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/id/12/367/267" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/id/13/367/267" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/id/14/367/267" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/id/15/367/267" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/id/16/367/267" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/id/17/367/267" />
          </SwiperSlide>
        </Swiper>
      </Jumbotron>
    </Fragment>
  );
}
