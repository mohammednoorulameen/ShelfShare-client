import { Account_Dashboard_Tabs } from "@/app/constants/Icons";
import { Moon, Trash2, CheckCircle } from "lucide-react";
import { useState, type FC } from "react";
import PersonalInfoPage from "../pages/PersonalInfoPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import { motion, AnimatePresence } from "framer-motion";
import type { PersonalInfoProps } from "../../types/PersonalInfo";

const AccountDashboard: FC<PersonalInfoProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState("personalinfo");
  const DEFAULT_AVATAR =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  // Switch Case - Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "personalinfo":
        return <PersonalInfoPage />;

      case "changepassword":
        return <ChangePasswordPage />;

      case "rentalhistory":
        return <p>Rental History Content...</p>;

      case "favorites":
        return <p>Favorites Content...</p>;

      case "referral":
        return <p>Referral Content...</p>;

      case "address":
        return <p>Address Content...</p>;

      case "wallet":
        return <p>Wallet Content...</p>;

      default:
        return <p>No Content Found</p>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 bg-gray-50 px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6">Account</h1>

        <div className="bg-white rounded-lg shadow p-5 sm:p-8 mb-8">
          {/* Container */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5">
            {/* LEFT SECTION */}
            <div className="flex items-center gap-5 sm:gap-6 w-full">
              {/* <div className="relative">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-300 rounded-full overflow-hidden"></div>
            
                <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>
              </div> */}

              <div className="relative">
                <img
                  src={user.imagekey || DEFAULT_AVATAR}
                  alt="Profile"
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                />

                <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-center sm:text-left">
                <h2 className="text-lg sm:text-2xl font-bold mb-1">
                  {user.userName}
                </h2>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-green-600 text-xs sm:text-sm font-semibold mb-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  {user.isEmailVerified ? "Verified" : "not Verified"}
                </div>

                <p className="text-gray-600 text-sm sm:text-base">
                  {user.email}
                </p>
              </div>
            </div>

            {/* RIGHT BUTTONS (MOBILE BELOW + RIGHT) */}
            <div
              className="
      flex gap-3 sm:gap-4 
      w-full sm:w-auto 
      justify-end sm:justify-normal 
      mt-3 sm:mt-0
    "
            >
              <button className="p-2 hover:bg-gray-100 rounded">
                <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Trash2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 sm:gap-8 min-w-max">
            {Account_Dashboard_Tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className={`pb-3 sm:pb-4 flex items-center gap-2 text-sm sm:text-base font-semibold whitespace-nowrap ${
                  activeTab === tab.name
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <tab.icon size={16} />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-lg shadow min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AccountDashboard;
