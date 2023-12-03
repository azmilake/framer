import React from 'react'

export default function Footer() {
  return (
    <section className="mt-0 md:mt-20 w-full  md:w-[900px] mx-auto">
      <footer>
        <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start">
          <div className="p-5">
            <ul>
              <svg
                width="22"
                height="22"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 2C0 0.895431 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.895431 18 0 17.1046 0 16V2ZM16 2H2V5H16V2ZM2 16V7H6V16H2ZM8 16H16V7H8V16Z"
                  fill="#000000"
                />
              </svg>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="font-semibold text-sm pb-4">Browse</p>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                Features
              </li>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                <a href="/pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="font-semibold text-sm pb-4">Resources</p>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                Blog home
              </li>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                Blog single
              </li>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                Integrations
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="font-semibold text-sm pb-4">Information</p>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                <a href="/about">About us</a>
              </li>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                Contact us
              </li>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                404 page
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="font-semibold text-sm pb-4">Follow us</p>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                Dribbble
              </li>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                Behance
              </li>
              <li className="text-[#5F6980] text-sm pb-3 font-normal cursor-pointer">
                Instagram
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center pt-16 pb-20">
          <h1 className=" text-[#5F6980] font-normal text-sm">
            &copy; 2023 AzmiMuhammad
          </h1>
        </div>
      </footer>
    </section>
  )
}
