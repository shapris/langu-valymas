import React from 'react'
import { Plus, Calendar, MapPin, User, Clock, Euro } from 'lucide-react'

const mockOrders = [
  { 
    id: 1, 
    client: 'UAB "Verslo centras"',
    property: 'Verslo centras "Gediminas"',
    address: 'Gedimino pr. 15, Vilnius',
    date: '2024-02-10',
    time: '09:00',
    status: 'Naujas',
    price: 150,
    worker: 'Nepriskitas',
    notes: 'Reikia valyti visus langus iš išorės ir vidaus'
  },
  { 
    id: 2, 
    client: 'Petras Jonaitis',
    property: 'Privatūs namai',
    address: 'Žalioji g. 8, Kaunas',
    date: '2024-02-10',
    time: '14:00',
    status: 'Vykdomas',
    price: 45,
    worker: 'Tomas Darbuotojas',
    notes: 'Tik išorės langai'
  },
  { 
    id: 3, 
    client: 'Biurų kompleksas "Panorama"',
    property: 'Biurų kompleksas "Panorama"',
    address: 'Konstitucijos pr. 21, Vilnius',
    date: '2024-02-09',
    time: '08:00',
    status: 'Baigtas',
    price: 320,
    worker: 'Antanas Specialistas',
    notes: 'Mėnesinis valymas, visi langai'
  },
  { 
    id: 4, 
    client: 'UAB "Tech Solutions"',
    property: 'Biurų pastatas',
    address: 'Ukmergės g. 120, Vilnius',
    date: '2024-02-11',
    time: '10:30',
    status: 'Mokėjimo laukiama',
    price: 85,
    worker: 'Petras Meistras',
    notes: 'Darbas baigtas, laukiama apmokėjimo'
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Naujas': return 'bg-blue-100 text-blue-800'
    case 'Vykdomas': return 'bg-yellow-100 text-yellow-800'
    case 'Baigtas': return 'bg-green-100 text-green-800'
    case 'Mokėjimo laukiama': return 'bg-purple-100 text-purple-800'
    case 'Atšauktas': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function Orders() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Užsakymai</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Naujas užsakymas
        </button>
      </div>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">#{order.id} - {order.client}</h3>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{order.property}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {order.address}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {order.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {order.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Euro className="h-4 w-4 mr-2" />
                    {order.price}€
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <User className="h-4 w-4 mr-2" />
                  <span className="font-medium">Darbuotojas:</span>
                  <span className="ml-2">{order.worker}</span>
                </div>

                {order.notes && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Pastabos:</span> {order.notes}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                Peržiūrėti
              </button>
              <button className="text-green-600 hover:text-green-900 text-sm font-medium">
                Redaguoti
              </button>
              {order.status === 'Naujas' && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                  Pradėti darbą
                </button>
              )}
              {order.status === 'Vykdomas' && (
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm">
                  Užbaigti
                </button>
              )}
              {order.status === 'Mokėjimo laukiama' && (
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm">
                  Pažymėti apmokėtu
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}