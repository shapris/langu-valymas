import React, { useState } from 'react'
import { Plus, Search, Phone, Mail, MapPin, Building2, User } from 'lucide-react'

const mockClients = [
  { 
    id: 1, 
    name: 'UAB "Verslo centras"', 
    type: 'Juridinis',
    contact: 'Ona Petraitienė',
    email: 'ona@verslocentras.lt', 
    phone: '+370 600 12345', 
    address: 'Gedimino pr. 15, Vilnius',
    lastService: '2024-01-15',
    totalOrders: 12
  },
  { 
    id: 2, 
    name: 'Petras Jonaitis', 
    type: 'Fizinis',
    contact: 'Petras Jonaitis',
    email: 'petras.jonaitis@gmail.com', 
    phone: '+370 612 34567', 
    address: 'Žalioji g. 8, Kaunas',
    lastService: '2024-01-20',
    totalOrders: 5
  },
  { 
    id: 3, 
    name: 'Biurų kompleksas "Panorama"', 
    type: 'Juridinis',
    contact: 'Rūta Kazlauskienė',
    email: 'ruta@panorama.lt', 
    phone: '+370 605 98765', 
    address: 'Konstitucijos pr. 21, Vilnius',
    lastService: '2024-01-25',
    totalOrders: 24
  },
]

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Klientai</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Pridėti klientą
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Ieškoti klientų..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${client.type === 'Juridinis' ? 'bg-blue-100' : 'bg-green-100'}`}>
                  {client.type === 'Juridinis' ? 
                    <Building2 className={`h-6 w-6 ${client.type === 'Juridinis' ? 'text-blue-600' : 'text-green-600'}`} /> :
                    <User className="h-6 w-6 text-green-600" />
                  }
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    client.type === 'Juridinis' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {client.type}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <User className="h-4 w-4 mr-2" />
                {client.contact}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                {client.email}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                {client.phone}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {client.address}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Paskutinis aptarnavimas:</span>
                <span className="font-medium text-gray-900">{client.lastService}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-600">Iš viso užsakymų:</span>
                <span className="font-medium text-gray-900">{client.totalOrders}</span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm">
                Peržiūrėti
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 text-sm">
                Redaguoti
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}