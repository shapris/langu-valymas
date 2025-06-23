import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import AuthModal from './components/AuthModal'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Properties from './pages/Properties'
import Orders from './pages/Orders'
import Tasks from './pages/Tasks'
import Finances from './pages/Finances'
import RoutesPage from './pages/Routes'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(true)

  const handleLogin = (email: string, password: string) => {
    // Simple demo authentication - in real app, this would validate against backend
    if (email && password) {
      setIsAuthenticated(true)
      setShowAuthModal(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setShowAuthModal(true)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">LV</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Langų Valymas CRM</h1>
          <p className="text-gray-600 mb-8">Profesionalus klientų valdymo sprendimas</p>
          <button
            onClick={() => setShowAuthModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
          >
            Prisijungti prie sistemos
          </button>
        </div>
        
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      </div>
    )
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
          onLogout={handleLogout}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/finances" element={<Finances />} />
              <Route path="/routes" element={<RoutesPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App