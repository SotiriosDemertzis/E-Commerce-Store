import { useCartItemCount } from "../context/ShopSelectors";
import { useToggleCartSidebar } from "../context/ShopActions";

export default function Header() {
    const cartItemCount = useCartItemCount();
    const toggleCartSidebar = useToggleCartSidebar();
  
    return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-2xl border-b border-indigo-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/30">
              <span className="text-xl font-bold">🛒</span>
            </div>
            <h1 className="text-2xl font-bold text-white drop-shadow-sm">
              ShopContext
            </h1>
          </div>
          
          <button
            onClick={toggleCartSidebar}
            className="relative bg-white hover:bg-gray-50 px-6 py-3 rounded-xl font-medium transition-colors duration-200 shadow-lg border border-gray-200 text-gray-800"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span>Cart</span>
            </div>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );

}

