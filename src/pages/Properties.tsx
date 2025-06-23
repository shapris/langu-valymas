import React from 'react'
import { Plus, Building2, Home, MapPin, Calendar } from 'lucide-react'

const mockProperties = [
  { 
    id: 1, 
    name: 'Verslo centras "Gediminas"', 
    type: 'Biurų pastatas',
    address: 'Gedimino pr. 15, Vilnius',
    client: 'UAB "Verslo centras"',
    windows: 120,
    floors: 8,
    lastCleaning: '2024-01-15',
    nextScheduled: '2024-02-15'
  },
  { 
    id: 2, 
    name: 'Privatūs namai', 
    type: 'Gyvenamasis namas',
    address: 'Žalioji g. 8, Kaunas',
    client: 'Petras Jonaitis',
    windows: 18,
    floors: 2,
    lastCleaning: '2024-01-20',
    nextScheduled: '2024-02-20'
  },
  { 
    id: 3, 
    name: 'Biurų kompleksas "Panorama"', 
    type: 'Biurų kompleksas',
    address: 'Konstitucijos pr. 21, Vilnius',
    client: 'Biurų kompleksas "Panorama"',
    windows: 240,
    floors: 12,
    lastCleaning: '2024-01-25',
    nextScheduled: '2024-02-25'
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Biurų pastatas':
    case 'Biurų kompleksas':
      return Building2
    case 'Gyvenamasis namas':
      return Home
    default:
      return Building2
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Biurų pastatas':
    case 'Biurų kompleksas':
      return 'bg-blue-100 text-blue-800'
    case 'Gyvenamasis namas':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function Properties() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Objektai</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Pridėti objektą
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockProperties.map((property) => {
          const IconComponent = getTypeIcon(property.type)
          return (
            <div key={property.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{property.name}</h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(property.type)}`}>
                      {property.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {property.address}
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Klientas:</strong> {property.client}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600">Langų skaičius</p>
                  <p className="text-lg font-semibold text-gray-900">{property.windows}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600">Aukštų skaičius</p>
                  <p className="text-lg font-semibold text-gray-900">{property.floors}</p>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Paskutinis valymas:
                  </div>
                  <span className="font-medium text-gray-900">{property.lastCleaning}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Kitas suplanuotas:
                  </div>
                  <span className="font-medium text-blue-600">{property.nextScheduled}</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm">
                  Peržiūrėti
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 text-sm">
                  Redaguoti
                </button>
                <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-sm">
                  Užsakyti
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}