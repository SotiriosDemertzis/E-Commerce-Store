# 🛒 Modern E-Commerce Store

A sophisticated, full-featured e-commerce application built with React, showcasing advanced state management, modern UI/UX patterns, and production-ready features. This project demonstrates comprehensive React development skills from component architecture to complex user interactions.

## 🌟 Live Demo

[View Live Demo](https://e-commerce-store-1.netlify.app/)

## ✨ Features

### 🛍️ Core E-Commerce Functionality
- **Product Catalog**: Browse products with grid/list view modes
- **Advanced Filtering**: Filter by category, search, and sort options
- **Shopping Cart**: Add/remove items with quantity management
- **Wishlist System**: Save favorite products for later
- **Product Details**: Interactive modal with product information
- **Responsive Design**: Optimized for all device sizes

### 🎨 User Experience
- **Toast Notifications**: Different styled notifications for each action
- **Loading States**: Comprehensive loading indicators and skeletons
- **Error Boundaries**: Graceful error handling throughout the app
- **Mobile-Optimized**: Enhanced mobile list view and navigation
- **Smooth Animations**: Optimized hover effects and transitions

### 🔧 Technical Features
- **Context API**: Global state management with useReducer
- **Custom Hooks**: Reusable logic for cart, wishlist, and filters
- **Local Storage**: Persistent cart and wishlist data
- **Component Architecture**: Modular, maintainable code structure
- **JSDoc Documentation**: Comprehensive code documentation for all components
- **TypeScript Ready**: Well-structured for easy TypeScript migration

## 🛠️ Technologies & Tools Used

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/e-commerce-store.git
   cd e-commerce-store
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
   Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
e-commerce-store/
├── public/
│   └── vite.svg
├── src/
│   ├── component/
│   │   ├── CartSideBar.jsx          # Shopping cart sidebar
│   │   ├── ErrorBoundary.jsx        # Error handling component
│   │   ├── Footer.jsx               # Footer component
│   │   ├── Header.jsx               # Navigation and search
│   │   ├── LoadingStates.jsx        # Loading indicators & skeletons
│   │   ├── ProductCard.jsx          # Product display component
│   │   ├── ProductFilters.jsx       # Category and sorting filters
│   │   ├── ProductGrid.jsx          # Product listing container
│   │   ├── ProductModal.jsx         # Product details modal
│   │   ├── ToastNotification.jsx    # Toast notification system
│   │   └── WishlistPage.jsx         # Wishlist management
│   ├── context/
│   │   ├── index.js                 # Context exports
│   │   ├── ShopActions.js           # Action hooks
│   │   ├── ShopContext.jsx          # Main context provider
│   │   ├── ShopReducer.js           # State reducer logic
│   │   ├── ShopSelectors.js         # Selector hooks
│   │   └── ShopTypes.js             # Action types and initial state
│   ├── data/
│   │   └── products.js              # Sample product data
│   ├── hooks/
│   │   └── useToast.js              # Toast notification hook
│   ├── utils/
│   │   ├── errorUtils.js            # Error handling utilities
│   │   └── toastUtils.jsx           # Toast type definitions
│   ├── App.jsx                      # Main application component
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles and utilities
├── .eslintrc.cjs                    # ESLint configuration
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Learning Achievements

### React Architecture
- ✅ **Context API**: Global state management with useReducer pattern
- ✅ **Custom Hooks**: Separation of concerns and logic reusability
- ✅ **Component Composition**: Modular, maintainable component structure
- ✅ **Error Boundaries**: Comprehensive error handling strategy

### State Management
- ✅ **Complex State Logic**: useReducer for cart and wishlist management
- ✅ **Derived State**: Computed values for filtering and sorting
- ✅ **Persistent State**: localStorage integration for data persistence
- ✅ **State Normalization**: Efficient data structure patterns

### User Experience
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Performance Optimization**: Optimized rendering and animations
- ✅ **Accessibility**: ARIA labels and keyboard navigation
- ✅ **Visual Feedback**: Loading states, error handling, and notifications

### Modern Development Practices
- ✅ **Code Organization**: Clean architecture and separation of concerns
- ✅ **Development Tools**: ESLint, Vite, and modern build processes
- ✅ **Version Control**: Git best practices and commit conventions
- ✅ **Documentation**: Comprehensive README and complete JSDoc documentation

## 🎨 Design Features

### Visual Design
- **Modern UI**: Clean, professional interface with gradient accents
- **Consistent Theming**: Cohesive color palette and typography
- **Micro-interactions**: Smooth hover effects and button animations
- **Visual Hierarchy**: Clear information architecture and spacing

### Responsive Design
- **Mobile-First**: Optimized touch interactions and layouts
- **Breakpoint Strategy**: Responsive components at multiple screen sizes
- **Flexible Layouts**: Grid and list views for different preferences
- **Touch-Friendly**: Properly sized touch targets and gestures

## 📚 Code Documentation

This project features comprehensive JSDoc documentation throughout the codebase:

### Documentation Coverage
- **Complete JSDoc Comments**: All components, hooks, utilities, and functions are documented
- **Type Definitions**: Parameter types, return types, and object properties clearly defined
- **Usage Examples**: Function descriptions include usage context and behavior
- **File Overviews**: Each file includes @fileoverview describing its purpose and functionality

### Documentation Structure
- **Components**: All React components documented with prop types and return values
- **Context System**: State management hooks and actions fully documented
- **Utilities**: Helper functions and error handling utilities documented
- **Data Structures**: Product data and type definitions documented

### Benefits
- **Developer Experience**: Easy onboarding and code understanding
- **Maintainability**: Clear function contracts and component interfaces
- **IDE Support**: Enhanced autocomplete and inline documentation
- **Future TypeScript Migration**: Ready for seamless TypeScript conversion

## 🔧 Advanced Features

### Toast Notification System
- **Action-Specific Styling**: Different colors and icons for each action type
- **Smart Positioning**: Top-center positioning for maximum visibility
- **Auto-Dismiss**: Configurable duration with manual close option
- **Animation**: Smooth slide and scale animations

### Wishlist Management
- **Full CRUD Operations**: Add, remove, and manage wishlist items
- **Modal Interface**: Dedicated wishlist view with product management
- **Badge Notifications**: Visual indicators for wishlist count
- **Cross-Component Integration**: Consistent wishlist state across components

### Error Handling
- **Error Boundaries**: Component-level error isolation
- **Async Error Handling**: Promise rejection handling
- **User-Friendly Messages**: Clear error communication
- **Recovery Options**: Retry and refresh functionality

## 📱 Mobile Enhancements

### Mobile List View
- **Optimized Layout**: Vertical stack design preventing overlaps
- **Touch-Optimized Buttons**: Proper sizing and spacing for mobile
- **Compact Information**: Efficient use of mobile screen space
- **Smooth Interactions**: Optimized animations for mobile devices

### Mobile Navigation
- **Accessible Actions**: Wishlist and cart buttons on all screen sizes
- **Consistent Experience**: Feature parity between desktop and mobile
- **Touch Gestures**: Natural mobile interaction patterns

## 👨‍💻 Development Guide

### Code Architecture
The project follows a modular architecture with clear separation of concerns:

- **`src/component/`** - Reusable UI components with full JSDoc documentation
- **`src/context/`** - Global state management using React Context + useReducer
- **`src/hooks/`** - Custom hooks for reusable logic
- **`src/utils/`** - Utility functions and helpers
- **`src/data/`** - Static data and mock APIs

### Key Development Patterns
- **Component Composition**: Small, focused components that compose together
- **Custom Hooks**: Logic extraction for reusability and testing
- **Error Boundaries**: Graceful error handling at component boundaries
- **Performance Optimization**: Memoization and optimized re-renders

### Understanding the State System
The application uses a sophisticated state management system:

1. **ShopContext** - Provides global state using useReducer pattern
2. **Action Hooks** - Convenient hooks for dispatching actions
3. **Selector Hooks** - Optimized hooks for accessing specific state slices
4. **Persistence** - Automatic localStorage sync for cart and wishlist

### Working with Components
All components are fully documented with JSDoc. Key components include:

- **ProductCard** - Displays products in grid/list view with interactions
- **ProductGrid** - Manages product display and view modes
- **CartSidebar** - Sliding cart interface with quantity management
- **ProductModal** - Detailed product view with image gallery

## 🚀 Build & Deployment

### Development Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint checks
```

### Production Build
```bash
npm run build
```
Optimized build with:
- Code splitting and lazy loading
- Asset optimization and compression
- CSS purging and minification
- Modern JavaScript features

## 🌐 Deployment

Ready for deployment on modern hosting platforms:
- **Netlify**: Automatic deployment with GitHub integration
- **Vercel**: Zero-configuration deployment
- **GitHub Pages**: Static hosting option
- **Custom Server**: Standard React build output

## 👨‍💻 About the Developer

**Sotiris Demertzis**  
Full-Stack Developer • React Specialist • E-Commerce Solutions

This project showcases advanced React development skills, demonstrating the ability to build complex, production-ready applications with modern development practices and user-centered design.

## 🤝 Contributing

This project welcomes contributions! Areas for enhancement:
- Payment gateway integration
- User authentication system
- Product review system
- Advanced search functionality
- Performance optimizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** - For the amazing framework and documentation
- **Tailwind CSS** - For the utility-first CSS framework
- **Open Source Community** - For inspiration and learning resources

---

<div align="center">

**Built with ❤️ and Modern React**

[🌐 Live Demo](https://your-demo-url.netlify.app) • [📧 Contact](mailto:your-email@example.com) • [💼 LinkedIn](https://linkedin.com/in/your-profile)

</div>
