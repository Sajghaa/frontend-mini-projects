import { Menu, Bell, User } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm px-4 py-3 flex justify-between items-center">
      <button onClick={onMenuClick} className="lg:hidden">
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex items-center gap-4 ml-auto">
        <button className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full" />
        </button>
        <button className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <span className="hidden md:inline">John Doe</span>
        </button>
      </div>
    </header>
  )
}