import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-20 font-sans'>
      <div className='max-w-4xl mx-auto space-y-16'>
        
        <div className='text-center space-y-6'>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tighter uppercase'>The Zaptro Aesthetic</h1>
          <p className='text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto'>
            Curated essentials for the modern wardrobe. We believe in the power of minimalist design, premium materials, and timeless silhouettes.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100'>
          <div className='space-y-4'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-black'>Our Philosophy</h2>
            <p className='text-gray-600 leading-relaxed text-sm'>
              At Zaptro, our mission is to redefine everyday luxury. We are passionate about creating clothing that feels as good as it looks, stripping away the unnecessary to focus on what truly matters: fit, fabric, and form.
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-black'>The Standard</h2>
            <ul className='text-gray-600 space-y-2 text-sm list-none'>
              <li className='flex items-center gap-2'><span className='w-1 h-1 bg-black rounded-full'></span> Uncompromising fabric quality</li>
              <li className='flex items-center gap-2'><span className='w-1 h-1 bg-black rounded-full'></span> Ethical and sustainable sourcing</li>
              <li className='flex items-center gap-2'><span className='w-1 h-1 bg-black rounded-full'></span> Minimalist, timeless designs</li>
              <li className='flex items-center gap-2'><span className='w-1 h-1 bg-black rounded-full'></span> Exceptional craftsmanship</li>
            </ul>
          </div>
        </div>

        <div className='space-y-6 text-center pt-12 border-t border-gray-100'>
          <h2 className='text-sm font-bold uppercase tracking-widest text-black'>Our Vision</h2>
          <p className='text-gray-600 leading-relaxed text-sm max-w-2xl mx-auto'>
             We envision a world where fashion transcends fleeting trends. A wardrobe should be a collection of reliable, elegant pieces that empower you to express your authentic self with confidence.
          </p>
        </div>

        <div className='text-center pt-16'>
          <Link to={'/products'}>
            <button className='bg-black text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors'>
              Explore the Collection
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
