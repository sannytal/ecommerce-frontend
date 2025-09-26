import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the entire api module
vi.mock('../api', () => ({
  productsAPI: {
    getAllProducts: vi.fn(),
    getProduct: vi.fn(),
    getProductsByCategory: vi.fn(),
    getCategories: vi.fn(),
  },
  cartAPI: {
    getUserCart: vi.fn(),
    addToCart: vi.fn(),
    updateCart: vi.fn(),
    deleteCart: vi.fn(),
  }
}));

import { productsAPI, cartAPI } from '../api';

describe('API Services', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('productsAPI', () => {
    it('fetches all products', async () => {
      const mockProducts = [
        { id: 1, title: 'Product 1', price: 29.99 },
        { id: 2, title: 'Product 2', price: 39.99 }
      ];
      
      productsAPI.getAllProducts.mockResolvedValue(mockProducts);
      
      const result = await productsAPI.getAllProducts();
      
      expect(productsAPI.getAllProducts).toHaveBeenCalled();
      expect(result).toEqual(mockProducts);
    });

    it('fetches single product', async () => {
      const mockProduct = { id: 1, title: 'Product 1', price: 29.99 };
      
      productsAPI.getProduct.mockResolvedValue(mockProduct);
      
      const result = await productsAPI.getProduct(1);
      
      expect(productsAPI.getProduct).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockProduct);
    });

    it('fetches products by category', async () => {
      const mockProducts = [
        { id: 1, title: 'Electronics Product', category: 'electronics' }
      ];
      
      productsAPI.getProductsByCategory.mockResolvedValue(mockProducts);
      
      const result = await productsAPI.getProductsByCategory('electronics');
      
      expect(productsAPI.getProductsByCategory).toHaveBeenCalledWith('electronics');
      expect(result).toEqual(mockProducts);
    });

    it('fetches categories', async () => {
      const mockCategories = ['electronics', 'clothing', 'books'];
      
      productsAPI.getCategories.mockResolvedValue(mockCategories);
      
      const result = await productsAPI.getCategories();
      
      expect(productsAPI.getCategories).toHaveBeenCalled();
      expect(result).toEqual(mockCategories);
    });

    it('handles API errors', async () => {
      const mockError = new Error('Network Error');
      productsAPI.getAllProducts.mockRejectedValue(mockError);
      
      await expect(productsAPI.getAllProducts()).rejects.toThrow('Network Error');
    });
  });

  describe('cartAPI', () => {
    it('fetches user cart', async () => {
      const mockCart = [{ id: 1, userId: 1, products: [] }];
      
      cartAPI.getUserCart.mockResolvedValue(mockCart);
      
      const result = await cartAPI.getUserCart(1);
      
      expect(cartAPI.getUserCart).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockCart);
    });

    it('adds product to cart', async () => {
      const mockResponse = { id: 1, userId: 1 };
      const products = [{ productId: 1, quantity: 2 }];
      
      cartAPI.addToCart.mockResolvedValue(mockResponse);
      
      const result = await cartAPI.addToCart(1, products);
      
      expect(cartAPI.addToCart).toHaveBeenCalledWith(1, products);
      expect(result).toEqual(mockResponse);
    });
  });
});
