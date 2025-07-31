export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/95 backdrop-blur-lg border-t border-gray-200 mt-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg scale-on-hover">
                <span className="text-xl font-bold">🛒</span>
              </div>
              <h2 className="text-heading-5 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ShopContext
              </h2>
            </div>
            <p className="text-body text-gray-600 mb-6 max-w-xs">
              Your trusted destination for quality products at great prices. Shop with confidence and enjoy our premium shopping experience.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-body-small font-medium text-gray-700">Follow us:</span>
              <div className="flex items-center space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-100 hover:bg-indigo-100 rounded-lg flex items-center justify-center transition-all duration-200 focus-ring"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-4 h-4 text-gray-600 hover:text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-100 hover:bg-indigo-100 rounded-lg flex items-center justify-center transition-all duration-200 focus-ring"
                  aria-label="Follow us on Twitter"
                >
                  <svg className="w-4 h-4 text-gray-600 hover:text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-100 hover:bg-indigo-100 rounded-lg flex items-center justify-center transition-all duration-200 focus-ring"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-4 h-4 text-gray-600 hover:text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.016-2.2-.734-3.425.282-1.225 1.102-2.271 2.244-2.863 1.142-.592 2.485-.652 3.676-.165 1.191.487 2.108 1.451 2.512 2.638.404 1.187.245 2.49-.436 3.566-.681 1.076-1.812 1.808-3.065 1.808zm7.119 0c-1.253 0-2.384-.732-3.065-1.808-.681-1.076-.84-2.379-.436-3.566.404-1.187 1.321-2.151 2.512-2.638 1.191-.487 2.534-.427 3.676.165 1.142.592 1.962 1.638 2.244 2.863.282 1.225.014 2.477-.734 3.425-.749.948-1.9 1.559-3.197 1.559z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-heading-6 text-gray-900 mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-heading-6 text-gray-900 mb-4">Customer Service</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Size Guide
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Support Center
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Track Your Order
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-heading-6 text-gray-900 mb-4">Legal & Contact</h3>
            <nav className="mb-6">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-body-small text-gray-600 hover:text-indigo-600 transition-colors duration-200 focus-ring rounded"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </nav>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-body-small text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@shopcontext.com</span>
              </div>
              <div className="flex items-center space-x-2 text-body-small text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>1-800-SHOP-NOW</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="text-heading-6 text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-body-small text-gray-600 mb-4">
              Subscribe to our newsletter for exclusive deals and product updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input flex-1 text-body-small"
                aria-label="Email address for newsletter"
              />
              <button className="btn-primary px-6 py-3 text-body-small">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-body-small text-gray-600">
                © {currentYear} ShopContext. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-caption text-gray-500">
                <span>Made with ❤️ for shoppers</span>
                <span>•</span>
                <span>Trusted by 10,000+ customers</span>
              </div>
            </div>
            
            {/* Payment Methods & Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-3">
                <span className="text-body-small text-gray-500">Secure payments:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">MC</span>
                  </div>
                  <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">AMEX</span>
                  </div>
                  <div className="w-10 h-6 bg-indigo-600 rounded flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs font-bold">PP</span>
                  </div>
                </div>
              </div>
              
              {/* Security Badge */}
              <div className="flex items-center space-x-2 text-body-small text-gray-500">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}