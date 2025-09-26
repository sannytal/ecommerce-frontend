# E-Commerce Frontend Application

A modern, responsive e-commerce frontend application built with React, Vite, and Tailwind CSS. This application provides a complete shopping experience with product browsing, detailed product views, and cart management functionality.

## 🚀 Features

### Core Functionality
- **Product Listing Page**: Browse all available products with search and filter capabilities
- **Product Details Page**: View detailed product information with add-to-cart functionality
- **Shopping Cart**: Manage cart items with quantity updates and removal options
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Advanced Features
- **Enhanced Search Interface**: Full-width search bar with clear functionality and real-time filtering
- **Advanced Filtering**: Category-based filtering with mobile-responsive filter toggles
- **Multiple Sort Options**: Sort products by name, price (low to high, high to low), and rating
- **Dual View Modes**: Switch between grid and list view for optimal product browsing
- **Smart Pagination**: Navigate through products with page-based pagination (8 items per page)
- **Cart Persistence**: Cart data persists across browser sessions using localStorage
- **Related Products**: Display related products on product detail pages
- **Loading States**: Smooth loading indicators for better user experience
- **Error Handling**: Comprehensive error handling with user-friendly messages

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 4.4.5
- **Styling**: Tailwind CSS 3.3.3
- **Routing**: React Router DOM 6.15.0
- **HTTP Client**: Axios 1.5.0
- **Icons**: Lucide React 0.263.1
- **Testing**: Vitest with React Testing Library
- **Code Quality**: ESLint with React plugins

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏃‍♂️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage report

## 🧪 Testing

The application includes comprehensive unit tests for key components and functionality:

### Running Tests
```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test -- --watch
```

### Test Coverage
The test suite covers:
- Component rendering and behavior (ProductCard, Header, Footer)
- Cart context functionality (add, remove, update, persistence)
- API service methods (products, categories, cart operations)
- User interactions and state management
- Search and filtering functionality
- Pagination logic and navigation
- View mode switching (grid/list)

## 🎨 UI/UX Design

### Design Principles
- **Modern & Clean**: Minimalist design with focus on usability
- **Responsive**: Mobile-first approach with breakpoint optimization
- **Accessible**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized images and lazy loading

### Color Scheme
- Primary: Blue (#3B82F6)
- Secondary: Gray (#6B7280)
- Success: Green (#10B981)
- Error: Red (#EF4444)

## 🔌 API Integration

The application integrates with the [FakeStore API](https://fakestoreapi.com/) for:

### Endpoints Used
- `GET /products` - Fetch all products
- `GET /products/{id}` - Fetch single product
- `GET /products/categories` - Fetch all categories
- `GET /products/category/{category}` - Fetch products by category

### API Features
- Error handling with retry mechanisms
- Loading states for better UX
- Request timeout configuration
- Response data validation

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Touch-friendly buttons and interactions
- Collapsible navigation menu
- Optimized image sizes
- Swipe gestures support

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=https://fakestoreapi.com
VITE_APP_TITLE=E-Commerce Store
```

### Tailwind Configuration
The application uses a custom Tailwind configuration with:
- Extended color palette
- Custom component classes
- Responsive breakpoints
- Animation utilities

## 📂 Project Structure

```
ecommerce-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── __tests__/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   ├── __tests__/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── ProductDetails.jsx
│   │   └── ProductListing.jsx
│   ├── services/
│   │   ├── __tests__/
│   │   └── api.js
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure routing for SPA (Single Page Application)

### Environment Setup
- Ensure all environment variables are configured
- Set up proper CORS headers if needed
- Configure CDN for static assets

## 🔮 Future Enhancements

### Planned Features
- User authentication and profiles
- Product reviews and ratings
- Wishlist functionality
- Order history and tracking
- Payment integration
- Admin dashboard
- Product recommendations
- Multi-language support

### Technical Improvements
- Server-side rendering (SSR)
- Progressive Web App (PWA) features
- Advanced caching strategies
- Performance monitoring
- A/B testing framework

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

### Development Guidelines
- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for providing the product data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the fast build tool

## 📞 Support

For support, email support@example.com or create an issue in the repository.

---

**Built with ❤️ using React and modern web technologies**
