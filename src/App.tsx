import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Store,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import Dashboard from './components/admin/Dashboard';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Products', icon: Package },
  { name: 'Users', icon: Users },
  { name: 'Orders', icon: ShoppingCart },
  { name: 'Vendors', icon: Store },
  { name: 'Settings', icon: Settings },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="bg-white border-r min-h-screen fixed lg:static z-30"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-xl font-bold">Admin Panel</h1>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <motion.button
                      key={item.name}
                      whileHover={{ x: 5 }}
                      onClick={() => setActiveTab(item.name)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left ${
                        activeTab === item.name
                          ? 'bg-green-50 text-green-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
              </div>
              <div className="absolute bottom-0 w-full p-6 border-t">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className="flex-1">
          {/* Top bar */}
          <div className="bg-white border-b sticky top-0 z-20">
            <div className="flex items-center gap-4 p-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-semibold">{activeTab}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {activeTab === 'Dashboard' && <Dashboard />}
            {/* Add other components for different tabs */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;