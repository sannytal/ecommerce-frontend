import React from 'react';
import { Store } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Store size={24} />
            <span className="text-lg font-bold">E-Store</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2024 E-Store. Built with React & FakeStore API
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
