'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function page() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-5 lg:px-0">
        <section className="flex flex-col items-center justify-center text-center mb-32">
          <h2 className="text-[34px] md:text-[84px] font-semibold">
            How can we help?
          </h2>
          <p className="text-[#5F6980] text-base md:text-xl">
            If you have any questions, reach out to our team for help
          </p>
        </section>

        <section className="w-full md:w-[1000px] mx-auto">
          <h1 className="text-[34px] font-semibold mb-8">Contact Us</h1>

          <form>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 space-y-6 md:space-y-0 mb-6">
              <input
                placeholder="First name"
                className="px-5 py-2 border-2 w-full rounded-xl"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                placeholder="Last name"
                className="px-5 py-2 border-2 w-full rounded-xl"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              placeholder="Enter your email"
              type="email"
              className="px-5 py-2 border-2 w-full rounded-xl mb-6"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Department"
              className="px-5 py-2 border-2 w-full rounded-xl mb-6"
              onChange={(e) => setDepartment(e.target.value)}
            />
            <textarea
              placeholder="Type your message here..."
              className="px-4 py-2 border-2 w-full rounded-xl"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
            ></textarea>
          </form>

          <button className="w-full rounded-full bg-[#7E36F4] px-7 py-3 text-xl font-semibold text-white mt-4 mb-6">
            Send Message
          </button>

          <p className="text-[#5F6980] text-sm">
            By contacting us, you agree to Framer’s{' '}
            <a href="/terms" className="font-semibold">
              Terms and Conditions.
            </a>
          </p>
        </section>
      </main>

      <Cta />
      <Faq />
      <Footer />
    </>
  )
}
