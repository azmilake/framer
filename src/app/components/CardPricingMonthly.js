import React from 'react'

const pricingData = [
  {
    title: 'Freelancer',
    price: '$59',
    description: 'Per User',
    features: [
      'Full library access',
      '20 assets / mo',
      'Regular updates',
      '1 custom template',
      'Premium support',
    ],
    buttonText: 'Start for free',
    featured: false,
  },
  {
    title: 'Agency',
    price: '$48',
    description: 'Per User',
    features: [
      'Full templates access',
      '30 assets / mo',
      'Regular updates',
      '3 custom template',
      'Premium support',
    ],
    buttonText: 'Subscribe',
    featured: true,
  },
  {
    title: 'Enterprise',
    price: '$99',
    description: 'Per user.',
    features: [
      'Full library access',
      'Unlimited assets',
      'Regular updates',
      '10 custom template',
      'Premium support',
    ],
    buttonText: 'Start for free',
    featured: false,
  },
]

export default function CardPricingMonthly() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
      {pricingData.map((pricing, index) => (
        <div
          key={index}
          className={`rounded-xl shadow-lg flex flex-col p-10 w-full md:w-[400px]`}
        >
          <div className="">
            <h1 className={`text-lg font-semibold`}>{pricing.title}</h1>
            <p className="my-4">
              <span className="text-[34px] font-semibold">
                {pricing.price}{' '}
                <span className="text-[28px] font-semibold"> /mo</span>
              </span>{' '}
            </p>
            <p className="text-base font-normal">{pricing.description}</p>
          </div>
          <div className={`flex flex-col gap-y-6 font-normal text-base mt-4`}>
            <div className="flex flex-col gap-y-3">
              {pricing.features.map((feature, idx) => (
                <p key={idx} className="flex items-center gap-x-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.1921 0.464547C19.5826 0.855071 19.5826 1.48824 19.1921 1.87876L7.94909 13.1218C7.51951 13.5513 6.82303 13.5513 6.39345 13.1218L0.80731 7.53561C0.416786 7.14509 0.416786 6.51192 0.80731 6.1214C1.19783 5.73088 1.831 5.73088 2.22152 6.1214L7.17127 11.0711L17.7779 0.464547C18.1684 0.0740226 18.8016 0.0740229 19.1921 0.464547Z"
                      fill="#000000"
                    />
                  </svg>
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`text-center border py-3 text-black rounded-full font-semibold text-base hover:bg-black hover:text-white ${
                pricing.featured ? 'bg-black text-white' : ''
              }  font-semibold`}
            >
              {pricing.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
