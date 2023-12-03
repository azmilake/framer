'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import SectionAbout from '../components/SectionAbout'

export default function About() {
  return (
    <>
      <Navbar />

      <main className="container mx-auto px-5 lg:px-0">
        <section className="w-full md:w-[900px] flex flex-col justify-center items-center container mx-auto mt-20">
          <h4 className="text-base md:text-xl font-semibold">
            Cafting user-centric interfaces
          </h4>
          <h1 className="text-[33px] md:text-[84px] font-semibold text-center my-4 leading-tight">
            We design every template as our own
          </h1>
          <p className="w-full md:w-[625px] text-base md:text-xl font-normal text-center">
            All good things starts with a homepage get inspired without breaking
            your wallet.
          </p>
          <img
            src="/about-img.png"
            className="md:scale-75 scale-100 mt-8 md:mb-0"
          />
        </section>

        <section className="mt-40">
          <div className="flex flex-col md:flex-row border-t-0 md:border-t border-b-0 md:border-b items-center">
            <div className="p-2 md:p-10 flex flex-col">
              <h2 className="text-[34px] font-semibold mb-1">15k+</h2>
              <h4 className="text-base font-semibold mb-2">Downloads</h4>
              <p className="text-sm font-normal text-[#5F6980]">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
            <div className="p-2 md:p-10 flex flex-col border-t md:border-l">
              <h2 className="text-[34px] font-semibold mb-1">250+</h2>
              <h4 className="text-base font-semibold mb-2">
                Premium templates
              </h4>
              <p className="text-sm font-normal text-[#5F6980]">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
            <div className="p-2 md:p-10 flex flex-col border-t md:border-l">
              <h2 className="text-[34px] font-semibold mb-1">12k+</h2>
              <h4 className="text-base font-semibold mb-2">Components</h4>
              <p className="text-sm font-normal text-[#5F6980]">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
            <div className="p-2 md:p-10 flex flex-col border-t md:border-l">
              <h2 className="text-[34px] font-semibold mb-1">120</h2>
              <h4 className="text-base font-semibold mb-2">Platforms</h4>
              <p className="text-sm font-normal text-[#5F6980]">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row justify-between items-center mt-20">
            <div className="flex flex-col w-full md:w-[547px]">
              <h2 className="text-[34px] md:text-[54px] font-semibold mb-4 leading-tight">
                We prioritize user-centric design
              </h2>
              <h6 className="text-xl font-semibold mb-6">
                Focused to create a thoughtful and unique resources for
                developers and designers.
              </h6>
              <p className="text-lg font-normal text-[#5F6980]">
                Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
                adipiscing augue sit justo elit. Mauris bibendum mattis et diam
                tellus. Auctor mauris felis lobortis tempus, magna nisl, proin
                amet. Et diam amet aliquet nisi egestas aenean nunc. Vitae, arcu
                euismod turpis in tempus tincidunt mattis tellus nisl.
              </p>
            </div>
            <img
              src="https://source.unsplash.com/540x280?work"
              alt="about1"
              className="rounded-2xl w-full md:w-6/12 bg-cover bg-center object-cover object-center mt-10 md:mt-0"
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-20">
            <img
              src="https://source.unsplash.com/540x280?art"
              alt="about1"
              className="rounded-2xl w-full md:w-6/12 bg-cover bg-center object-cover object-center mt-10 md:mt-0"
            />
            <div className="flex flex-col w-full md:w-[547px]">
              <h2 className="text-[34px] md:text-[54px] font-semibold mb-4 leading-tight">
                We prioritize user-centric design
              </h2>
              <h6 className="text-xl font-semibold mb-6">
                Focused to create a thoughtful and unique resources for
                developers and designers.
              </h6>
              <p className="text-lg font-normal text-[#5F6980]">
                Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
                adipiscing augue sit justo elit. Mauris bibendum mattis et diam
                tellus. Auctor mauris felis lobortis tempus, magna nisl, proin
                amet. Et diam amet aliquet nisi egestas aenean nunc. Vitae, arcu
                euismod turpis in tempus tincidunt mattis tellus nisl.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-40">
          <div className="flex flex-col items-center justify-center mb-14">
            <p className="border border-black rounded-full px-4 py-1 text-xm md:text-base font-normal md:font-semibold">
              Talent and dedication
            </p>
            <h2 className="text-[34px] md:text-[63px] font-semibold mb-4">
              An invincible team
            </h2>
            <p className="w-full md:w-[625px] text-center text-lg md:text-xl font-normal text-[#5F6980]">
              We are passionate about creating visually stunning and robust
              solutions that communicate effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-x-8 gap-y-12 mb-20 md:mb-0">
            <div className="flex flex-col text-center mx-auto">
              <div className="overflow-hidden rounded-3xl mb-4">
                {' '}
                <img
                  src="https://source.unsplash.com/540x320?people"
                  className="h-[350px]"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">Jocelyn Schleifer</h3>
              <p className="text-base font-semibold text-[#9D9FA1]">
                Managing Director
              </p>
            </div>
            <div className="flex flex-col text-center mx-auto">
              <div className="overflow-hidden rounded-3xl mb-4">
                {' '}
                <img
                  src="https://source.unsplash.com/540x320?man"
                  className="h-[350px]"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">Jocelyn Schleifer</h3>
              <p className="text-base font-semibold text-[#9D9FA1]">
                Managing Director
              </p>
            </div>
            <div className="flex flex-col text-center mx-auto">
              <div className="overflow-hidden rounded-3xl mb-4">
                {' '}
                <img
                  src="https://source.unsplash.com/540x320?woman"
                  className="h-[350px]"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">Jocelyn Schleifer</h3>
              <p className="text-base font-semibold text-[#9D9FA1]">
                Managing Director
              </p>
            </div>
            <div className="flex flex-col text-center mx-auto">
              <div className="overflow-hidden rounded-3xl mb-4">
                {' '}
                <img
                  src="https://source.unsplash.com/540x320?man"
                  className="h-[350px]"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">Jocelyn Schleifer</h3>
              <p className="text-base font-semibold text-[#9D9FA1]">
                Managing Director
              </p>
            </div>
            <div className="flex flex-col text-center mx-auto">
              <div className="overflow-hidden rounded-3xl mb-4">
                {' '}
                <img
                  src="https://source.unsplash.com/540x320?woman"
                  className="h-[350px]"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">Jocelyn Schleifer</h3>
              <p className="text-base font-semibold text-[#9D9FA1]">
                Managing Director
              </p>
            </div>
            <div className="flex flex-col text-center mx-auto">
              <div className="overflow-hidden rounded-3xl mb-4">
                {' '}
                <img
                  src="https://source.unsplash.com/540x320?man"
                  className="h-[350px]"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">Jocelyn Schleifer</h3>
              <p className="text-base font-semibold text-[#9D9FA1]">
                Managing Director
              </p>
            </div>
            <div className="flex flex-col text-center mx-auto">
              <div className="overflow-hidden rounded-3xl mb-4">
                {' '}
                <img
                  src="https://source.unsplash.com/540x320?woman"
                  className="h-[350px]"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">Jocelyn Schleifer</h3>
              <p className="text-base font-semibold text-[#9D9FA1]">
                Managing Director
              </p>
            </div>
            <div className="flex flex-col text-center mx-auto">
              <div className="overflow-hidden rounded-3xl mb-4">
                {' '}
                <img
                  src="https://source.unsplash.com/540x320?woman"
                  className="h-[350px]"
                />
              </div>

              <h3 className="text-lg font-semibold mb-1">Jocelyn Schleifer</h3>
              <p className="text-base font-semibold text-[#9D9FA1]">
                Managing Director
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
