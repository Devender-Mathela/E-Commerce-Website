import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-16 border-t border-gray-900 mt-20'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12'>
        {/* info */}
        <div className='space-y-4'>
            <Link to='/'>
              <h1 className='text-2xl font-bold tracking-widest uppercase'>Zaptro</h1>
            </Link>
            <p className='text-xs text-gray-400 leading-relaxed max-w-xs'>Defining modern aesthetics with premium, curated fashion essentials designed for everyday elegance.</p>
        </div>
        
        {/* links */}
        <div className='space-y-4'>
            <h3 className='text-sm font-semibold uppercase tracking-wider'>Shop</h3>
            <div className='flex flex-col space-y-2 text-xs text-gray-400'>
              <Link to='/products' className='hover:text-white transition-colors'>All Products</Link>
              <Link to='/products' className='hover:text-white transition-colors'>New Arrivals</Link>
              <Link to='/products' className='hover:text-white transition-colors'>Essentials</Link>
            </div>
        </div>

        {/* Support */}
        <div className='space-y-4'>
            <h3 className='text-sm font-semibold uppercase tracking-wider'>Support</h3>
            <div className='flex flex-col space-y-2 text-xs text-gray-400'>
              <Link to='/contact' className='hover:text-white transition-colors'>Contact Us</Link>
              <Link to='/about' className='hover:text-white transition-colors'>About Us</Link>
              <span className='cursor-pointer hover:text-white transition-colors'>FAQ</span>
            </div>
        </div>

        {/* newsletter */}
        <div className='space-y-4'>
          <h3 className='text-sm font-semibold uppercase tracking-wider'>Newsletter</h3>
          <p className='text-xs text-gray-400'>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form action="" className='mt-4 flex flex-col space-y-2'>
              <input
                type='email'
                placeholder='ENTER YOUR EMAIL'
                className='w-full p-3 bg-transparent border border-gray-700 text-xs text-white focus:outline-none focus:border-white transition-colors' 
              />
              <button
                type='submit'
                className='w-full bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-3 hover:bg-gray-200 transition-colors'  
              >
                Subscribe
              </button>
          </form>
          <div className='flex space-x-6 pt-4 text-gray-400'>
              <a href="#" className='hover:text-white transition-colors'><FaInstagram size={18} /></a>
              <a href="#" className='hover:text-white transition-colors'><FaFacebook size={18} /></a>
              <a href="#" className='hover:text-white transition-colors'><FaTwitter size={18} /></a>
              <a href="#" className='hover:text-white transition-colors'><FaPinterest size={18} /></a>
          </div>
        </div>
      </div>
      
      {/* bottom section */}
      <div className='max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-gray-900 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center'>
        <p>&copy; {new Date().getFullYear()} ZAPTRO. ALL RIGHTS RESERVED.</p>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <span className='hover:text-white cursor-pointer transition-colors'>Privacy Policy</span>
          <span className='hover:text-white cursor-pointer transition-colors'>Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
