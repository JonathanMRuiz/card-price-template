import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'
const card = ({
  name = '',
  price = 0,
  currency = '$',
  frequency = 'month',
  features = [],
  featured = false
}) => {
  return (
    <div className="h-full flex justify-center items-center px-6 py-12 lg:justify-center lg:items-center">
      <div
        className={`cursor-pointer shadow-xl rounded-md bg-white text-black border-indigo-600 ${featured ? 'border-2 relative' : 'border border-opacity-10'
          }`}
      >

        {
          featured ? (
            <span className="bg-indigo-600 text-white px-6 py-1 rounded-full uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Most Popular</span>
          ) : null}

        <div className="px-6 py-12 border-b-2 border-gray-200">
          <p className="text-3xl font-semibold text-center mb-4">{name}</p>
          <div className="flex justify-center items-center">
            <div className="flex items-start">
              <p className="text-4xl font-medium">{currency}</p>
              <p className="text-7xl font-bold">{price}</p>
            </div>
            <p className="text-2xl text-gray-400">{frequency}</p>
          </div>
        </div>
        <div className="p-12 bg-gray-100">
          <ul className="space-y-3">

            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-4">
                <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-lg text-gray-600">{feature}</p>
              </li>
            ))}
          </ul>
          <button className={`mt-12 w-full py-4 px-8 rounded-lg text-lg 
            whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-100 
            focus:outline-none focus:ring-4 focus:ring-indigo-600 
            focus:opacity-50 transition-all ${
              featured ? "bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105 transform" : "bg-white text-indigo-600 hover:bg-gray-50"
            }`}
            
            >
            Start your free trial
          </button>
        </div>
      </div>
    </div>
  )
}

export default card