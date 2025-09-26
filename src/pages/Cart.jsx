import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal, 
    getCartItemsCount 
  } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleQuantityChange = (productId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    // In a real app, this would redirect to payment processing
    alert('Checkout functionality would be implemented here!');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center space-x-2">
          <ArrowLeft size={20} />
          <span>Continue Shopping</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-1">
            {getCartItemsCount()} {getCartItemsCount() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
        <Link
          to="/"
          className="btn-secondary inline-flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Cart Items</h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full sm:w-24 h-32 sm:h-24 object-contain rounded-lg hover:opacity-75 transition-opacity"
                        />
                      </Link>
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div className="flex-grow">
                          <Link
                            to={`/product/${item.id}`}
                            className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                          >
                            {item.title}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1 capitalize">
                            {item.category}
                          </p>
                          <p className="text-lg font-bold text-primary-600 mt-2">
                            {formatPrice(item.price)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between sm:justify-end sm:flex-col sm:items-end space-y-2 mt-4 sm:mt-0">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                              className="p-1 rounded-lg border border-gray-300 hover:bg-gray-50"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="text-lg font-semibold min-w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                              className="p-1 rounded-lg border border-gray-300 hover:bg-gray-50"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700 p-1"
                            title="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            {item.quantity} × {formatPrice(item.price)}
                          </span>
                          <span className="text-lg font-bold text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md sticky top-24">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">{formatPrice(getCartTotal() * 0.08)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-primary-600">
                      {formatPrice(getCartTotal() * 1.08)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full btn-primary py-3 text-lg font-semibold"
              >
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Free shipping on orders over $50
                </p>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Secure Checkout</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• SSL encrypted payment</li>
              <li>• 30-day return policy</li>
              <li>• Money-back guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
