# Project Structure

This document provides a detailed overview of the e-commerce frontend application's project structure, explaining the purpose and organization of each directory and file.

## 📁 Root Directory Structure

```
ecommerce-frontend/
├── public/                     # Static assets served directly
├── src/                        # Source code directory
├── .eslintrc.cjs              # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Project dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite build tool configuration
├── README.md                  # Project documentation
├── Project-structure.md       # This file
└── Copilot Chat Export.md     # Chat history export
```

## 📂 Detailed Directory Breakdown

### `/public/` - Static Assets
```
public/
└── vite.svg                   # Vite logo (favicon)
```
- Contains static assets that are served directly by the web server
- Files here are not processed by Vite's build system
- Accessible via absolute paths in the application

### `/src/` - Source Code
The main source code directory containing all React components, services, and application logic.

#### `/src/components/` - Reusable Components
```
components/
├── __tests__/                 # Component unit tests
│   └── ProductCard.test.jsx   # ProductCard component tests
├── Footer.jsx                 # Application footer component
├── Header.jsx                 # Navigation header with cart indicator
├── LoadingSpinner.jsx         # Loading state indicator
└── ProductCard.jsx            # Product display card component
```

**Component Responsibilities:**
- **Header.jsx**: Navigation, logo, cart icon with item count
- **Footer.jsx**: Site footer with branding and links
- **ProductCard.jsx**: Product display in grid/list view with add-to-cart
- **LoadingSpinner.jsx**: Reusable loading indicator with customizable size

#### `/src/context/` - React Context Providers
```
context/
├── __tests__/                 # Context unit tests
│   └── CartContext.test.jsx   # Cart context functionality tests
└── CartContext.jsx            # Shopping cart state management
```

**Context Responsibilities:**
- **CartContext.jsx**: Global cart state, add/remove/update items, localStorage persistence

#### `/src/pages/` - Page Components
```
pages/
├── Cart.jsx                   # Shopping cart page
├── ProductDetails.jsx         # Individual product detail page
└── ProductListing.jsx         # Product catalog with search/filter
```

**Page Responsibilities:**
- **ProductListing.jsx**: Product catalog, enhanced search interface, filtering, sorting, smart pagination (8 items per page)
- **ProductDetails.jsx**: Single product view, related products, add to cart with quantity selection
- **Cart.jsx**: Cart management, quantity updates, order summary, checkout preparation

#### `/src/services/` - API and External Services
```
services/
├── __tests__/                 # Service unit tests
│   └── api.test.js           # API service tests
└── api.js                    # FakeStore API integration
```

**Service Responsibilities:**
- **api.js**: HTTP client configuration, API endpoints, error handling

#### `/src/test/` - Test Configuration
```
test/
└── setup.js                  # Vitest and testing library setup
```

**Test Configuration:**
- Global test setup and configuration
- Testing library extensions and matchers

#### Root Source Files
```
src/
├── App.jsx                    # Main application component with routing
├── index.css                  # Global styles and Tailwind imports
└── main.jsx                   # Application entry point
```

## 🏗️ Architecture Patterns

### Component Architecture
- **Atomic Design**: Components are organized from simple to complex
- **Container/Presentational**: Pages handle logic, components handle presentation
- **Composition**: Components are composed together rather than inherited

### State Management
- **Context API**: Global state for cart management
- **Local State**: Component-specific state using useState
- **Persistent State**: localStorage for cart persistence

### Routing Structure
```
Routes:
├── /                          # Home page (ProductListing)
├── /products                  # Product catalog (ProductListing)
├── /product/:id               # Product details (ProductDetails)
└── /cart                      # Shopping cart (Cart)
```

## 🔧 Configuration Files

### `package.json`
- Project metadata and dependencies
- Build and development scripts
- Testing configuration

### `vite.config.js`
- Vite build tool configuration
- React plugin setup
- Test environment configuration

### `tailwind.config.js`
- Tailwind CSS customization
- Custom color palette
- Component class definitions

### `postcss.config.js`
- PostCSS plugin configuration
- Tailwind CSS and Autoprefixer setup

### `.eslintrc.cjs`
- ESLint code quality rules
- React-specific linting rules
- TypeScript support configuration

## 📊 File Size and Complexity

### Large Files (>200 lines)
- `src/pages/ProductListing.jsx` (~390 lines) - Enhanced search interface, filtering, sorting, and pagination logic
- `src/pages/ProductDetails.jsx` (~250 lines) - Detailed product view with related items
- `src/pages/Cart.jsx` (~200 lines) - Cart management and checkout preparation

### Medium Files (100-200 lines)
- `src/context/CartContext.jsx` (~150 lines) - Cart state management
- `src/components/ProductCard.jsx` (~120 lines) - Product display logic
- `src/services/api.js` (~100 lines) - API service methods

### Small Files (<100 lines)
- Component tests and utilities
- Configuration files
- Simple presentational components

## 🧪 Testing Structure

### Test Organization
- Tests are co-located with their respective components/services
- `__tests__/` directories contain all test files
- Test files follow the naming convention: `ComponentName.test.jsx`

### Test Coverage Areas
- **Component Rendering**: Ensure components render correctly
- **User Interactions**: Test button clicks, form submissions
- **State Management**: Verify context and state updates
- **API Integration**: Mock API calls and responses

## 🚀 Build Output Structure

### Development Build
- Hot module replacement enabled
- Source maps for debugging
- Unminified code for development

### Production Build (`/dist/`)
```
dist/
├── assets/                    # Bundled and optimized assets
│   ├── index-[hash].css      # Minified CSS bundle
│   └── index-[hash].js       # Minified JavaScript bundle
├── index.html                # Optimized HTML entry point
└── vite.svg                  # Static assets
```

## 📈 Scalability Considerations

### Adding New Features
1. **New Pages**: Add to `/src/pages/` and update routing in `App.jsx`
2. **New Components**: Add to `/src/components/` with corresponding tests
3. **New Services**: Add to `/src/services/` for external integrations
4. **New Context**: Add to `/src/context/` for global state management

### Code Organization Best Practices
- Keep components focused on single responsibilities
- Use custom hooks for complex logic
- Maintain consistent file naming conventions
- Write tests for all new functionality

### Performance Optimization
- Lazy load pages using React.lazy()
- Implement virtual scrolling for large product lists
- Optimize images with proper sizing and formats
- Use React.memo for expensive components

## 🔄 Development Workflow

### File Modification Frequency
- **High**: Page components, API services
- **Medium**: Reusable components, context providers
- **Low**: Configuration files, test setup

### Dependency Flow
```
main.jsx → App.jsx → Pages → Components → Services
                  ↓
               Context Providers
```

This structure promotes maintainability, testability, and scalability while following React and modern web development best practices.
