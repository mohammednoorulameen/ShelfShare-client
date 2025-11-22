import { FcLibrary } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { SidebarProps } from "../types/home.types";
import { LogOut } from "lucide-react";
import useLogout from "@/app/hooks/useLogout";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", path: "overview" },
  { icon: Users, label: "Vendor", path: "vendormanagement" },
  { icon: BookOpen, label: "Book Management", path: "books" },
  { icon: Calendar, label: "Event Management", path: "events" },
  { icon: CreditCard, label: "Transaction Mgmt", path: "transactions" },
];

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const handleLogout = useLogout();
  return (
    <div
      className={`
        flex flex-col h-full bg-white border-r border-slate-200
        transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}
        lg:static lg:translate-x-0
      `}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between ${
          collapsed ? "px-3 py-4" : "px-6 py-6"
        }`}
      >
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg shadow-sm">
              <FcLibrary className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight">
              Admin Panel
            </h1>
          </div>
        )}

        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-slate-100 hidden lg:block"
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5 text-slate-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 space-y-1 overflow-y-auto py-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === ""}
            className={({ isActive }) =>
              `flex items-center ${
                collapsed ? "justify-center" : "gap-2 px-4"
              } py-3 text-xs font-medium rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <item.icon className="w-4 h-4" />
            {!collapsed && item.label}
          </NavLink>
        ))}
      </nav>

      <div
        className={`border-t border-slate-200 p-3 flex items-center ${
          collapsed ? "justify-center" : "gap-3"
        }`}
      >
        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/100?img=11"
          alt="Admin Avatar"
          className="w-9 h-9 rounded-full object-cover"
        />

        {/* Name + Email */}
        {!collapsed && (
          <div className="flex-1 leading-tight">
            <p className="text-sm font-semibold text-slate-800">
              Mohammed Ameen
            </p>
            <p className="text-xs text-slate-500">admin@gmail.com</p>
          </div>
        )}

        {/* Logout Icon */}
        {!collapsed && (
          <button
            onClick={() => handleLogout()}
            className="p-1.5 rounded-md hover:bg-red-50 text-red-500 transition"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
