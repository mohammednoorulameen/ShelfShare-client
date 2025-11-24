

import React from 'react';
import { Search, Bell, BookOpen, Compass, User } from 'lucide-react';

// interface HeaderProps {
//   onOpenAI: () => void;
// }

const UserHeader: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <BookOpen className="w-6 h-6" />
          <span className="text-xl font-bold tracking-tight">Readify</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-0 sm:text-sm"
            placeholder="Search Books, Author and More"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <User className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Account</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity hidden sm:flex">
            <Compass className="w-5 h-5" />
            <span className="text-sm font-medium">Explore</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
            <Bell className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Notification</span>
          </div>

           {/* <div 
            //  onClick={onOpenAI}
             className="flex items-center gap-1 cursor-pointer hover:bg-blue-700 px-3 py-1 rounded-full transition-colors bg-blue-500/30 border border-blue-400"
           >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Ask AI</span>
          </div> */}

          <div className="cursor-pointer hover:opacity-80 transition-opacity hidden lg:block">
            <span className="text-sm font-medium">Become Seller</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;
