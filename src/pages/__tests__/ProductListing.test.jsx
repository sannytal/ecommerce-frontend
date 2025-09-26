import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductListing from '../ProductListing';
import { CartProvider } from '../../context/CartContext';

// Mock the API module
vi.mock('../../services/api', () => ({
  productsAPI: {
    getAllProducts: vi.fn().mockResolvedValue([]),
    getCategories: vi.fn().mockResolvedValue([]),
  }
}));

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <CartProvider>
        {component}
      </CartProvider>
    </BrowserRouter>
  );
};

describe('ProductListing', () => {
  it('renders loading state initially', () => {
    renderWithProviders(<ProductListing />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders page content after loading', async () => {
    renderWithProviders(<ProductListing />);
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.getByText('Products')).toBeInTheDocument();
    });
    
    expect(screen.getByText('Discover amazing products at great prices')).toBeInTheDocument();
  });

  it('renders search input after loading', async () => {
    renderWithProviders(<ProductListing />);
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search products by name or description...')).toBeInTheDocument();
    });
  });

  it('renders filter controls after loading', async () => {
    renderWithProviders(<ProductListing />);
    
    await waitFor(() => {
      expect(screen.getByDisplayValue('All Categories')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Sort by Name')).toBeInTheDocument();
    });
  });

  it('shows no products message when no data', async () => {
    renderWithProviders(<ProductListing />);
    
    await waitFor(() => {
      expect(screen.getByText('No products found')).toBeInTheDocument();
    });
  });
});
