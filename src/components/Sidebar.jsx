import { Link, useLocation } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  LogOut,
  School,
  BadgeHelp,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <GraduationCap size={20} />,
    },
    {
      name: "Teachers",
      path: "/teachers",
      icon: <Users size={20} />,
    },
{
  name: "Help",
  path: "/help",
  icon: <BadgeHelp size={20} />,
},
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white shadow-xl flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-700">
        <School size={34} className="text-blue-500" />
        <h1 className="text-2xl font-bold tracking-wide">LMS</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-slate-800 text-gray-300 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-700 p-4">
        <SignOutButton>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition duration-200">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}

export default Sidebar;