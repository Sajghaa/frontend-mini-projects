import { X } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 z-30 h-full w-64 bg-white dark:bg-gray-800 shadow-xl
          transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:shadow-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <span className="text-xl font-bold text-indigo-600">DashStack</span>
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <SidebarItem label="Dashboard" icon="📊" active />
          <SidebarItem label="Analytics" icon="📈" />
          <SidebarItem label="Orders" icon="🛒" />
          <SidebarItem label="Customers" icon="👥" />
          <SidebarItem label="Settings" icon="⚙️" />
        </nav>
      </aside>
    </>
  )
}

function SidebarItem({ label, icon, active = false }: { label: string; icon: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
        ${active
          ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-200'
          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
        }
      `}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  )
}