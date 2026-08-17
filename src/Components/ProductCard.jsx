import React from 'react'
import {useNavigate} from 'react-router-dom'
import {IoCartOutline} from "react-icons/io5"
import { useCart } from '../context/CartContext'

const ProductCard = ({product}) => {

  const navigate=useNavigate()
  const {addToCart, cartItem}=useCart()

  return (
    <div className='group relative flex flex-col cursor-pointer transition-all h-full bg-white'>
        <div className='relative aspect-[3/4] overflow-hidden bg-white mb-4 flex items-center justify-center p-4 group-hover:bg-gray-50 transition-colors'>
            <img 
              onClick={()=>navigate(`/products/${product.id}`)} 
              src={product.image} 
              alt={product.title} 
              className='object-contain w-full h-full mix-blend-multiply transition-transform duration-500 group-hover:scale-105'
            />
            
            <button 
              onClick={(e)=>{
                e.stopPropagation();
                addToCart(product);
              }}
              className='absolute bottom-0 left-0 w-full bg-black text-white py-3 text-xs tracking-widest uppercase font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center items-center gap-2'
            >
              <IoCartOutline className='w-4 h-4'/> Add to Cart
            </button>
        </div>
        
        <div className='px-1 flex flex-col flex-grow' onClick={()=>navigate(`/products/${product.id}`)}>
          <h1 className='text-sm text-gray-900 line-clamp-1 mb-1 font-medium'>{product.title}</h1>
          <p className='text-sm text-gray-500 font-medium mt-auto'>${product.price.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default ProductCard
