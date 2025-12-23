// src/pages/admin/AdminLayout.tsx

import { useState } from "react";
import { Outlet } from "react-router-dom";
import useLogout from "@/app/hooks/useLogout";
import SidebarLayout from "../../common/Sidebar";
import AdminHeader from "../../common/AdminHeader";
import { adminMenu } from "@/app/constants/Icons";
import { FcLibrary } from "react-icons/fc";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false); // desktop collapse
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile drawer
  const logout = useLogout();

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">

      {/* ---- Mobile Backdrop ---- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* ---- Sidebar ---- */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0
        `}
      >
        <SidebarLayout
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          menuItems={adminMenu}
          profile={{
            name: "Admin Ameen",
            email: "admin@gmail.com",
            photo: "https://i.pravatar.cc/100?img=11",
          }}
          onLogout={logout}
          title="Admin Panel"
          logo={<FcLibrary className="w-6 h-6 text-white" />}
        />
      </div>

      {/* ---- Main Content Wrapper ---- */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* ---- Header ---- */}
        <AdminHeader
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />

        {/* ---- Routed Content ---- */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

