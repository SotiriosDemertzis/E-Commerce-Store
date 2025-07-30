import ProductCard from './ProductCard'
import { useFilteredProducts, useViewMode, useProductFilters } from '../context'

export default function ProductGrid() {
  const filteredProducts = useFilteredProducts();
  const viewMode = useViewMode();
    
  // Check if this is the initial state (no search/filter applied)
  const { searchTerm: currentSearchTerm, categoryFilter: currentCategoryFilter } = useProductFilters();
  const hasSearched = currentSearchTerm.trim().length > 0;
  
  // Show welcome screen only if user hasn't searched AND no category is selected
  const isInitialState = !hasSearched && !currentCategoryFilter;
  
  if (filteredProducts.length === 0) {
    if (isInitialState) {
      // Welcome message for initial state
      return (
        <div className="text-center py-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Icon */}
            <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>

            {/* Welcome Text */}
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
              Welcome to ShopContext
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover premium products curated just for you. Use our powerful search and filtering tools 
              to find exactly what you're looking for in our extensive collection.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Smart Search</h3>
                <p className="text-slate-600 text-sm">Find products instantly with our intelligent search system</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Category Filters</h3>
                <p className="text-slate-600 text-sm">Browse through organized categories to discover new products</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-cyan-100">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Advanced Sorting</h3>
                <p className="text-slate-600 text-sm">Sort by price, rating, or name to find the perfect match</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Shopping?</h2>
              <p className="text-indigo-100 mb-6">Try searching for a product or select a category above to begin exploring our collection.</p>
              <div className="flex justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                  ↑ Use the filters above to get started
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // No results message for search/filter
      return (
        <div className="text-center py-16 text-gray-500">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">No products found</h3>
          <p className="text-gray-600 max-w-md mx-auto">Try adjusting your search terms or filter criteria to discover more products</p>
        </div>
      );
    }
  }

  return (
    <div className={`transition-all duration-300 ${
      viewMode === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
        : 'grid grid-cols-1 gap-6'
    }`}>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}