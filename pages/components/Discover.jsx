"use client";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Discover = () => {
  const profiles = [
    {
      image: "/profile1.jpg",
      name: "Halima",
      age: 19,
      distance: 16,
      city: "BERLIN",
    },
    {
      image: "/profile2.jpg",
      name: "James",
      age: 24,
      distance: 20,
      city: "LONDON",
    },
    {
      image: "/profile3.jpg",
      name: "Sophia",
      age: 21,
      distance: 18,
      city: "PARIS",
    },
    {
      image: "/profile4.jpg",
      name: "William",
      age: 25,
      distance: 10,
      city: "NEW YORK",
    },
    {
      image: "/profile5.jpg",
      name: "Emily",
      age: 22,
      distance: 15,
      city: "TOKYO",
    },
    {
      image: "/profile6.jpg",
      name: "Michael",
      age: 23,
      distance: 12,
      city: "SYDNEY",
    },
    {
      image: "/profile7.jpg",
      name: "Emma",
      age: 20,
      distance: 14,
      city: "MADRID",
    },
  ];
  return (
    <div className="px-5">
      <p className="font-bold text-2xl mb-3">Discover</p>
      {/* profile cards slider start */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={3.2}
        spaceBetween={10}
      >
        {profiles.map((profile, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-44 rounded-2xl relative overflow-hidden border bg-cover"
              style={{ backgroundImage: `url('${profile.image}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-25 rounded-2xl"></div>
              <span className="text-xs absolute bg-[#4C164C] text-white border-2 border-[#C67ABA] top-2 left-2 px-2.5 py-0.5 rounded-lg">
                NEW
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center pb-3 text-white text-xs w-full z-10">
                <p className="bg-[#876A78] inline-block px-3 py-1 rounded-2xl border border-[#b698a9] mb-2">
                  {profile.distance} km away
                </p>
                <p className="mb-1">
                  {profile.name}, {profile.age}
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block ml-1"></span>
                </p>
                <p className="text-[#B2A0B5]">{profile.city}</p>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-16">
                <div className="h-full bg-gradient-to-t from-[#4B164C] via-[rgba(75, 22, 76, 0)] to-[rgba(75, 22, 76, 0.5)] rounded-b-xl"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* profile cards slider end */}
    </div>
  );
};

export default Discover;
