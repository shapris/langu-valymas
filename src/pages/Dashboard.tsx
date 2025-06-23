import React from 'react'
import { Users, Building2, DollarSign, CheckSquare } from 'lucide-react'

const stats = [
  { name: 'Total Contacts', value: '1,234', icon: Users, color: 'bg-blue-500' },
  { name: 'Companies', value: '89', icon: Building2, color: 'bg-green-500' },
  { name: 'Active Deals', value: '45', icon: DollarSign, color: 'bg-yellow-500' },
  { name: 'Pending Tasks', value: '23', icon: CheckSquare, color: 'bg-red-500' },
]

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your CRM.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-sm text-gray-600">New contact added: John Smith</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm text-gray-600">Deal closed: $15,000 with ABC Corp</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <p className="text-sm text-gray-600">Task completed: Follow up with client</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Call prospect - Tech Solutions Inc</p>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Today</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Send proposal to Marketing Agency</p>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Tomorrow</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Meeting with Development Team</p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">This Week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}