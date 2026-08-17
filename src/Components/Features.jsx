import React from 'react'
import {Truck, ShieldCheck, RefreshCcw, Headphones} from 'lucide-react'

const features=[
    {icon:Truck, text:'Complimentary Shipping', subtext:'On all orders over $150'},
    {icon:ShieldCheck, text:'Secure Checkout', subtext:'Encrypted & protected payments'},
    {icon:RefreshCcw, text:'Effortless Returns', subtext:'30-day return policy'},
    {icon:Headphones, text:'Dedicated Support', subtext:'Available 24/7 for you'},
]

const Features = () => {
  return (
    <div className='bg-white py-16 px-4 lg:px-8 font-sans border-y border-gray-100'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12'>
                {
                features.map((feature, index)=>{
                    return <div key={index} className='flex flex-col items-center text-center group'>
                        <div className='mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500'>
                            <feature.icon className='h-6 w-6 stroke-[1.5]' aria-hidden="true" />
                        </div>
                        <div>
                            <p className='text-xs font-bold uppercase tracking-widest text-black mb-2'>{feature.text}</p>
                            <p className='text-sm text-gray-500 font-medium'>{feature.subtext}</p>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Features
