'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cta from '../components/Cta'

const tabs = [
  'Terms & Conditions',
  'Privacy Policy',
  'Cookie Policy',
  'License',
]

const tabInfo = [
  {
    id: 'Terms & Conditions',
    title: 'Terms & Conditions',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem saepe omnis ab quisquam commodi officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem saepe omnis ab quisquam commodi officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem saepe omnis ab quisquam commodi officiis.',
    data: [
      {
        number: 1,
        header: 'Definitions',
        description:
          'Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.',
      },
      {
        number: 2,
        header: 'Usage & Rights',
        description:
          'Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.',
      },
      {
        number: 3,
        header: 'Ownership',
        description:
          'Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.',
      },
    ],
  },
  {
    id: 'Privacy Policy',
    title: 'Privacy Policy',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra vitae congue eu consequat ac felis. Aliquet eget sit amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui. Velit laoreet id donec ultrices tincidunt arcu non. Eget magna fermentum iaculis eu non diam. Tristique senectus et netus et malesuada fames ac turpis. Egestas dui id ornare arcu. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Donec ultrices tincidunt arcu non sodales neque sodales. Laoreet sit amet cursus sit amet dictum sit. Morbi tristique senectus et netus et. Aliquet bibendum enim facilisis gravida. Aliquet lectus proin nibh nisl condimentum id venenatis. Ac felis donec et odio pellentesque diam volutpat. Nam aliquam sem et tortor consequat id. Adipiscing elit duis tristique sollicitudin nibh. Elit ut aliquam purus sit amet luctus. Fames ac turpis egestas maecenas pharetra convallis posuere.',
  },
  {
    id: 'Cookie Policy',
    title: 'Cookie Policy',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra vitae congue eu consequat ac felis. Aliquet eget sit amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui. Velit laoreet id donec ultrices tincidunt arcu non. Eget magna fermentum iaculis eu non diam. Tristique senectus et netus et malesuada fames ac turpis. Egestas dui id ornare arcu. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Donec ultrices tincidunt arcu non sodales neque sodales. Laoreet sit amet cursus sit amet dictum sit. Morbi tristique senectus et netus et. Aliquet bibendum enim facilisis gravida. Aliquet lectus proin nibh nisl condimentum id venenatis. Ac felis donec et odio pellentesque diam volutpat. Nam aliquam sem et tortor consequat id. Adipiscing elit duis tristique sollicitudin nibh. Elit ut aliquam purus sit amet luctus. Fames ac turpis egestas maecenas pharetra convallis posuere. Sapien faucibus et molestie ac. Est placerat in egestas erat imperdiet sed. Ut placerat orci nulla pellentesque dignissim enim. Purus gravida quis blandit turpis cursus in. Sit amet purus gravida quis blandit turpis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Porta lorem mollis aliquam ut. Morbi tristique senectus et netus et malesuada fames ac turpis. Risus at ultrices mi tempus imperdiet. Condimentum lacinia quis vel eros donec ac odio. Aliquam purus sit amet luctus venenatis lectus magna fringilla.',
  },
  {
    id: 'License',
    title: 'License',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra vitae congue eu consequat ac felis. Aliquet eget sit amet tellus cras adipiscing enim eu. Cras adipiscing enim eu turpis. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Non blandit massa enim nec dui. Velit laoreet id donec ultrices tincidunt arcu non. Eget magna fermentum iaculis eu non diam. Tristique senectus et netus et malesuada fames ac turpis. Egestas dui id ornare arcu. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Donec ultrices tincidunt arcu non sodales neque sodales. Laoreet sit amet cursus sit amet dictum sit. Morbi tristique senectus et netus et. Aliquet bibendum enim facilisis gravida. Aliquet lectus proin nibh nisl condimentum id venenatis. Ac felis donec et odio pellentesque diam volutpat. Nam aliquam sem et tortor consequat id. Adipiscing elit duis tristique sollicitudin nibh. Elit ut aliquam purus sit amet luctus. Fames ac turpis egestas maecenas pharetra convallis posuere. Sapien faucibus et molestie ac. Est placerat in egestas erat imperdiet sed. Ut placerat orci nulla pellentesque dignissim enim. Purus gravida quis blandit turpis cursus in. Sit amet purus gravida quis blandit turpis. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Porta lorem mollis aliquam ut. Morbi tristique senectus et netus et malesuada fames ac turpis. Risus at ultrices mi tempus imperdiet. Condimentum lacinia quis vel eros donec ac odio. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Pharetra massa massa ultricies mi. Eget arcu dictum varius duis at consectetur lorem. Ullamcorper malesuada proin libero nunc. Sed tempus urna et pharetra pharetra massa massa ultricies. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. In arcu cursus euismod quis viverra nibh. Mauris nunc congue nisi vitae suscipit tellus mauris a. Et malesuada fames ac turpis egestas maecenas pharetra. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Morbi tristique senectus et netus et malesuada. Risus sed vulputate odio ut enim blandit volutpat maecenas. Nisl tincidunt eget nullam non nisi est sit amet. Egestas congue quisque egestas diam in arcu cursus. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Ut ornare lectus sit amet est placerat in egestas erat. Accumsan sit amet nulla facilisi morbi tempus. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Eu consequat ac felis donec et odio pellentesque diam volutpat. Id aliquet lectus proin nibh nisl condimentum id venenatis. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Sem viverra aliquet eget sit amet tellus. Et tortor consequat id porta nibh venenatis. Ac tortor vitae purus faucibus. Aliquet nec ullamcorper sit amet risus nullam. Morbi leo urna molestie at elementum eu facilisis sed odio. Lorem dolor sed viverra ipsum nunc. Nisl purus in mollis nunc sed id. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Vulputate mi sit amet mauris. Interdum consectetur libero id faucibus nisl',
  },
]

export default function page() {
  const [activeTab, setActiveTab] = useState('Terms & Conditions')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <Navbar />
      <main>
        {' '}
        <div className="container md:max-w-5xl mx-auto mt-8 flex flex-col md:flex-row space-x-0 md:space-x-20 px-5 lg:px-0">
          {/* Tab menu */}
          <div className="flex">
            <ul className="flex flex-col">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`p-0 md:p-3 rounded-lg cursor-pointer text-base font-semibold pb-2 ${
                    activeTab === tab ? 'underline' : 'text-[#8D97AC]'
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          {/* Tab content */}
          <div className="rounded-lg">
            {tabInfo.map((tab) => (
              <div
                key={tab.id}
                id={tab.id}
                className={`${activeTab === tab.id ? '' : 'hidden'}`}
              >
                <h3 className="text-2xl md:text-[63px] font-semibold">
                  {tab.title}
                </h3>
                <span className="flex items-center space-x-3 mt-4 mb-8 border-b pb-6">
                  <p className="border-[1px] border-[#5F6980] rounded-full px-3 py-1 text-sm font-semibold text-[#5F6980]">
                    V.1.3
                  </p>
                  <p className="text-[#5F6980] text-sm font-normal">
                    May 24, 2024
                  </p>
                </span>
                <p className="text-sm md:text-lg font-normal text-[#5F6980] mb-[72px]">
                  {tab.content}
                </p>

                {tab.data && (
                  <div>
                    {tab.data.map((item) => (
                      <div key={item.number}>
                        <span className="flex space-x-2 text-sm md:text-[28px] font-semibold mb-6">
                          {' '}
                          <p>{item.number}.</p>
                          <h4>{item.header}</h4>
                        </span>

                        <p className="w-full text-sm md:text-lg font-normal text-[#5F6980] mb-[72px] leading-snug">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Cta />
      <Footer />
    </>
  )
}
