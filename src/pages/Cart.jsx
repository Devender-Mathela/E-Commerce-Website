import React from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {cartItem.length > 0 ? (
          <div>
            <h1 className="font-bold text-3xl tracking-tighter uppercase mb-12">Shopping Bag ({cartItem.length})</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Cart Items List */}
              <div className="lg:col-span-2 space-y-8">
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-3 text-right">Total</div>
                </div>

                {cartItem.map((item, index) => {
                  return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-6 border-b border-gray-100">
                      <div className="col-span-6 flex gap-6">
                        <div className="w-24 h-32 bg-gray-50 flex-shrink-0 flex items-center justify-center p-2">
                            <img src={item.image || item.img} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex flex-col justify-between py-1">
                          <div>
                            <h2 className="text-sm font-bold text-gray-900 line-clamp-2 leading-snug">{item.title}</h2>
                            <p className="text-xs text-gray-500 mt-2">${item.price.toFixed(2)}</p>
                          </div>
                          <button 
                            onClick={() => deleteItem(item.id)}
                            className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors text-left flex items-center gap-1 mt-4"
                          >
                            <FaRegTrashAlt /> Remove
                          </button>
                        </div>
                      </div>

                      <div className="col-span-3 flex justify-center items-center mt-4 md:mt-0">
                        <div className="flex items-center border border-gray-200">
                          <button 
                            onClick={() => updateQuantity(cartItem, item.id, 'decrease')}
                            className="px-4 py-2 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
                          >-</button>
                          <span className="px-4 py-2 text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(cartItem, item.id, 'increase')}
                            className="px-4 py-2 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
                          >+</button>
                        </div>
                      </div>

                      <div className="col-span-3 text-right mt-4 md:mt-0">
                        <p className="text-sm font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Summary & Delivery */}
              <div className="space-y-8">
                {/* Order Summary */}
                <div className="bg-gray-50 p-8">
                  <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-200 pb-4 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 text-sm mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Standard Delivery</span>
                      <span className="font-medium uppercase text-xs">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Handling</span>
                      <span className="font-medium">$5.00</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between border-t border-gray-200 pt-6 mb-8">
                    <span className="font-bold uppercase tracking-widest text-sm">Total</span>
                    <span className="font-bold text-lg">${(totalPrice + 5).toFixed(2)}</span>
                  </div>
                  
                  <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                    Proceed to Checkout
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="border border-gray-200 p-8">
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-6">Shipping Details</h2>
                  <div className="space-y-4 text-sm">
                    <div>
                      <input type="text" value={user?.fullName || ""} placeholder="Full Name" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400" />
                    </div>
                    <div>
                      <input type="text" value={location?.locality || ""} placeholder="Address" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" value={location?.principalSubdivision || ""} placeholder="State" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400" />
                      <input type="text" value={location?.postcode || ""} placeholder="Postcode" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" value={location?.countryName || ""} placeholder="Country" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400" />
                      <input type="text" placeholder="Phone" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400" />
                    </div>
                    
                    <div className="pt-4 flex flex-col items-center">
                      <span className="text-xs text-gray-400 uppercase tracking-widest mb-4">Or Use Location</span>
                      <button onClick={getLocation} className="w-full border border-black text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">
                        Detect Location
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[50vh] space-y-8">
            <h1 className="text-3xl font-bold tracking-tighter uppercase text-center">Your Bag is Empty</h1>
            <p className="text-gray-500 text-sm">Discover our latest arrivals and timeless essentials.</p>
            <button 
              onClick={() => navigate('/products')} 
              className="bg-black text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
            >
              Shop the Collection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
