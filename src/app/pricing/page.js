'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import CardPricingMonthly from '../components/CardPricingMonthly'
import CardPricingYearly from '../components/CardPricingYearly'

export default function page() {
  const [activeTab, setActiveTab] = useState('monthly')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  const tabs = [
    {
      id: 'monthly',
      label: 'Monthly',
      content: <CardPricingMonthly />,
    },
    {
      id: 'yearly',
      label: 'Yearly (30% Off)',
      content: <CardPricingYearly />,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-5 lg:px-0">
        <section className="w-full md:w-[900px] flex flex-col justify-center items-center container mx-auto mt-20">
          <h4 className="text-base font-semibold">Integrations</h4>
          <h1 className="text-[33px] md:text-[63px] font-semibold text-center">
            Get Pro Access
          </h1>
          <p className="w-full md:w-[625px] text-base md:text-xl font-normal text-center">
            All good things starts with a website. Get inspired without breaking
            your wallet with premium Framer templates.
          </p>
        </section>

        <section>
          <div className="flex flex-col items-center justify-center mb-4 border-gray-200 dark:border-gray-700 my-12">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center bg-gray-200 p-1 rounded-full"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              {tabs.map((tab) => (
                <li key={tab.id} className="me-2" role="presentation">
                  <button
                    className={`inline-block py-2 px-4 rounded-full text-base font-semibold ${
                      activeTab === tab.id
                        ? 'bg-white text-black'
                        : 'text-gray-400'
                    }`}
                    id={`${tab.id}-tab`}
                    data-tabs-target={`#${tab.id}`}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            <div id="default-tab-content">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`mt-4 ${
                    activeTab === tab.id ? '' : 'hidden'
                  } p-4 rounded-lg bg-gray-50 dark:bg-white`}
                  id={tab.id}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Faq />
      <Footer />
    </>
  )
}
