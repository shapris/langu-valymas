import React from 'react'
import { Plus, Building2, Users, DollarSign } from 'lucide-react'

const mockCompanies = [
  { id: 1, name: 'Tech Corp', industry: 'Technology', employees: 150, revenue: '$2.5M', contacts: 5 },
  { id: 2, name: 'Design Studio', industry: 'Design', employees: 25, revenue: '$500K', contacts: 3 },
  { id: 3, name: 'Marketing Inc', industry: 'Marketing', employees: 75, revenue: '$1.2M', contacts: 8 },
]

export default function Companies() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Companies</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add Company
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCompanies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                <p className="text-sm text-gray-600">{company.industry}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Employees</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{company.employees}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Revenue</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{company.revenue}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Contacts</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{company.contacts}</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm">
                View Details
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 text-sm">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}