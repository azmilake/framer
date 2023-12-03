import React from 'react'

export default function CardTemplate({ img, title, price, author }) {
  return (
    <div>
      <div className="w-full md:w-[296px] h-[190px] md:h-[312px] bg-gray-100 rounded-xl md:rounded-3xl flex items-center justify-center pt-8 px-7 overflow-hidden mb-4 hover:transform hover:scale-105 transition-all duration-200">
        <img src={img} className="h-full object-cover object-center" />
      </div>
      <div className="w-full md:w-[296px]">
        <div className="flex justify-between mb-1">
          <h3 className="text-sm md:text-lg font-semibold">{title}</h3>
          <span className="py-1 px-[10px] md:px-[14px] bg-gray-100 items-center text-xs md:text-sm font-semibold rounded-full">
            ${price}
          </span>
        </div>
        <p className="text-[#5F6980] font-normal md:text-sm text-xs">
          <a href="/author">by {author}</a>
        </p>
      </div>
    </div>
  )
}
