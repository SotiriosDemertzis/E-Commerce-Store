import Header from './component/Header'
import ProductGrid from './component/ProductGrid'
import ProductFilters from './component/ProductFilters'
import CartSidebar from './component/CartSideBar'
import Footer from './component/Footer'
import { ShopProvider } from './context'

function App() {

  return (
    <ShopProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.08),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.08),transparent_50%)] pointer-events-none"></div>
        
        <div className="relative z-10">
          <Header />
          <ProductFilters />
          
          <main className="max-w-7xl mx-auto px-6 pb-12">
            <ProductGrid /> 
          </main>

          <Footer />
          <CartSidebar /> 
        </div>
      </div>
    </ShopProvider>
  )
}

export default App
