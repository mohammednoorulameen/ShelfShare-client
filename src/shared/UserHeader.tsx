import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Bell,
  BookOpen,
  Compass,
  User,
  Store,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import useLogout from "@/app/hooks/useLogout";
import { ACCOUNT_MENU_ITEMS } from "@/app/constants/Icons";

const UserHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const handleLogout = useLogout()

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /**--------------
   * Handle Dropdown Click
  ----------------*/
  const handleMenuClick = (action: string) => {
    if (action === "logout") {
      handleLogout();
      return;
    }

    navigate(action);
  };

  return (
    <header className="bg-white text-gray-900 sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-[1280px] mx-auto px-3 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer shrink-0">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold tracking-tight">Readify</span>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300"
            placeholder="Search Books, Author and More"
          />
        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5">

          {/* MOBILE ONLY */}
          <div className="flex items-center gap-5 sm:hidden">
            <Search className="w-6 h-6 cursor-pointer text-gray-700" />
            <div className="relative cursor-pointer">
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>
          </div>

          {/* DESKTOP ACCOUNT DROPDOWN */}
          <div className="hidden sm:block">
            <div
              className="relative"
              ref={dropRef}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {/* Trigger */}
              <div
                className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-700" />
                </div>

                <span className="text-sm font-medium">Account</span>

                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </motion.div>
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-[-35px] mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <ul className="py-0.5">
                      {ACCOUNT_MENU_ITEMS.map((item, index) => (
                        <motion.li
                          key={index}
                          className="border-b border-gray-100 last:border-0"
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 250, damping: 18 }}
                        >
                          <button
                            onClick={() => handleMenuClick(item.action)}
                            className="w-full flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 text-left"
                          >
                            <item.icon size={13} className="text-blue-600 min-w-[13px]" />
                            <span className="flex-1 text-[12px] font-medium truncate">
                              {item.label}
                            </span>
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* DESKTOP Explore */}
          <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:opacity-80">
            <Compass className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium">Explore</span>
          </div>

          {/* DESKTOP Notification */}
          <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:opacity-80">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium">Notification</span>
          </div>

          {/* DESKTOP Become Seller */}
          <div className="hidden lg:flex items-center gap-1 cursor-pointer hover:opacity-80"
          onClick={()=> navigate('/auth/vendor/login')}
          >
            <Store className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium">Become Seller</span>
          </div>
          <button onClick={()=> navigate('/vendor')}>clcik</button>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;


