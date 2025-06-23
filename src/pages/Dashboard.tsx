import React from 'react'
import { Users, Building2, Calendar, CheckSquare, DollarSign, TrendingUp } from 'lucide-react'

const stats = [
  { name: 'Aktyvūs klientai', value: '127', icon: Users, color: 'bg-blue-500', change: '+12%' },
  { name: 'Objektai', value: '89', icon: Building2, color: 'bg-green-500', change: '+5%' },
  { name: 'Šios savaitės užsakymai', value: '23', icon: Calendar, color: 'bg-purple-500', change: '+18%' },
  { name: 'Laukiančios užduotys', value: '8', icon: CheckSquare, color: 'bg-orange-500', change: '-3%' },
]

const recentOrders = [
  { id: 1, client: 'UAB "Verslo centras"', address: 'Gedimino pr. 15', status: 'Vykdomas', time: '10:30' },
  { id: 2, client: 'Privatūs namai - Petras', address: 'Žalioji g. 8', status: 'Naujas', time: '14:00' },
  { id: 3, client: 'Biurų kompleksas "Panorama"', address: 'Konstitucijos pr. 21', status: 'Baigtas', time: '09:15' },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Naujas': return 'bg-blue-100 text-blue-800'
    case 'Vykdomas': return 'bg-yellow-100 text-yellow-800'
    case 'Baigtas': return 'bg-green-100 text-green-800'
    case 'Atšauktas': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Pagrindinis puslapis</h1>
        <p className="text-gray-600">Sveiki sugrįžę! Čia matote šiandienos veiklos apžvalgą.</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Orders */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Šiandienos užsakymai</h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{order.client}</p>
                  <p className="text-xs text-gray-600">{order.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-500">{order.time}</span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Revenue */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Savaitės pajamos</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Pirmadienis</span>
              <span className="text-sm font-medium text-gray-900">€245</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Antradienis</span>
              <span className="text-sm font-medium text-gray-900">€320</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Trečiadienis</span>
              <span className="text-sm font-medium text-gray-900">€180</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Ketvirtadienis</span>
              <span className="text-sm font-medium text-gray-900">€290</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Penktadienis</span>
              <span className="text-sm font-medium text-green-600 text-base">€410</span>
            </div>
            <hr className="my-3" />
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-gray-900">Iš viso:</span>
              <span className="text-lg font-bold text-green-600">€1,445</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}