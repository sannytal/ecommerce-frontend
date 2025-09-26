import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const location = useLocation();
  const cartItemsCount = getCartItemsCount();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
            <Store size={28} />
            <span className="text-xl font-bold">E-Store</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive('/') || isActive('/products')
                  ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Products
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className={`relative p-2 rounded-lg transition-colors duration-200 ${
              isActive('/cart')
                ? 'bg-primary-100 text-primary-600'
                : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600'
            }`}
          >
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {cartItemsCount > 99 ? '99+' : cartItemsCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4">
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive('/') || isActive('/products')
                  ? 'text-primary-600'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Products
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
