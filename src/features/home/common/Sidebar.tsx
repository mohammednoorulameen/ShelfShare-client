import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import type { SidebarLayoutProps, SidebarMenuItem } from "../types/sidebar.types";
import toast from "react-hot-toast";

const SidebarLayout = ({
  collapsed,
  setCollapsed,
  menuItems,
  profile,
  onLogout,
  logo,
  title,
  disabled = false, 
}: SidebarLayoutProps) => {
  const blockClick = () => {
    if (disabled) {
      toast.error("Admin has not verified your vendor account yet!");
    }
  };

  return (
    <div
      className={`
        flex flex-col h-full bg-white border-r border-slate-200
        transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}
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
            <div className="bg-blue-500 p-2 rounded-lg shadow-sm">{logo}</div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight">
              {title}
            </h1>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-slate-100"
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
        {menuItems.map((item: SidebarMenuItem, index) => (
          <div
            key={index}
            onClick={blockClick}
            className={disabled ? "opacity-50 cursor-not-allowed" : ""}
          >
            <NavLink
              to={disabled ? "#" : item.path}
              onClick={(e) => disabled && e.preventDefault()}
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
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        className={`border-t border-slate-200 p-3 flex items-center ${
          collapsed ? "justify-center" : "gap-3"
        }`}
      >
        <img
          src={profile.photo}
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover"
        />

        {!collapsed && (
          <div className="flex-1 leading-tight">
            <p className="text-sm font-semibold text-slate-800">
              {profile.name}
            </p>
            <p className="text-xs text-slate-500">{profile.email}</p>
          </div>
        )}

        {!collapsed && (
          <button
            onClick={onLogout}
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

export default SidebarLayout;


