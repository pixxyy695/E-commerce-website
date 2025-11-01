import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-10 m-auto mb-4" alt="Exchange Icon" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">Hassle-free returns within 30 days of purchase.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-10 m-auto mb-4" alt="Quality Icon" />
        <p className="font-semibold">7 days Return Policy</p>
        <p className="text-gray-400">We provide Easy Returns within 7 days of purchase.</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-10 m-auto mb-4" alt="Support Icon" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">24/7 assistance for all your queries.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
