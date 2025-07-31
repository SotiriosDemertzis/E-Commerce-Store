/**
 * @fileoverview ProductModal component providing detailed product view in an overlay modal.
 * Features image gallery, product details, star ratings, cart/wishlist actions, and keyboard navigation.
 * Includes responsive design with image thumbnails and comprehensive product information display.
 */

import { useState, useEffect } from 'react';
import { useCart, useAddToCart } from '../context';
import { useWishlistActions } from '../context/ShopActions';
import { useWishlist } from '../context/ShopSelectors';
import { useToast } from '../hooks/useToast';

/**
 * ProductModal component for displaying detailed product information in a modal
 * @param {Object} props - The component props
 * @param {Object} props.product - The product object to display
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {Function} props.onClose - Function to close the modal
 * @returns {JSX.Element|null} The product modal with detailed information, or null if closed
 */
export default function ProductModal({ product, isOpen, onClose }) {
  const cart = useCart();
  const addToCart = useAddToCart();
  const { wishlist } = useWishlist();
  const { addToWishlist, removeFromWishlist } = useWishlistActions();
  const { toast } = useToast();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const cartItem = cart.find(item => item.id === product?.id);
  const inCart = !!cartItem;
  const isInWishlist = wishlist.some(item => item.id === product?.id);

  /**
   * Toggles product wishlist status and shows appropriate toast notification
   */
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.wishlistRemove('Removed from Wishlist', `${product.name} has been removed from your wishlist`);
    } else {
      addToWishlist(product);
      toast.wishlistAdd('Added to Wishlist', `${product.name} has been added to your wishlist`);
    }
  };

  /**
   * Adds product to cart and shows confirmation toast
   */
  const handleAddToCart = () => {
    addToCart(product);
    toast.cart('Added to Cart', `${product.name} has been added to your cart`);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  /**
   * Generates star rating display with full, half, and empty stars
   * @param {number} rating - The rating value (0-5)
   * @returns {JSX.Element[]} Array of star elements
   */
  const getStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      );
    }
    
    // Fill remaining stars
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  if (!isOpen || !product) return null;

  // Mock additional images for gallery (you can replace with real data)
  const productImages = [
    product.image,
    product.image, // Duplicate for demo
    product.image,
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 focus-ring"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden aspect-square">
              {!imageLoaded && (
                <div className="absolute inset-0 loading-shimmer rounded-2xl"></div>
              )}
              <img 
                src={productImages[selectedImageIndex]} 
                alt={product.name}
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl hidden items-center justify-center">
                <svg className="w-24 h-24 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Image Thumbnails */}
            <div className="flex gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImageIndex === index 
                      ? 'ring-2 ring-indigo-500 ring-offset-2' 
                      : 'hover:ring-2 hover:ring-gray-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category */}
            <p className="text-body-small font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block capitalize">
              {product.category.replace('-', ' ')}
            </p>

            {/* Title */}
            <h1 className="text-heading-2 text-gray-900">{product.name}</h1>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {getStarRating(product.rating)}
                </div>
                <span className="text-body font-medium text-gray-700">
                  {product.rating}
                </span>
              </div>
              <span className="text-body text-gray-500">
                ({(product.id * 17 + 23) % 89 + 12} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-heading-1 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ${product.price}
              </span>
              <span className={`text-body-small font-medium px-4 py-2 rounded-full ${
                product.stock > 10 
                  ? 'bg-green-100 text-green-700' 
                  : product.stock > 0 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {product.stock === 0 ? 'Out of Stock' : `${product.stock} in stock`}
              </span>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-heading-6 text-gray-900">Description</h3>
              <p className="text-body text-gray-600 leading-relaxed">
                This is a high-quality {product.name.toLowerCase()} that combines style and functionality. 
                Perfect for daily use, this product offers excellent value and lasting durability. 
                Made with premium materials and attention to detail.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-heading-6 text-gray-900">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-body text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Premium quality materials
                </li>
                <li className="flex items-center gap-3 text-body text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Durable and long-lasting
                </li>
                <li className="flex items-center gap-3 text-body text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Perfect for daily use
                </li>
                <li className="flex items-center gap-3 text-body text-gray-600">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Excellent value for money
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 focus-ring ${
                  product.stock === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : inCart
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white scale-on-hover shadow-lg hover:shadow-xl'
                    : 'btn-primary scale-on-hover'
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

              {/* Add to Wishlist Button */}
              <button
                onClick={handleWishlistToggle}
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 focus-ring border-2 ${
                  isInWishlist
                    ? 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100 hover:border-red-300'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
                }`}
                aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg 
                    className="w-5 h-5" 
                    fill={isInWishlist ? "currentColor" : "none"} 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}