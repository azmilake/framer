import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Cta() {
  return (
    <section className="mt-20 mb-40 max-w-7xl mx-auto px-5 lg:px-0" id="cta">
      <div className="h-full md:h-[580px] bg-black rounded-[40px] flex justify-between text-white overflow-hidden">
        <div className="px-8 md:px-16 py-10 md:py-20 flex flex-col w-full md:w-1/2">
          <div className="mb-8">
            <h2 className="font-semibold text-[34px] md:text-[54px] mb-4">
              Pro Access
            </h2>
            <p className="font-normal text-base md:text-xl text-[#DDDDDD]">
              Designing in Framer has never been so fast and effortless. Browse
              hundreds of beautifully designed layouts, copy and paste assets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            <div className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.1921 0.464547C19.5826 0.855071 19.5826 1.48824 19.1921 1.87876L7.94909 13.1218C7.51951 13.5513 6.82303 13.5513 6.39345 13.1218L0.80731 7.53561C0.416786 7.14509 0.416786 6.51192 0.80731 6.1214C1.19783 5.73088 1.831 5.73088 2.22152 6.1214L7.17127 11.0711L17.7779 0.464547C18.1684 0.0740226 18.8016 0.0740229 19.1921 0.464547Z"
                  fill="#FFFFFF"
                />
              </svg>
              <h3 className="text-base font-normal">3K+ templates</h3>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.1921 0.464547C19.5826 0.855071 19.5826 1.48824 19.1921 1.87876L7.94909 13.1218C7.51951 13.5513 6.82303 13.5513 6.39345 13.1218L0.80731 7.53561C0.416786 7.14509 0.416786 6.51192 0.80731 6.1214C1.19783 5.73088 1.831 5.73088 2.22152 6.1214L7.17127 11.0711L17.7779 0.464547C18.1684 0.0740226 18.8016 0.0740229 19.1921 0.464547Z"
                  fill="#FFFFFF"
                />
              </svg>
              <h3 className="text-base font-normal">Shared styles</h3>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.1921 0.464547C19.5826 0.855071 19.5826 1.48824 19.1921 1.87876L7.94909 13.1218C7.51951 13.5513 6.82303 13.5513 6.39345 13.1218L0.80731 7.53561C0.416786 7.14509 0.416786 6.51192 0.80731 6.1214C1.19783 5.73088 1.831 5.73088 2.22152 6.1214L7.17127 11.0711L17.7779 0.464547C18.1684 0.0740226 18.8016 0.0740229 19.1921 0.464547Z"
                  fill="#FFFFFF"
                />
              </svg>
              <h3 className="text-base font-normal">Responsive layouts</h3>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.1921 0.464547C19.5826 0.855071 19.5826 1.48824 19.1921 1.87876L7.94909 13.1218C7.51951 13.5513 6.82303 13.5513 6.39345 13.1218L0.80731 7.53561C0.416786 7.14509 0.416786 6.51192 0.80731 6.1214C1.19783 5.73088 1.831 5.73088 2.22152 6.1214L7.17127 11.0711L17.7779 0.464547C18.1684 0.0740226 18.8016 0.0740229 19.1921 0.464547Z"
                  fill="#FFFFFF"
                />
              </svg>
              <h3 className="text-base font-normal">5k Components</h3>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.1921 0.464547C19.5826 0.855071 19.5826 1.48824 19.1921 1.87876L7.94909 13.1218C7.51951 13.5513 6.82303 13.5513 6.39345 13.1218L0.80731 7.53561C0.416786 7.14509 0.416786 6.51192 0.80731 6.1214C1.19783 5.73088 1.831 5.73088 2.22152 6.1214L7.17127 11.0711L17.7779 0.464547C18.1684 0.0740226 18.8016 0.0740229 19.1921 0.464547Z"
                  fill="#FFFFFF"
                />
              </svg>
              <h3 className="text-base font-normal">Google fonts</h3>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.1921 0.464547C19.5826 0.855071 19.5826 1.48824 19.1921 1.87876L7.94909 13.1218C7.51951 13.5513 6.82303 13.5513 6.39345 13.1218L0.80731 7.53561C0.416786 7.14509 0.416786 6.51192 0.80731 6.1214C1.19783 5.73088 1.831 5.73088 2.22152 6.1214L7.17127 11.0711L17.7779 0.464547C18.1684 0.0740226 18.8016 0.0740229 19.1921 0.464547Z"
                  fill="#FFFFFF"
                />
              </svg>
              <h3 className="text-base font-normal">Premium support</h3>
            </div>
          </div>
          <button className="bg-[#7E36F4] text-base font-semibold rounded-full py-3">
            Start your 7 day trial
          </button>
        </div>
        <div className="hidden w-3/4 md:grid md:grid-cols-3 -ml-52">
          <Marquee
            direction="up"
            className="overflow-hidden"
            autoFill="true"
            speed="50"
          >
            <img
              src="/hero-1.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-2.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-3.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-1.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-5.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-6.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-4.png"
              className="w-56 h-52 object-cover object-center"
            />
          </Marquee>
          <Marquee
            direction="down"
            className="overflow-hidden -ml-16"
            autoFill="true"
            speed="50"
          >
            <img
              src="/hero-1.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-2.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-3.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-1.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-5.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-6.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-4.png"
              className="w-56 h-52 object-cover object-center"
            />
          </Marquee>
          <Marquee
            direction="up"
            className="overflow-hidden -ml-32"
            autoFill="true"
            speed="50"
          >
            <img
              src="/hero-1.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-2.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-3.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-1.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-5.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-6.png"
              className="w-56 h-52 object-cover object-center"
            />
            <img
              src="/hero-4.png"
              className="w-56 h-52 object-cover object-center"
            />
          </Marquee>
        </div>
      </div>
    </section>
  )
}
