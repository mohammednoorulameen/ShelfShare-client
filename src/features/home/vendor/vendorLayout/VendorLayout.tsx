import { useState } from "react";
import { Outlet } from "react-router-dom";
import useLogout from "@/app/hooks/useLogout";
import SidebarLayout from "../../common/Sidebar";
import VendorHeader from "../../common/VendorHeader";
import { vendorMenu } from "@/app/constants/Icons";
import { FcLibrary } from "react-icons/fc";
import { useGetVendor } from "../api/VendorLayoutApi";

const VendorLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const logout = useLogout();
  const { data: vendor, isLoading } = useGetVendor();

  const fallbackImg = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const disabled = vendor && !vendor.isAdminVerified; 

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 bg-white shadow-xl
          transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0
        `}
      >
        <SidebarLayout
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          menuItems={vendorMenu}
          disabled={disabled} 
          profile={{
            name: vendor?.bussinessName || "Loading...",
            email: vendor?.email || "Loading...",
            photo: vendor?.imageKey || fallbackImg,
          }}
          onLogout={logout}
          title="Vendor Panel"
          logo={<FcLibrary className="w-6 h-6 text-white" />}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <VendorHeader
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {isLoading ? (
            <div className="text-center text-slate-600 text-sm">
              Loading vendor details...
            </div>
          ) : disabled ? (
            <div className="text-center mt-20">
              <h2 className="text-xl font-bold text-red-600">
                Your vendor account is not admin verified
              </h2>
              <p className="text-slate-600 mt-2">
                Please wait. You cannot access dashboard features until admin
                approves your account.
              </p>
              <p className="text-black mt-2">
                Contact Admin :{" "}
                <span className="font-bold">Admin@gmail.com</span>
              </p>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
};

export default VendorLayout;
