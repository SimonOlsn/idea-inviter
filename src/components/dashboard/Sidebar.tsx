import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Zap,
  LayoutDashboard, 
  Power,
  BarChart3,
  Settings as SettingsIcon,
  Camera,
  LogOut
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const NavItem: React.FC<{
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ to, icon, children }) => (
  <Link
    to={to}
    className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
  >
    {icon}
    <span className="ml-3">{children}</span>
  </Link>
);

export const Sidebar: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 bg-white border-r flex flex-col h-full">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold">Gfiex</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <NavItem to="/dashboard" icon={<LayoutDashboard className="h-5 w-5" />}>
          Dashboard
        </NavItem>
        <NavItem to="/dashboard/devices" icon={<Power className="h-5 w-5" />}>
          Devices
        </NavItem>
        <NavItem to="/dashboard/cameras" icon={<Camera className="h-5 w-5" />}>
          Cameras
        </NavItem>
        <NavItem to="/dashboard/analytics" icon={<BarChart3 className="h-5 w-5" />}>
          Analytics
        </NavItem>
        <NavItem to="/dashboard/settings" icon={<SettingsIcon className="h-5 w-5" />}>
          Settings
        </NavItem>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md w-full"
        >
          <LogOut className="h-5 w-5" />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
};