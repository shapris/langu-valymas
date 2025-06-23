import React, { useState } from 'react'
import { Plus, CheckSquare, Clock, User, AlertCircle } from 'lucide-react'

const mockTasks = [
  { 
    id: 1, 
    title: 'Susisiekti su nauju klientu', 
    description: 'Paskambinti UAB "Nauja įmonė" dėl langų valymo paslaugų',
    assignee: 'Jonas Darbuotojas',
    dueDate: '2024-02-10',
    priority: 'Aukštas',
    type: 'Komunikacija',
    completed: false
  },
  { 
    id: 2, 
    title: 'Paruošti įrangą rytojaus darbams', 
    description: 'Patikrinti ir paruošti visą reikalingą įrangą Gedimino pr. objektui',
    assignee: 'Tomas Darbuotojas',
    dueDate: '2024-02-09',
    priority: 'Vidutinis',
    type: 'Paruošimas',
    completed: false
  },
  { 
    id: 3, 
    title: 'Atnaujinti klientų duomenis', 
    description: 'Įvesti naują kontaktinę informaciją 5 klientams',
    assignee: 'Ona Administratorė',
    dueDate: '2024-02-12',
    priority: 'Žemas',
    type: 'Administracija',
    completed: true
  },
  { 
    id: 4, 
    title: 'Patikrinti valymo medžiagų atsargas', 
    description: 'Inventorizuoti valymo chemijos atsargas ir užsakyti trūkstamas',
    assignee: 'Antanas Specialistas',
    dueDate: '2024-02-11',
    priority: 'Aukštas',
    type: 'Ūkis',
    completed: false
  },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Aukštas': return 'bg-red-100 text-red-800'
    case 'Vidutinis': return 'bg-yellow-100 text-yellow-800'
    case 'Žemas': return 'bg-green-100 text-green-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Komunikacija': return 'bg-blue-100 text-blue-800'
    case 'Paruošimas': return 'bg-purple-100 text-purple-800'
    case 'Administracija': return 'bg-indigo-100 text-indigo-800'
    case 'Ūkis': return 'bg-orange-100 text-orange-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getPriorityIcon = (priority: string) => {
  if (priority === 'Aukštas') {
    return <AlertCircle className="h-4 w-4 text-red-500" />
  }
  return null
}

export default function Tasks() {
  const [tasks, setTasks] = useState(mockTasks)

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Užduotys</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Nauja užduotis
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className={`bg-white rounded-lg shadow p-6 ${task.completed ? 'opacity-75' : ''}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`mt-1 p-1 rounded ${
                    task.completed 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  <CheckSquare className="h-4 w-4" />
                </button>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className={`text-lg font-medium ${
                      task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                    }`}>
                      {task.title}
                    </h3>
                    {getPriorityIcon(task.priority)}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{task.assignee}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{task.dueDate}</span>
                    </div>
                    
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(task.type)}`}>
                      {task.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900 text-sm">Redaguoti</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Šalinti</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}