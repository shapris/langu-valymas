import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Properties from './pages/Properties'
import Orders from './pages/Orders'
import Tasks from './pages/Tasks'
import Finances from './pages/Finances'
import Routes from './pages/Routes'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/finances" element={<Finances />} />
              <Route path="/routes" element={<Routes />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App