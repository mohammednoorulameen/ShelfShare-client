
import React, { useState } from "react";

import { Outlet } from "react-router-dom";


import { FcMenu } from "react-icons/fc";
import Sidebar from "../../common/Sidebar";
import AdminHeader from "../../common/AdminHeader";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile
  const [collapsed, setCollapsed] = useState(false); // desktop

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900">

      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0`}
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center justify-between bg-white px-4 py-3 shadow-sm border-b border-slate-200">
          <span className="font-bold text-lg text-slate-800">Admin Panel</span>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-slate-100"
          >
            <FcMenu className="w-6 h-6 text-slate-600" />
          </button>
        </div>
          
           <AdminHeader onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        {/* Routed Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};


export default AdminLayout;
