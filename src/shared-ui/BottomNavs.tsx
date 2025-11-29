import React, { useEffect, useState } from "react";
import { Home, Play, Star, User, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const BottomNav: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling DOWN → hide nav
        setHidden(true);
      } else {
        // scrolling UP → show nav
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      animate={{ y: hidden ? 70 : 0 }}
      transition={{ duration: 0.25 }}
      className="
        fixed bottom-0 left-0 w-full bg-white border-t shadow-md 
        flex justify-between px-6 py-2 z-50 sm:hidden
      "
    >
      <div className="flex flex-col items-center text-blue-600">
        <Home size={22} />
        <span className="text-[11px] font-medium">Home</span>
      </div>

      <div className="flex flex-col items-center text-gray-600">
        <Play size={22} />
        <span className="text-[11px] font-medium">Play</span>
      </div>

      <div className="flex flex-col items-center text-gray-600">
        <Star size={22} />
        <span className="text-[11px] font-medium">Top Deals</span>
      </div>

      <div className="flex flex-col items-center text-gray-600">
        <User size={22} />
        <span className="text-[11px] font-medium">Account</span>
      </div>

      <div className="flex flex-col items-center text-gray-600 relative">
        <ShoppingCart size={22} />
        <span className="text-[11px] font-medium">Cart</span>

        <span
          className="
            absolute top-0 right-2 bg-red-500 text-white text-[10px] 
            font-bold rounded-full h-4 w-4 flex items-center justify-center
          "
        >
          3
        </span>
      </div>
    </motion.div>
  );
};

export default BottomNav;
