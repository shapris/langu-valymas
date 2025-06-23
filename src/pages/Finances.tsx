import React from 'react'
import { DollarSign, TrendingUp, TrendingDown, Calendar, CreditCard, Euro } from 'lucide-react'

const monthlyStats = [
  { month: 'Sausis', income: 4250, expenses: 1200, profit: 3050 },
  { month: 'Vasaris', income: 3800, expenses: 1100, profit: 2700 },
  { month: 'Kovas', income: 5200, expenses: 1350, profit: 3850 },
  { month: 'Balandis', income: 4900, expenses: 1250, profit: 3650 },
]

const recentTransactions = [
  { id: 1, type: 'Pajamos', description: 'UAB "Verslo centras" - langų valymas', amount: 150, date: '2024-02-08' },
  { id: 2, type: 'Išlaidos', description: 'Valymo medžiagų pirkimas', amount: -45, date: '2024-02-07' },
  { id: 3, type: 'Pajamos', description: 'Petras Jonaitis - privatūs namai', amount: 45, date: '2024-02-06' },
  { id: 4, type: 'Išlaidos', description: 'Kuro išlaidos', amount: -35, date: '2024-02-05' },
  { id: 5, type: 'Pajamos', description: 'Biurų kompleksas "Panorama"', amount: 320, date: '2024-02-04' },
]

export default function Finances() {
  const currentMonth = monthlyStats[monthlyStats.length - 1]
  const previousMonth = monthlyStats[monthlyStats.length - 2]
  const incomeChange = ((currentMonth.income - previousMonth.income) / previousMonth.income * 100).toFixed(1)
  const profitChange = ((currentMonth.profit - previousMonth.profit) / previousMonth.profit * 100).toFixed(1)

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Finansai</h1>
        <p className="text-gray-600">Pajamų ir išlaidų apžvalga</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Šio mėnesio pajamos</p>
              <p className="text-2xl font-bold text-green-600">€{currentMonth.income}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <span className={`text-sm font-medium ${parseFloat(incomeChange) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {parseFloat(incomeChange) >= 0 ? '+' : ''}{incomeChange}%
            </span>
            <span className="text-sm text-gray-600 ml-2">nuo praėjusio mėnesio</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Šio mėnesio išlaidos</p>
              <p className="text-2xl font-bold text-red-600">€{currentMonth.expenses}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <TrendingDown className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-600">Valymo medžiagos, kuras, įranga</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Šio mėnesio pelnas</p>
              <p className="text-2xl font-bold text-blue-600">€{currentMonth.profit}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <span className={`text-sm font-medium ${parseFloat(profitChange) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {parseFloat(profitChange) >= 0 ? '+' : ''}{profitChange}%
            </span>
            <span className="text-sm text-gray-600 ml-2">nuo praėjusio mėnesio</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Overview */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Mėnesių palyginimas</h2>
          <div className="space-y-4">
            {monthlyStats.map((stat, index) => (
              <div key={stat.month} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{stat.month}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-green-600">Pajamos: €{stat.income}</span>
                    <span className="text-xs text-red-600">Išlaidos: €{stat.expenses}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-blue-600">€{stat.profit}</p>
                  <p className="text-xs text-gray-500">pelnas</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Paskutinės operacijos</h2>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 border-l-4 border-gray-200 bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      transaction.type === 'Pajamos' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.type}
                    </span>
                    <span className="text-xs text-gray-500">{transaction.date}</span>
                  </div>
                  <p className="text-sm text-gray-900 mt-1">{transaction.description}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-bold ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}€{Math.abs(transaction.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}