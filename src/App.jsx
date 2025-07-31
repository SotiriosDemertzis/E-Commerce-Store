import Header from './component/Header'
import ProductGrid from './component/ProductGrid'
import ProductFilters from './component/ProductFilters'
import CartSidebar from './component/CartSideBar'
import Footer from './component/Footer'
import ProductModal from './component/ProductModal'
import { ToastProvider } from './component/ToastNotification'
import ErrorBoundary, { AsyncErrorBoundary } from './component/ErrorBoundary'
import { ShopProvider } from './context'
import { useProductModal } from './context/ShopSelectors'
import { useProductModal as useProductModalActions } from './context/ShopActions'

function AppContent() {
  const { selectedProduct, isProductModalOpen } = useProductModal();
  const { closeProductModal } = useProductModalActions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.08),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <ProductFilters />
        </ErrorBoundary>
        
        <main className="max-w-7xl mx-auto px-6 pb-12">
          <ErrorBoundary>
            <ProductGrid /> 
          </ErrorBoundary>
        </main>

        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <CartSidebar />
        </ErrorBoundary>
        
        {/* Product Modal */}
        <ErrorBoundary>
          <ProductModal
            product={selectedProduct}
            isOpen={isProductModalOpen}
            onClose={closeProductModal}
          />
        </ErrorBoundary>
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AsyncErrorBoundary>
        <ShopProvider>
          <ToastProvider>
            <AppContent />
          </ToastProvider>
        </ShopProvider>
      </AsyncErrorBoundary>
    </ErrorBoundary>
  )
}

export default App
