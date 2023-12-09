'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import CardTemplate from '../components/CardTemplate'
import CardData from '../utils/cardTemplateData.json'
import CarouselSlide from '../components/CarouselSlide'
import { SwiperSlide } from 'swiper/react'

export default function Shop() {
  return (
    <>
      <Navbar bg="white" />

      <main className="px-5 lg:px-0">
        <section className="w-full md:w-[900px] flex flex-col justify-center items-center max-w-7xl mx-auto mt-20">
          <h4 className="text-base md:text-xl font-semibold mb-3">
            Browse Templates
          </h4>
          <h1 className="text-[33px] md:text-6xl font-semibold text-center mb-4 leading-tight">
            High quality resources, designed to perfection
          </h1>
          <p className="w-full md:w-[625px] text-base md:text-lg font-normal text-[#5F6980] text-center mb-6">
            Find and download the best high-quality 3D and vector illustrations,
            fonts, designs and mockups.
          </p>
          <div className="w-full md:w-[450px] flex items-center relative mb-6">
            <input
              className="p-4 border border-[#9D9FA1] w-full h-12 rounded-full text-sm font-normal"
              placeholder="Search resources..."
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17C10.4869 17 12.3146 16.3183 13.7619 15.176L17.4142 18.8283C17.8047 19.2188 18.4379 19.2188 18.8284 18.8283C19.2189 18.4378 19.2189 17.8046 18.8284 17.4141L15.1761 13.7618C16.3183 12.3145 17 10.4868 17 8.5C17 3.80558 13.1944 0 8.5 0ZM2 8.5C2 4.91015 4.91015 2 8.5 2C12.0899 2 15 4.91015 15 8.5C15 12.0899 12.0899 15 8.5 15C4.91015 15 2 12.0899 2 8.5Z"
                fill="#282828"
              />
            </svg>
          </div>
          <div className="hidden md:flex items-center space-x-7">
            <h3 className="text-base font-semibold">Categories</h3>
            <div className="flex items-center gap-x-3">
              <div className="px-2 py-1 border rounded-full flex items-center justify-center text-sm font-semibold">
                Ui kits
              </div>
              <div className="px-2 py-1 border rounded-full flex items-center justify-center text-sm font-semibold">
                Framer Templates
              </div>
              <div className="px-2 py-1 border rounded-full flex items-center justify-center text-sm font-semibold">
                Webflow Templates
              </div>
              <div className="px-2 py-1 border rounded-full flex items-center justify-center text-sm font-semibold">
                Design Systems
              </div>
              <div className="px-2 py-1 border rounded-full flex items-center justify-center text-sm font-semibold">
                Illustrations
              </div>
              <div className="px-2 py-1 border rounded-full flex items-center justify-center text-sm font-semibold">
                Icons
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mt-20">
          {/* <CarouselSlide title="Latest Templates" num={8} /> */}
          <CarouselSlide title="Latest Templates" show={2}>
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
          </CarouselSlide>
        </section>

        <section className="max-w-7xl mx-auto mt-20">
          <CarouselSlide title="Best Seller" show={2}>
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
          </CarouselSlide>
        </section>

        <section className="max-w-7xl mx-auto mt-40">
          <h2 className="text-[28px] font-semibold mb-8">Another Templates</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-y-8 md:gap-x-0">
            {' '}
            {CardData.slice(0, 16).map((card) => (
              <CardTemplate
                key={card.id}
                img={card.img}
                title={card.title}
                price={card.price}
                author={card.author}
              />
            ))}
          </div>

          <div className="flex items-center justify-center mt-20 mb-40">
            <button className="w-full text-lg font-semibold text-black border-2 border-black text-center py-3 rounded-full hover:text-white hover:bg-black">
              Load more
            </button>
          </div>
        </section>
      </main>

      <Cta />
      <Faq />
      <Footer />
    </>
  )
}
