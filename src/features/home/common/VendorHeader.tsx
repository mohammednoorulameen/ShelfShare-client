import { useEffect, useState } from "react";
import { Moon, Sun, Search, Menu } from "lucide-react";

interface VendorHeaderProps {
  onToggleSidebar?: () => void; // for mobile sidebar open/close
}

const VendorHeader = ({ onToggleSidebar }: VendorHeaderProps) => {
  const [isDark, setIsDark] = useState(false);
  const [search, setSearch] = useState("");

  // Toggle Tailwind Dark Mode
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  return (
    <header
      className="
        flex items-center justify-between
        px-4 lg:px-6 py-3
        bg-white border-b border-slate-200
        dark:bg-slate-900 dark:border-slate-700
        sticky top-0 z-20
      "
    >
      {/* Left — mobile sidebar button + title */}
      <div className="flex items-center gap-3">
        {/* Mobile menu */}
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          >
            <Menu className="w-5 h-5 text-slate-700 dark:text-slate-200" />
          </button>
        )}

        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Vendor Dashboard
        </h2>
      </div>

      {/* Center — search bar */}
      <div className="hidden sm:flex flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search vendors, books, users..."
            className="
              w-full pl-9 pr-3 py-2 text-xs rounded-lg
              border border-slate-200
              bg-white focus:ring-2 focus:ring-blue-500
              dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100
            "
          />
        </div>
      </div>

      {/* Right — dark mode + avatar */}
      <div className="flex items-center gap-4">
        {/* Dark mode toggle */}
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="
            p-2 rounded-full border border-slate-200 hover:bg-slate-100
            dark:border-slate-700 dark:hover:bg-slate-800
          "
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-yellow-300" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700 dark:text-slate-200" />
          )}
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center">
            AD
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs font-medium text-slate-900 dark:text-slate-100">
              Vendore
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              Super vendor
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VendorHeader;
