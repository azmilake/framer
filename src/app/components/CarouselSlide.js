import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { useRef } from 'react'

export default function CarouselSlide({ title, show, children }) {
  const swiperRef = useRef(null)

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  return (
    <>
      <div className="flex justify-center md:justify-between items-center mb-8">
        <h1 className="text-[28px] font-semibold">{title}</h1>
        <div className="hidden md:flex space-x-5 mt-8 justify-end">
          <div className="text-2xl text-white rounded-md">
            <button onClick={slidePrev}>
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.636063 6.29289C0.245539 6.68341 0.245539 7.31658 0.636063 7.7071L6.29292 13.364C6.68344 13.7545 7.31661 13.7545 7.70713 13.364C8.09766 12.9734 8.09766 12.3403 7.70713 11.9497L3.75738 7.99999H17C17.5523 7.99999 18 7.55228 18 6.99999C18 6.44771 17.5523 5.99999 17 5.99999H3.75738L7.70713 2.05025C8.09766 1.65972 8.09766 1.02656 7.70713 0.636033C7.31661 0.245509 6.68344 0.245508 6.29292 0.636033L0.636063 6.29289Z"
                  fill="#000000"
                />
              </svg>
            </button>
          </div>
          <div className="text-2xl text-white rounded-md">
            <button onClick={slideNext}>
              {' '}
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7071 0.636033L17.3639 6.29289C17.7545 6.68341 17.7545 7.31658 17.3639 7.7071L11.7071 13.364C11.3166 13.7545 10.6834 13.7545 10.2929 13.364C9.90235 12.9734 9.90235 12.3403 10.2929 11.9497L14.2426 7.99999H1C0.447715 7.99999 0 7.55228 0 6.99999C0 6.44771 0.447715 5.99999 1 5.99999H14.2426L10.2929 2.05025C9.90235 1.65972 9.90235 1.02656 10.2929 0.636033C10.6834 0.245509 11.3166 0.245508 11.7071 0.636033Z"
                  fill="#000000"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Swiper
        // slidesPerView={4}
        // spaceBetween={20}
        breakpoints={{
          380: {
            slidesPerView: show,
            spaceBetween: 20,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper my-10"
      >
        {children}
      </Swiper>
    </>
  )
}
