/**
 * @fileoverview Header component providing navigation, search functionality, and user actions.
 * Includes responsive design with mobile/desktop layouts, debounced search, cart/wishlist access,
 * and trust signals display. Features a modal wishlist overlay for quick access.
 */

import { useState, useEffect } from "react";
import { useCartItemCount, useProductFilters, useWishlist } from "../context/ShopSelectors";
import { useToggleCartSidebar, useProductFilterActions } from "../context/ShopActions";
import WishlistPage from "./WishlistPage";

/**
 * Header component with navigation, search, and user actions
 * @returns {JSX.Element} The header component with search bar, cart, wishlist, and trust signals
 */
export default function Header() {
    const cartItemCount = useCartItemCount();
    const { wishlistCount } = useWishlist();
    const toggleCartSidebar = useToggleCartSidebar();
    const { setSearchTerm } = useProductFilterActions();
    const { searchTerm } = useProductFilters();
    
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [showWishlist, setShowWishlist] = useState(false);

    // Debounced search - update context after user stops typing
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(localSearchTerm);
        }, 300);

        return () => clearTimeout(timer);
    }, [localSearchTerm, setSearchTerm]);

    /**
     * Handles search input changes and updates local search term
     * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
     */
    const handleSearchChange = (e) => {
        setLocalSearchTerm(e.target.value);
    };

    /**
     * Clears both local and global search terms
     */
    const clearSearch = () => {
        setLocalSearchTerm("");
        setSearchTerm("");
    };
  
    return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-2xl border-b border-indigo-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Logo and Brand */}
          <div className="flex items-center justify-between lg:justify-start">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/30 scale-on-hover">
                <span className="text-xl font-bold">🛒</span>
              </div>
              <div>
                <h1 className="text-heading-5 text-white drop-shadow-sm">
                  ShopContext
                </h1>
                <p className="text-caption text-indigo-100 hidden sm:block">
                  Premium Shopping Experience
                </p>
              </div>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Wishlist Button */}
              <button
                onClick={() => setShowWishlist(true)}
                className="relative bg-white/10 hover:bg-white/20 p-2.5 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm border border-white/20 focus-ring"
                aria-label={`Wishlist with ${wishlistCount} items`}
                title="View Wishlist"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold shadow-md border border-white">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Mobile Cart Button */}
              <button
                onClick={toggleCartSidebar}
                className="relative bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm border border-white/20 focus-ring"
                aria-label={`Shopping cart with ${cartItemCount} items`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 8H6L5 9z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-4xl mx-auto lg:mx-0">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform scale-[1.01]' : ''}`}>
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none z-10">
                <svg className="h-7 w-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={localSearchTerm}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-16 pr-16 py-5 text-lg text-gray-900 placeholder-gray-400 bg-white/95 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg focus:shadow-2xl focus:bg-white focus:border-indigo-300 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-100"
                placeholder="Search products..."
                aria-label="Search products"
              />
              {localSearchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-6 flex items-center z-10 hover:bg-gray-100/50 rounded-r-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
                  aria-label="Clear search"
                >
                  <svg className="h-7 w-7 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Desktop Cart and User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Wishlist Button */}
            <button 
              onClick={() => setShowWishlist(true)}
              className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 focus-ring"
              aria-label={`Wishlist with ${wishlistCount} items`}
              title="View Wishlist"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={toggleCartSidebar}
              className="relative bg-white hover:bg-gray-50 px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg border border-gray-200 text-gray-800 scale-on-hover focus-ring"
              aria-label={`Shopping cart with ${cartItemCount} items`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 8H6L5 9z" />
                </svg>
                <span className="hidden sm:inline">Cart</span>
                <span className="sm:hidden">({cartItemCount})</span>
              </div>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md border-2 border-white animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Trust Signals Bar */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 text-caption text-indigo-100">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Secure Shopping</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H15a2 2 0 012 2v0M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Free Shipping Over $50</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Modal */}
      {showWishlist && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto mt-8">
            {/* Close Button */}
            <button
              onClick={() => setShowWishlist(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 focus-ring"
              aria-label="Close wishlist"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <WishlistPage />
          </div>
        </div>
      )}
    </header>
  );

}