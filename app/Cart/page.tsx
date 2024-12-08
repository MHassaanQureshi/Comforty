"use client";

import React from "react";
import { useCart } from "../context/cartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
    <div className="w-full flex flex-col px-4 mt-10 md:flex-row md:justify-evenly">
      
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="w-[80%] flex flex-col gap-4 md:w-[40%]">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">Price: ${item.price}</p>
                <p>Ashen Slate/Cobalt Bliss</p>
                <span className="flex gap-2">
                  <p>Size: L</p>
                  <p>Quantity: 1</p>
                </span>
                <p className="text-yellow-500">⭐ {item.review} Reviews</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-[#007580] text-white px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        
      )}
      <div className=" flex flex-col gap-10 pb-10">
        <h1 className="font-bold text-2xl">summary</h1>
        <span className="flex gap-10">
          <p>Sub total:</p>
          <p>price</p>
        </span>
        <span className="flex gap-10">
          <p>Estimated Delivery & Handling:</p>
          <p>Free</p>
        </span>
        <span className="flex gap-10">
          <p>Total:</p>
          <p>Price</p>
        </span>
        <button className="bg-[#007580] p-2 rounded-xl text-white">Member CheckOut</button>
    </div>
  </div>
  </>
  );
}
