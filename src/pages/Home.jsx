import React from 'react'
import Carousel from '../Components/Carousel'
import MidBanner from '../Components/MidBanner'
import Features from '../Components/Features'

function Home() {
  return (
    <div className='w-full'>
      <Carousel />
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        <Features />
      </div>
      <MidBanner/>
    </div>
  )
}

export default Home
