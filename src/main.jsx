/**
 * @fileoverview Application entry point - sets up React root and renders the main App component
 * Initializes the React 18 concurrent features with StrictMode for development benefits
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Initialize and render the React application
 * Uses React 18's createRoot API for concurrent features
 * Wraps the app in StrictMode for additional development checks
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
