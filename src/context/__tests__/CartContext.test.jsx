import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from '../CartContext';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  image: 'https://example.com/image.jpg',
  category: 'electronics'
};

const TestComponent = () => {
  const { 
    items, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal, 
    getCartItemsCount 
  } = useCart();

  return (
    <div>
      <div data-testid="cart-items-count">{getCartItemsCount()}</div>
      <div data-testid="cart-total">{getCartTotal()}</div>
      <div data-testid="cart-items">
        {items.map(item => (
          <div key={item.id} data-testid={`item-${item.id}`}>
            {item.title} - Quantity: {item.quantity}
          </div>
        ))}
      </div>
      <button onClick={() => addToCart(mockProduct)}>Add to Cart</button>
      <button onClick={() => removeFromCart(1)}>Remove from Cart</button>
      <button onClick={() => updateQuantity(1, 3)}>Update Quantity</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

const renderWithProvider = () => {
  return render(
    <CartProvider>
      <TestComponent />
    </CartProvider>
  );
};

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock;

describe('CartContext', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  it('starts with empty cart', () => {
    renderWithProvider();
    
    expect(screen.getByTestId('cart-items-count')).toHaveTextContent('0');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('0');
  });

  it('adds product to cart', () => {
    renderWithProvider();
    
    fireEvent.click(screen.getByText('Add to Cart'));
    
    expect(screen.getByTestId('cart-items-count')).toHaveTextContent('1');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('29.99');
    expect(screen.getByTestId('item-1')).toHaveTextContent('Test Product - Quantity: 1');
  });

  it('increases quantity when adding same product', () => {
    renderWithProvider();
    
    fireEvent.click(screen.getByText('Add to Cart'));
    fireEvent.click(screen.getByText('Add to Cart'));
    
    expect(screen.getByTestId('cart-items-count')).toHaveTextContent('2');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('59.98');
    expect(screen.getByTestId('item-1')).toHaveTextContent('Test Product - Quantity: 2');
  });

  it('removes product from cart', () => {
    renderWithProvider();
    
    fireEvent.click(screen.getByText('Add to Cart'));
    fireEvent.click(screen.getByText('Remove from Cart'));
    
    expect(screen.getByTestId('cart-items-count')).toHaveTextContent('0');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('0');
  });

  it('updates product quantity', () => {
    renderWithProvider();
    
    fireEvent.click(screen.getByText('Add to Cart'));
    fireEvent.click(screen.getByText('Update Quantity'));
    
    expect(screen.getByTestId('cart-items-count')).toHaveTextContent('3');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('89.97');
    expect(screen.getByTestId('item-1')).toHaveTextContent('Test Product - Quantity: 3');
  });

  it('clears entire cart', () => {
    renderWithProvider();
    
    fireEvent.click(screen.getByText('Add to Cart'));
    fireEvent.click(screen.getByText('Clear Cart'));
    
    expect(screen.getByTestId('cart-items-count')).toHaveTextContent('0');
    expect(screen.getByTestId('cart-total')).toHaveTextContent('0');
  });

  it('saves cart to localStorage', () => {
    renderWithProvider();
    
    fireEvent.click(screen.getByText('Add to Cart'));
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'cart',
      JSON.stringify([{ ...mockProduct, quantity: 1 }])
    );
  });
});
