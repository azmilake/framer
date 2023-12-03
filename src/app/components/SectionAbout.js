import React from 'react'

export default function SectionAbout({
  imageSrc,
  title,
  subtitle,
  description,
  imagePosition,
}) {
  const imageAlignmentClass = imagePosition === 'right' ? 'order-2' : 'order-1'

  return (
    <div
      className={`flex justify-between items-center mt-20 ${imageAlignmentClass}`}
    >
      <div className="flex flex-col w-[547px]">
        <h2 className="text-[54px] font-semibold mb-4">{title}</h2>
        <h6 className="text-xl font-semibold mb-6">{subtitle}</h6>
        <p className="text-lg font-normal text-[#5F6980]">{description}</p>
      </div>
      <img
        src={imageSrc}
        alt="feature"
        className={`rounded-2xl w-6/12 bg-cover bg-center object-cover object-center ${imageAlignmentClass}`}
      />
    </div>
  )
}
