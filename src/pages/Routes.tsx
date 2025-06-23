import React from 'react'
import { MapPin, Clock, User, Navigation, Plus } from 'lucide-react'

const mockRoutes = [
  {
    id: 1,
    name: 'Vilniaus centras - Pirmadienis',
    worker: 'Tomas Darbuotojas',
    date: '2024-02-12',
    startTime: '08:00',
    endTime: '16:00',
    totalStops: 5,
    status: 'Suplanuotas',
    stops: [
      { id: 1, client: 'UAB "Verslo centras"', address: 'Gedimino pr. 15', time: '09:00', duration: '2h' },
      { id: 2, client: 'Biurų kompleksas "Panorama"', address: 'Konstitucijos pr. 21', time: '11:30', duration: '3h' },
      { id: 3, client: 'Privatūs namai - Jonas', address: 'Žalioji g. 8', time: '15:00', duration: '1h' },
    ]
  },
  {
    id: 2,
    name: 'Kauno rajonas - Antradienis',
    worker: 'Antanas Specialistas',
    date: '2024-02-13',
    startTime: '09:00',
    endTime: '17:00',
    totalStops: 4,
    status: 'Vykdomas',
    stops: [
      { id: 4, client: 'Prekybos centras "Mega"', address: 'Islandijos pl. 32', time: '09:30', duration: '4h' },
      { id: 5, client: 'Privatūs namai - Petras', address: 'Ąžuolų g. 15', time: '14:00', duration: '1.5h' },
    ]
  },
  {
    id: 3,
    name: 'Vilniaus senamiestis - Trečiadienis',
    worker: 'Jonas Darbuotojas',
    date: '2024-02-14',
    startTime: '08:30',
    endTime: '15:30',
    totalStops: 6,
    status: 'Baigtas',
    stops: [
      { id: 6, client: 'Senamiestis - restoranas', address: 'Pilies g. 4', time: '09:00', duration: '1h' },
      { id: 7, client: 'Viešbutis "Senoji Vilnia"', address: 'Šv. Ignoto g. 12', time: '10:30', duration: '2h' },
      { id: 8, client: 'Kavinė "Užupis"', address: 'Užupio g. 9', time: '13:00', duration: '45min' },
    ]
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Suplanuotas': return 'bg-blue-100 text-blue-800'
    case 'Vykdomas': return 'bg-yellow-100 text-yellow-800'
    case 'Baigtas': return 'bg-green-100 text-green-800'
    case 'Atšauktas': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function Routes() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Maršrutai</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Naujas maršrutas
        </button>
      </div>

      <div className="space-y-6">
        {mockRoutes.map((route) => (
          <div key={route.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{route.name}</h3>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(route.status)}`}>
                    {route.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    {route.worker}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {route.startTime} - {route.endTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {route.totalStops} objektai
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Navigation className="h-4 w-4 mr-2" />
                    {route.date}
                  </div>
                </div>
              </div>
            </div>

            {/* Route Stops */}
            <div className="border-t pt-4">
              <h4 className="text-md font-medium text-gray-900 mb-3">Maršruto objektai:</h4>
              <div className="space-y-3">
                {route.stops.map((stop, index) => (
                  <div key={stop.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mr-4">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{stop.client}</p>
                          <p className="text-xs text-gray-600">{stop.address}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{stop.time}</p>
                          <p className="text-xs text-gray-600">{stop.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                Peržiūrėti žemėlapyje
              </button>
              <button className="text-green-600 hover:text-green-900 text-sm font-medium">
                Redaguoti maršrutą
              </button>
              {route.status === 'Suplanuotas' && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                  Pradėti maršrutą
                </button>
              )}
              {route.status === 'Vykdomas' && (
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm">
                  Užbaigti maršrutą
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}