import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Products API
export const productsAPI = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get single product
  getProduct: async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    try {
      const response = await api.get(`/products/category/${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  },

  // Get all categories
  getCategories: async () => {
    try {
      const response = await api.get('/products/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },

  // Get limited products (for pagination)
  getLimitedProducts: async (limit = 10, sort = 'asc') => {
    try {
      const response = await api.get(`/products?limit=${limit}&sort=${sort}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching limited products:', error);
      throw error;
    }
  }
};

// Cart API (Note: FakeStore API cart endpoints are for demonstration)
export const cartAPI = {
  // Get user cart
  getUserCart: async (userId = 1) => {
    try {
      const response = await api.get(`/carts/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user cart:', error);
      throw error;
    }
  },

  // Add product to cart
  addToCart: async (userId = 1, products) => {
    try {
      const response = await api.post('/carts', {
        userId,
        date: new Date().toISOString().split('T')[0],
        products
      });
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  },

  // Update cart
  updateCart: async (cartId, products) => {
    try {
      const response = await api.put(`/carts/${cartId}`, {
        userId: 1,
        date: new Date().toISOString().split('T')[0],
        products
      });
      return response.data;
    } catch (error) {
      console.error('Error updating cart:', error);
      throw error;
    }
  },

  // Delete cart
  deleteCart: async (cartId) => {
    try {
      const response = await api.delete(`/carts/${cartId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting cart:', error);
      throw error;
    }
  }
};

export default api;
