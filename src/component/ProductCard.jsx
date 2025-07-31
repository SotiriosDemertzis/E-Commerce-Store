/**
 * @fileoverview ProductCard component for displaying individual products
 * Supports both grid and list view modes with responsive design
 * Includes wishlist, cart, and product modal functionality
 */

import { useState } from 'react';
import { useCart, useAddToCart, useViewMode } from '../context';
import { useProductModal, useWishlistActions } from '../context/ShopActions';
import { useWishlist } from '../context/ShopSelectors';
import { useToast } from '../hooks/useToast';

/**
 * ProductCard component that displays a single product with interactive features
 * Adapts its layout based on the current view mode (grid/list)
 * @param {Object} props - Component props
 * @param {Object} props.product - Product object to display
 * @param {number} props.product.id - Unique product identifier
 * @param {string} props.product.name - Product name
 * @param {string} props.product.image - Product image URL
 * @param {number} props.product.price - Product price
 * @param {string} props.product.category - Product category
 * @param {number} props.product.rating - Product rating (0-5)
 * @param {number} props.product.stock - Available stock quantity
 * @returns {JSX.Element} ProductCard component
 */
export default function ProductCard({ product }) {
  const cart = useCart();
  const addToCart = useAddToCart();
  const viewMode = useViewMode();
  const { openProductModal } = useProductModal();
  const { wishlist } = useWishlist();
  const { addToWishlist, removeFromWishlist } = useWishlistActions();
  const { toast } = useToast();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cartItem = cart.find(item => item.id === product.id);
  const inCart = !!cartItem;
  
  const isInWishlist = wishlist.some(item => item.id === product.id);

  const handleWishlistToggle = (e) => {
    e.stopPropagation(); // Prevent opening modal when clicking wishlist
    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.wishlistRemove('Removed from Wishlist', `${product.name} has been removed from your wishlist`);
    } else {
      addToWishlist(product);
      toast.wishlistAdd('Added to Wishlist', `${product.name} has been added to your wishlist`);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    toast.cart('Added to Cart', `${product.name} has been added to your cart`);
  };

  const handleProductClick = () => {
    openProductModal(product);
  };

  /**
   * Helper function to render star rating display
   * Creates filled, half-filled, and empty stars based on rating value
   * @param {number} rating - Rating value (0-5, can include decimals)
   * @returns {JSX.Element[]} Array of star SVG elements
   */
  const getStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      );
    }
    
    // Fill remaining stars
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  // List mode design with enhanced mobile styling
  if (viewMode === 'list') {
    return (
      <div 
        className="card group fade-in cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleProductClick}
      >
        <div className="flex p-4 sm:p-6 gap-4 sm:gap-6 items-start sm:items-center">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              {!imageLoaded && (
                <div className="absolute inset-0 loading-shimmer rounded-xl sm:rounded-2xl"></div>
              )}
              <img 
                src={product.image} 
                alt={product.name}
                className={`w-full h-full object-cover transition-all duration-300 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-105' : 'scale-100'}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl sm:rounded-2xl hidden items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Product Info - Mobile First Layout */}
          <div className="flex-1 min-w-0">
            {/* Mobile Layout */}
            <div className="block sm:hidden">
              {/* Title and Category Row */}
              <div className="mb-2">
                <h3 className="text-body font-semibold text-gray-900 line-clamp-2 mb-1">{product.name}</h3>
                <p className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block capitalize">
                  {product.category.replace('-', ' ')}
                </p>
              </div>
              
              {/* Price Row */}
              <div className="mb-3">
                <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  ${product.price}
                </span>
              </div>
              
              {/* Rating and Stock Row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {getStarRating(product.rating)}
                  <span className="text-xs font-medium text-gray-600 ml-1">
                    ({product.rating})
                  </span>
                </div>
                
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  product.stock > 10 
                    ? 'bg-green-100 text-green-700' 
                    : product.stock > 0 
                    ? 'bg-warning-100 text-warning-700' 
                    : 'bg-error-100 text-error-700'
                }`}>
                  {product.stock === 0 ? 'Out of Stock' : `${product.stock} left`}
                </span>
              </div>
              
              {/* Actions Row */}
              <div className="flex items-center gap-2">
                {/* Mobile Wishlist Button */}
                <button 
                  onClick={handleWishlistToggle}
                  className={`p-2 rounded-lg transition-all duration-200 focus-ring ${
                    isInWishlist 
                      ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 hover:text-red-500'
                  }`}
                  aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                  title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                >
                  <svg className="w-4 h-4" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Mobile Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 focus-ring ${
                    product.stock === 0
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : inCart
                      ? 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-200'
                      : 'btn-primary hover:scale-105'
                  }`}
                  aria-label={`Add ${product.name} to cart`}
                >
                  {product.stock === 0 
                    ? 'Out of Stock'
                    : inCart 
                    ? `Added (${cartItem?.quantity})`
                    : 'Add to Cart'
                  }
                </button>
              </div>
            </div>

            {/* Desktop Layout (sm and up) */}
            <div className="hidden sm:block">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0 mr-6">
                  <h3 className="text-heading-6 text-gray-900 truncate mb-2">{product.name}</h3>
                  <p className="text-caption font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block mb-3 capitalize">
                    {product.category.replace('-', ' ')}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-2">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {getStarRating(product.rating)}
                      <span className="text-body-small font-medium text-gray-600 ml-1">
                        ({product.rating})
                      </span>
                    </div>
                    
                    {/* Stock Status */}
                    <span className={`text-caption font-medium px-3 py-1 rounded-full ${
                      product.stock > 10 
                        ? 'bg-green-100 text-green-700' 
                        : product.stock > 0 
                        ? 'bg-warning-100 text-warning-700' 
                        : 'bg-error-100 text-error-700'
                    }`}>
                      {product.stock === 0 ? 'Out of Stock' : `${product.stock} in stock`}
                    </span>
                  </div>
                </div>

                {/* Desktop Price and Actions */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-heading-5 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      ${product.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {/* Desktop Wishlist Button */}
                    <button 
                      onClick={handleWishlistToggle}
                      className={`p-3 rounded-lg transition-all duration-200 focus-ring ${
                        isInWishlist 
                          ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200' 
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 hover:text-red-500'
                      }`}
                      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                      title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                      <svg className="w-5 h-5" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    {/* Desktop Add to Cart Button */}
                    <button
                      onClick={handleAddToCart}
                      disabled={product.stock === 0}
                      className={`px-6 py-3 rounded-xl text-body-small font-semibold transition-all duration-200 focus-ring ${
                        product.stock === 0
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : inCart
                          ? 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-200'
                          : 'btn-primary hover:scale-105'
                      }`}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      {product.stock === 0 
                        ? 'Out of Stock'
                        : inCart 
                        ? `Added (${cartItem?.quantity})`
                        : 'Add to Cart'
                      }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid mode design with enhanced styling
  return (
    <div 
      className="card group fade-in overflow-hidden h-full flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleProductClick}
    >
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Product Image */}
        <div className="relative w-full h-56 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 loading-shimmer"></div>
          )}
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-300 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-105' : 'scale-100'}`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 hidden items-center justify-center">
            <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Quick Action Buttons - Show on Hover */}
          <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <button 
              onClick={handleWishlistToggle}
              className={`p-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-lg shadow-lg transition-all duration-200 focus-ring ${
                isInWishlist ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
              }`}
              aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
              title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              <svg className="w-5 h-5" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Stock Badge */}
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-4 left-4">
              <span className="bg-warning-500 text-white text-caption font-bold px-3 py-1 rounded-full shadow-lg">
                Only {product.stock} left!
              </span>
            </div>
          )}
          
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
              <span className="bg-error-500 text-white text-body font-bold px-4 py-2 rounded-lg shadow-lg">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        {/* Product Title and Category */}
        <div className="mb-4">
          <p className="text-caption font-medium text-gray-500 mb-2 capitalize">
            {product.category.replace('-', ' ')}
          </p>
          <h3 className="text-heading-6 text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {getStarRating(product.rating)}
            </div>
            <span className="text-body-small font-medium text-gray-600">
              ({product.rating})
            </span>
          </div>
          <span className="text-body-small text-gray-500">
            {(product.id * 17 + 23) % 89 + 12} reviews
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-heading-4 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <span className={`text-caption font-medium px-3 py-1 rounded-full ${
            product.stock > 10 
              ? 'bg-success-100 text-success-700' 
              : product.stock > 0 
              ? 'bg-warning-100 text-warning-700' 
              : 'bg-error-100 text-error-700'
          }`}>
            {product.stock === 0 ? 'Out of Stock' : `${product.stock} in stock`}
          </span>
        </div>
        
        {/* Spacer to push button to bottom */}
        <div className="flex-1"></div>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 focus-ring ${
            product.stock === 0
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : inCart
              ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:scale-105 transition-all duration-200 ease-out shadow-lg hover:shadow-xl'
              : 'btn-primary hover:scale-105 transition-all duration-200 ease-out'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          {product.stock === 0 
            ? (
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
                <span>Out of Stock</span>
              </div>
            )
            : inCart 
            ? (
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Added to Cart ({cartItem?.quantity || 0})</span>
              </div>
            )
            : (
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 8H6L5 9z" />
                </svg>
                <span>Add to Cart</span>
              </div>
            )
          }
        </button>
      </div>
    </div>
  );
}