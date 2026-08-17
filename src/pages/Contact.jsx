import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-white flex items-center justify-center px-4 py-16 font-sans'>
      <div className='w-full max-w-5xl'>
        <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4'>Contact Us</h2>
            <p className='text-gray-500 font-medium'>We're here to assist you with your orders and inquiries.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          <div className='space-y-10'>
            <div>
              <h3 className='text-sm font-bold uppercase tracking-widest text-black mb-4'>Client Services</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Our client services team is available to help you with size and fit advice, delivery, exchange and return queries, placing your order, and aftercare assistance.
              </p>
            </div>
            <div className='space-y-4 text-sm text-gray-800'>
              <p className='flex flex-col'>
                <strong className='uppercase tracking-widest text-xs mb-1'>Studio</strong>
                123 Fashion Avenue, New York, NY 10012
              </p>
              <p className='flex flex-col'>
                <strong className='uppercase tracking-widest text-xs mb-1'>Email</strong>
                inquiries@zaptro.com
              </p>
              <p className='flex flex-col'>
                <strong className='uppercase tracking-widest text-xs mb-1'>Phone</strong>
                +1 (800) 123-4567
              </p>
            </div>
          </div>
          
          <form className='space-y-6'>
            <div>
              <label className='block text-xs font-bold uppercase tracking-widest text-black mb-2'>Name</label>
              <input type='text' className='w-full px-4 py-3 bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-black transition-colors' />
            </div>
            <div>
              <label className='block text-xs font-bold uppercase tracking-widest text-black mb-2'>Email</label>
              <input type='email' className='w-full px-4 py-3 bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-black transition-colors'/>
            </div>
            <div>
              <label className='block text-xs font-bold uppercase tracking-widest text-black mb-2'>Message</label>
              <textarea rows="4" className='w-full px-4 py-3 bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-black transition-colors'></textarea>
            </div>
            <button type='submit' className='w-full bg-black text-white font-bold text-sm tracking-widest uppercase py-4 hover:bg-gray-800 transition-colors'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

