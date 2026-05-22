import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import RecentOrders from './components/RecentOrders'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard title="Total Revenue" value="$45,231" trend="+20.1%" />
            <StatsCard title="Subscriptions" value="+2,350" trend="+180.1%" />
            <StatsCard title="Sales" value="12,234" trend="+19%" />
            <StatsCard title="Active Users" value="573" trend="+201" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentOrders />
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
              <h2 className="text-lg font-semibold mb-4">Activity Overview</h2>
              <div className="h-64 flex items-center justify-center text-gray-400">
                Placeholder for chart (e.g. Recharts)
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App