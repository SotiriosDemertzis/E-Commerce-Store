export default function Footer() {
  return (
    <footer className="bg-white/95 backdrop-blur-lg border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold">🛒</span>
              </div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ShopContext
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted destination for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 ShopContext. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">Secure payments with</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
              <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
              <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}