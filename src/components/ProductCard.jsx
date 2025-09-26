import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  if (viewMode === 'list') {
    return (
      <Link to={`/product/${product.id}`} className="block">
        <div className="card p-4 hover:shadow-lg transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-full sm:w-32 h-48 sm:h-32 object-contain rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {truncateText(product.title, 60)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {truncateText(product.description, 120)}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-primary-600">
                      {formatPrice(product.price)}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating.rate} ({product.rating.count})
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="btn-primary flex items-center space-x-2 mt-4 sm:mt-0"
                >
                  <ShoppingCart size={16} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="card overflow-hidden group-hover:shadow-lg transition-shadow duration-200">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {truncateText(product.title, 50)}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {truncateText(product.description, 80)}
          </p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xl font-bold text-primary-600">
              {formatPrice(product.price)}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">
                {product.rating.rate}
              </span>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
