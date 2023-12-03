'use client'

import CardData from './utils/cardTemplateData.json'
import TestimonialsData from './utils/cardTestimonialsData.json'
import CardTemplate from './components/CardTemplate'
import Navbar from './components/Navbar'
import CardTestimonials from './components/CardTestimonials'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Cta from './components/Cta'
import CarouselSlide from './components/CarouselSlide'
import { SwiperSlide } from 'swiper/react'

export default function Home() {
  return (
    <>
      <Navbar bg="gray-100" />

      <main className="">
        <section
          className="-mt-16 mb-20 bg-gray-100 pt-16 pb-20 px-5 lg:px-0"
          id="hero"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-6/12 flex flex-col mb-16 md:mb-0">
              <div className="">
                {' '}
                <p className="text-sm md:text-lg font-semibold text-[#282828] mb-2">
                  The designer marketplace
                </p>
                <h1 className="text-[64px] md:text-[84px] text-[#282828] font-semibold leading-none mb-6">
                  Pro Framer templates
                </h1>
                <h3 className="text-[#475467] text-sm md:text-xl font-normal w-full md:w-8/12 leading-8 mb-8">
                  A template library built with high precision and the best
                  UI/UX practices in mind so you'll always find the perfect
                  template for your next big idea.​
                </h3>
                <button className="py-2 md:py-3 px-7 rounded-full bg-[#7E36F4] w-full md:w-4/12 text-white text-sm md:text-lg font-semibold shrink-0">
                  Get Pro Access
                </button>
              </div>
              <div className="mt-16 md:mt-72 flex flex-col md:flex-row items-center space-x-0 md:space-x-10 space-y-6 md:space-y-0 -ml-16 md:-ml-0">
                <div className="flex space-x-3 items-center">
                  <div className="h-[42px] w-[42px] bg-white rounded-xl flex items-center justify-center">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 0C6.23858 0 4 2.23858 4 5C4 7.76142 6.23858 10 9 10C11.7614 10 14 7.76142 14 5C14 2.23858 11.7614 0 9 0ZM6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5Z"
                        fill="#09244B"
                      />
                      <path
                        d="M5 12C2.23858 12 0 14.2386 0 17V19C0 19.5523 0.447715 20 1 20C1.55228 20 2 19.5523 2 19V17C2 15.3431 3.34315 14 5 14H13C14.6569 14 16 15.3431 16 17V19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19V17C18 14.2386 15.7614 12 13 12H5Z"
                        fill="#09244B"
                      />
                    </svg>
                  </div>
                  <p className="w-[220px] text-[#475467] text-sm">
                    12.5K designer using our templates
                  </p>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="h-[42px] w-[42px] bg-white rounded-xl flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 0C0.89543 0 0 0.895431 0 2V4C0 5.10457 0.89543 6 2 6V12C0.89543 12 0 12.8954 0 14V16C0 17.1046 0.89543 18 2 18H4C5.10457 18 6 17.1046 6 16H12C12 17.1046 12.8954 18 14 18H16C17.1046 18 18 17.1046 18 16V14C18 12.8954 17.1046 12 16 12V6C17.1046 6 18 5.10457 18 4V2C18 0.895431 17.1046 0 16 0H14C12.8954 0 12 0.895431 12 2H6C6 0.895431 5.10457 0 4 0H2ZM12 4C12 5.10457 12.8954 6 14 6V12C12.8954 12 12 12.8954 12 14H6C6 12.8954 5.10457 12 4 12V6C5.10457 6 6 5.10457 6 4H12ZM2 2H4V4H2V2ZM4 14H2V16H4V14ZM16 14H14V16H16V14ZM14 2H16V4H14V2Z"
                        fill="#09244B"
                      />
                    </svg>
                  </div>
                  <p className="w-[220px] text-[#475467] text-sm">
                    1K+ Framer templates designed by pros
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 bg-[#EDEEF1] rounded-3xl h-full md:h-[767px] p-6">
              <div className="grid md:grid-cols-2 gap-6 justify-center items-center h-full">
                <div className="bg-white h-56 rounded-xl p-3 overflow-hidden">
                  <img src="/hero-1.png" alt="hero-img" />
                </div>
                <div className="bg-white h-56 rounded-xl p-3 overflow-hidden">
                  <img src="/hero-2.png" alt="hero-img" />
                </div>
                <div className="bg-white h-56 rounded-xl p-3 overflow-hidden">
                  <img src="/hero-3.png" alt="hero-img" />
                </div>
                <div className="bg-white h-56 rounded-xl p-3 overflow-hidden">
                  <img src="/hero-4.png" alt="hero-img" />
                </div>
                <div className="bg-white h-56 rounded-xl p-3 overflow-hidden">
                  <img src="/hero-6.png" alt="hero-img" />
                </div>
                <div className="bg-white h-56 rounded-xl p-3 overflow-hidden">
                  <img src="/hero-5.png" alt="hero-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-20 mb-40 container mx-auto px-5 lg:px-0"
          id="latest"
        >
          <h2 className="text-[28px] font-semibold mb-8">Latest Templates</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
            {CardData.slice(0, 8).map((card) => (
              <CardTemplate
                key={card.id}
                img={card.img}
                title={card.title}
                price={card.price}
                author={card.author}
              />
            ))}
          </div>
        </section>

        <section
          className="mt-20 mb-40 container mx-auto px-5 lg:px-0"
          id="staff"
        >
          <h2 className="text-[28px] font-semibold mb-8">Staff Picks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
            {CardData.slice(8, 16).map((card) => (
              <CardTemplate
                key={card.id}
                img={card.img}
                title={card.title}
                price={card.price}
                author={card.author}
              />
            ))}
          </div>
        </section>

        <section
          className="mt-20 mb-40 container mx-auto px-5 lg:px-0"
          id="testimonial"
        >
          <div className="flex flex-col justify-center text-center mb-10">
            <h3 className="text-xs md:text-base font-semibold">Testimonials</h3>
            <h2 className="text-[28px] md:text-[42px] font-semibold">
              What designers think
            </h2>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {TestimonialsData.map((card) => (
              <CardTestimonials
                key={card.id}
                avatar={card.avatar}
                name={card.name}
                desc={card.desc}
                product={card.product}
              />
            ))}

            {/* <CarouselSlide title="Best Seller">
              {' '}
              {CardData.slice(0, 8).map((card) => (
                <SwiperSlide>
                  <CardTemplate
                    key={card.id}
                    img={card.img}
                    title={card.title}
                    price={card.price}
                    author={card.author}
                  />
                </SwiperSlide>
              ))}
            </CarouselSlide> */}
          </div>

          <div className="md:hidden">
            <CarouselSlide show={1}>
              {TestimonialsData.map((card) => (
                <SwiperSlide>
                  <CardTestimonials
                    key={card.id}
                    avatar={card.avatar}
                    name={card.name}
                    desc={card.desc}
                    product={card.product}
                  />
                </SwiperSlide>
              ))}
            </CarouselSlide>
          </div>
        </section>
      </main>

      <Cta />

      <Faq />

      <Footer />
    </>
  )
}
