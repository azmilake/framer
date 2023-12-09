import React, { useState } from 'react'

export default function Navbar({ bg }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`border-gray-200 bg-${bg} mb-16`}>
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
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
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-5 rtl:space-x-reverse items-center">
          <li className="list-none">
            <a
              href="#"
              className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent text-sm font-semibold"
            >
              Sign In
            </a>
          </li>
          <button
            type="button"
            className="text-white bg-[#282828] font-semibold rounded-full text-sm px-5 py-[10px] text-center sm:hidden md:block hidden"
          >
            Buy Template
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:focus:ring-gray-400"
            aria-controls="navbar-cta"
            aria-expanded={isMobileMenuOpen}
            onClick={handleToggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-300">
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent text-sm font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent text-sm font-semibold"
              >
                Shop
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto md:dark:hover:bg-transparent text-sm font-semibold"
              >
                Product
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className={`absolute ${
                  isDropdownOpen ? 'block' : 'hidden'
                } z-10 text-sm font-semibold bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-200 mt-4`}
              >
                <ul
                  className="py-2 text-sm"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2">
                      3D Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2">
                      UI/UX
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="block px-4 py-2">
                      Pricing
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="/terms" className="block px-4 py-2">
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a
                href="/about"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent text-sm font-semibold"
              >
                About
              </a>
            </li>
            <li className="mt-5">
              <button
                type="button"
                className="text-white bg-[#282828] font-semibold rounded-full text-sm px-5 py-[10px] text-center sm:hidden md:hidden"
              >
                Buy Template
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
