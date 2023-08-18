// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Home() {
  return (
    <section className="py-8">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <div className="px-5">
        <p className="font-bold text-2xl">Discover</p>
        <div className="w-40 h-64 rounded-xl relative border">
          <span className="absolute w-10 h-8 bg-purple-700 text-white border border-red-600 top-5 left-4">
            NEW
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
            <p>16 km away</p>
            <p>
              Halima, 19
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </p>
            <p>BERLIN</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <p className="text-xl">
          Popular Search <span className="float-right text-[#E092D3]">View all</span>
        </p>
        <div className="flex flex-wrap mt-5">
          <span className="bg-[#E1F5FA] text-[#216F80] rounded-2xl px-10 py-2 mb-2">
            Hair
          </span>
          <span className="bg-[#E1F5FA] text-[#216F80] rounded-2xl px-10 py-2 mb-2">
            Nails
          </span>
          <span className="bg-[#E1F5FA] text-[#216F80] rounded-2xl px-10 py-2 mb-2">
            Coloring
          </span>
          <span className="bg-[#E1F5FA] text-[#216F80] rounded-2xl px-10 py-2 mb-2">
            Message
          </span>
          <span className="bg-[#E1F5FA] text-[#216F80] rounded-2xl px-10 py-2 mb-2">
            Facials
          </span>
          <span className="bg-[#E1F5FA] text-[#216F80] rounded-2xl px-10 py-2 mb-2">
            Hair
          </span>
        </div>
      </div>
      <div>
        <p className="text-xl">Suggestions for you</p>
        <div className="bg-[#E7E4F4] p-5 relative">
          <img src="/ssss.png" alt="slide-img" />
          <span className="absolute w-14 h-14">
            <img
              className=" rounded-full"
              src="/user-image.jpg"
              alt="user-image"
            />
          </span>
          <span className="absolute w-32 rounded-2xl bg-white right-0">
            <span className="h-4 w-4 bg-[#F36A46]"></span> 9 Hours
          </span>
        </div>
        <p className="text-2xl">The Glam Room</p>
        <span className="bg-[#E1F5FA] text-[#216F80] rounded-2xl px-10 py-2">
          Makeup
        </span>
        <span className="bg-[#E1F5FA] text-[#216F80] rounded-2xl px-10 py-2">
          Hair
        </span>
        <span className="bg-[#E1F5FA] text-[#216F80] rounded-2xl px-10 py-2">
          Nails
        </span>
        <p>Washington St, Bradford BD8 9QW</p>
      </div>
      <div>
        <p>Opening Hours</p>
        <div className="grid grid-cols-2">
          <div>
            <p>Monday - Friday</p>
            <p>08:00am - 03-00pm</p>
          </div>
          <div>
            <p>Saturday - Sunday</p>
            <p>09:00am - 02-00pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
