import React, { useState } from 'react'
import { Plus, CheckSquare, Clock, User } from 'lucide-react'

const mockTasks = [
  { 
    id: 1, 
    title: 'Follow up with Tech Corp', 
    description: 'Send proposal and schedule meeting',
    assignee: 'John Doe',
    dueDate: '2024-02-10',
    priority: 'High',
    completed: false
  },
  { 
    id: 2, 
    title: 'Prepare presentation', 
    description: 'Create slides for client meeting',
    assignee: 'Jane Smith',
    dueDate: '2024-02-12',
    priority: 'Medium',
    completed: false
  },
  { 
    id: 3, 
    title: 'Update CRM data', 
    description: 'Import new contacts from spreadsheet',
    assignee: 'Mike Johnson',
    dueDate: '2024-02-08',
    priority: 'Low',
    completed: true
  },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'bg-red-100 text-red-800'
    case 'Medium': return 'bg-yellow-100 text-yellow-800'
    case 'Low': return 'bg-green-100 text-green-800'
    default: return 'bg-gray-100 text-gray-800'
  }
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
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
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
                  <h3 className={`text-lg font-medium ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                  }`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                  
                  <div className="flex items-center space-x-4 mt-3">
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
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}