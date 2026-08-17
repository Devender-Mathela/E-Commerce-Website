import React from 'react'

const MidBanner = () => {
  return (
    <div className='bg-white py-16 md:py-24 font-sans'>
        <div className='relative max-w-7xl mx-auto md:rounded-sm bg-cover bg-center h-[550px] md:h-[600px] overflow-hidden' 
        style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop)`, 
            backgroundPosition:'center 30%', 
            backgroundAttachment:'fixed'
        }}>
            <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                <div className='text-center text-white px-4 flex flex-col items-center space-y-6'>
                    <h3 className='text-xs font-bold uppercase tracking-widest'>The Summer Edit</h3>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none max-w-3xl'>
                        ELEVATED ESSENTIALS
                    </h1>
                    <p className='text-sm md:text-base font-medium max-w-xl text-gray-200'>
                        Discover the latest collection of timeless pieces designed for the modern wardrobe. Effortless style, uncompromising quality.
                    </p>
                    <button className='bg-white text-black font-bold uppercase tracking-widest text-xs py-4 px-10 hover:bg-gray-200 transition-colors mt-4'>
                        Shop the Edit
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MidBanner
