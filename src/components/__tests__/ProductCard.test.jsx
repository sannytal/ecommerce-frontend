import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { CartProvider } from '../../context/CartContext';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  description: 'This is a test product description',
  price: 29.99,
  image: 'https://example.com/image.jpg',
  category: 'electronics',
  rating: {
    rate: 4.5,
    count: 100
  }
};

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <CartProvider>
        {component}
      </CartProvider>
    </BrowserRouter>
  );
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/This is a test product/)).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('renders product image with correct alt text', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    
    const image = screen.getByAltText('Test Product');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('has a link to product details page', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/1');
  });

  it('renders add to cart button', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    
    const addToCartButton = screen.getByText('Add to Cart');
    expect(addToCartButton).toBeInTheDocument();
  });

  it('renders in list view mode correctly', () => {
    renderWithProviders(<ProductCard product={mockProduct} viewMode="list" />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });

  it('truncates long product titles', () => {
    const longTitleProduct = {
      ...mockProduct,
      title: 'This is a very long product title that should be truncated when displayed in the card'
    };
    
    renderWithProviders(<ProductCard product={longTitleProduct} />);
    
    const titleElement = screen.getByText(/This is a very long product title/);
    expect(titleElement.textContent).toContain('...');
  });
});
