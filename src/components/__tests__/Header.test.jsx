import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import { CartProvider } from '../../context/CartContext';

const renderWithProviders = (component, initialPath = '/') => {
  return render(
    <BrowserRouter>
      <CartProvider>
        {component}
      </CartProvider>
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renders logo and brand name', () => {
    renderWithProviders(<Header />);
    
    expect(screen.getByText('E-Store')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /E-Store/ })).toHaveAttribute('href', '/');
  });

  it('renders navigation links', () => {
    renderWithProviders(<Header />);
    
    const productsLinks = screen.getAllByText('Products');
    expect(productsLinks.length).toBeGreaterThan(0);
    
    const productLinkElements = screen.getAllByRole('link', { name: 'Products' });
    expect(productLinkElements[0]).toHaveAttribute('href', '/');
  });

  it('renders cart icon', () => {
    renderWithProviders(<Header />);
    
    const cartLink = screen.getByRole('link', { name: '' });
    expect(cartLink).toHaveAttribute('href', '/cart');
  });

  it('shows cart link', () => {
    renderWithProviders(<Header />);
    
    // Find the cart link by href attribute
    const cartLinks = screen.getAllByRole('link');
    const cartLink = cartLinks.find(link => link.getAttribute('href') === '/cart');
    expect(cartLink).toBeInTheDocument();
  });

  it('applies active styles to current page', () => {
    renderWithProviders(<Header />);
    
    // The Products link should have active styling on the home page
    const productsLinks = screen.getAllByText('Products');
    expect(productsLinks[0]).toHaveClass('text-primary-600');
  });

  it('renders mobile navigation', () => {
    renderWithProviders(<Header />);
    
    // Mobile navigation should be present but hidden on desktop
    const mobileNav = screen.getAllByText('Products');
    expect(mobileNav.length).toBeGreaterThan(1); // One for desktop, one for mobile
  });
});
