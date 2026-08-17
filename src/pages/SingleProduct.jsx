import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import loading from "../assets/Loading4.webm";
import Breadcrums from "../Components/Breadcrums";
import { useCart } from "../context/CartContext";
import { FaChevronLeft } from "react-icons/fa6";

const SingleProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [SingleProduct, setSingleProduct] = useState(null);

  const {addToCart}=useCart()

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const product = res.data;
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [params.id]);

  return (
    <>
      {SingleProduct ? 
        <div className="min-h-screen bg-white pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
              <button 
                onClick={() => navigate('/products')}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-10"
              >
                <FaChevronLeft /> Back to Shop
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
               {/* Product Image */}
                <div className="md:col-span-6 lg:col-span-7 bg-gray-50 flex items-center justify-center p-10 min-h-[500px]">
                  <img 
                    src={SingleProduct.image} 
                    alt={SingleProduct.title} 
                    className="w-full max-w-md mix-blend-multiply object-contain"
                  />
                </div>
                
                {/* Product Details */}
                <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        {SingleProduct.category}
                      </h3>
                      <h1 className="text-3xl font-bold tracking-tighter leading-tight text-gray-900 mb-4">
                        {SingleProduct.title}
                      </h1>
                      <p className="text-2xl font-medium text-gray-900">
                        ${SingleProduct.price.toFixed(2)}
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {SingleProduct.description}
                      </p>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => addToCart(SingleProduct)}
                        className="w-full bg-black text-white py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
                      >
                        Add to Bag
                      </button>
                    </div>
                    
                    <div className="pt-8 flex flex-col gap-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> 
                        In Stock & Ready to Ship
                      </p>
                      <p>Free Standard Shipping</p>
                      <p>Complimentary Returns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      : 
        <div className="flex items-center justify-center h-screen bg-white">
          <video muted autoPlay loop className="w-24 opacity-50">
            <source src={loading} type="video/webm" />
          </video>
        </div>
      }
    </>
  );
};

export default SingleProduct;
