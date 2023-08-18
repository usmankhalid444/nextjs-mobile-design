"use client";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Tag = ({ text }) => (
  <button className="text-[#8C93AB] border border-[#d0d0dd] rounded-2xl px-5 py-2 mr-3">
    {text}
  </button>
);

const SlideSection = () => (
  <Swiper
    modules={[Navigation, Pagination, A11y]}
    slidesPerView={1}
    spaceBetween={10}
    pagination={{ clickable: true }}
  >
    {[1, 2, 3].map((item, index) => (
      <SwiperSlide key={index}>
        <img
          className="w-[23rem] rounded-2xl h-48 mx-auto object-cover"
          src="/s-img1.png"
          alt="slide-img"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

const GlamRoomSection = () => (
  <div>
    <p className="text-2xl mt-8 font-bold mb-5">The Glam Room</p>
    {["Makeup", "Hair", "Nails"].map((tag, index) => (
      <Tag key={index} text={tag} />
    ))}
    <p className="mt-5 text-[#888FA8]">Washington St, Bradford BD8 9QW</p>
  </div>
);

const Suggestions = () => (
  <div>
    <p className="text-xl px-5 mt-4 mb-4">Suggestions for you</p>
    {[1, 2].map((_, index) => (
      <div
        key={index}
        className="p-5 relative"
        style={{ background: "linear-gradient(to right, #E2E1F0, #FFFFFF)" }}
      >
        <div className="relative">
          <SlideSection />
          <span className="absolute bottom-0 left-3 -mb-6 w-14 h-14 z-10">
            <img
              className="rounded-full border border-[#E3E2F1]"
              src="/user-image.jpg"
              alt="user-image"
            />
          </span>
          <span className="absolute right-4 -mt-8 shadow-md px-3 py-3 font-bold rounded-full bg-white text-center z-10">
            <span className=" bg-[#F36A46] inline-block h-3 w-3 rounded-full"></span>{" "}
            9 Hours
          </span>
        </div>
        <GlamRoomSection />
      </div>
    ))}
  </div>
);

export default Suggestions;
