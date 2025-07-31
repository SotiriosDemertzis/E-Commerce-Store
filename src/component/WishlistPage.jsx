import { useState } from 'react';
import { useWishlist } from '../context/ShopSelectors';
import { useWishlistActions, useCartActions } from '../context/ShopActions';
import { useToast } from '../hooks/useToast';

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const { removeFromWishlist } = useWishlistActions();
  const { addToCart } = useCartActions();
  const { toast } = useToast();
  const [imageLoadStates, setImageLoadStates] = useState({});

  const handleImageLoad = (productId) => {
    setImageLoadStates(prev => ({ ...prev, [productId]: true }));
  };

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast.cart('Moved to Cart', `${product.name} has been moved from wishlist to cart`);
  };

  const handleRemoveFromWishlist = (product) => {
    removeFromWishlist(product.id);
    toast.wishlistRemove('Removed from Wishlist', `${product.name} has been removed from your wishlist`);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-96 flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-heading-4 text-gray-900 mb-3">Your Wishlist is Empty</h3>
          <p className="text-body text-gray-600 mb-6">
            Start adding products to your wishlist by clicking the heart icon on products you love.
          </p>
          <button 
            onClick={() => window.history.back()}
            className="btn-primary"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-heading-2 font-bold text-gray-900 mb-2">My Wishlist</h1>
            <p className="text-body text-gray-600">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-body-small text-gray-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>{wishlist.length} saved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="card group fade-in overflow-hidden h-full flex flex-col">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
              {/* Product Image */}
              <div className="relative w-full h-56 overflow-hidden">
                {!imageLoadStates[product.id] && (
                  <div className="absolute inset-0 loading-shimmer"></div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    imageLoadStates[product.id] ? 'opacity-100' : 'opacity-0'
                  } group-hover:scale-110`}
                  onLoad={() => handleImageLoad(product.id)}
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
                
                {/* Remove from Wishlist Button */}
                <button 
                  onClick={() => handleRemoveFromWishlist(product)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-lg shadow-lg transition-all duration-200 focus-ring text-red-500 hover:text-red-600"
                  aria-label="Remove from wishlist"
                  title="Remove from Wishlist"
                >
                  <svg className="w-5 h-5" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Stock Badge */}
                {product.stock <= 5 && product.stock > 0 && (
                  <div className="absolute top-3 left-3">
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
                <h3 className="text-heading-6 text-gray-900 mb-3 line-clamp-2">
                  {product.name}
                </h3>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-body-small font-medium text-gray-600">
                  ({product.rating})
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-heading-4 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  ${product.price}
                </span>
              </div>
              
              {/* Spacer to push buttons to bottom */}
              <div className="flex-1"></div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleMoveToCart(product)}
                  disabled={product.stock === 0}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 focus-ring ${
                    product.stock === 0
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'btn-primary scale-on-hover'
                  }`}
                >
                  {product.stock === 0 ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                      </svg>
                      <span>Out of Stock</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 8H6L5 9z" />
                      </svg>
                      <span>Move to Cart</span>
                    </div>
                  )}
                </button>
                
                <button
                  onClick={() => handleRemoveFromWishlist(product)}
                  className="w-full py-2 px-4 rounded-xl font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-200 focus-ring border border-gray-200 hover:border-red-200"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span>Remove</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}