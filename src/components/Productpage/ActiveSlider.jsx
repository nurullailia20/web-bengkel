import { Swiper, SwiperSlide } from "swiper/react";

import mobil from "../../../public/assets/mobil.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const ActiveSlider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="h-full w-full">
      <SwiperSlide className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
        <Image src={mobil} alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
        <Image src={mobil} alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
        <Image src={mobil} alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
        <Image src={mobil} alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
        <Image src={mobil} alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
        <Image src={mobil} alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
        <Image src={mobil} alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
        <Image src={mobil} alt="" />
      </SwiperSlide>
      <SwiperSlide className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
        <Image src={mobil} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ActiveSlider;