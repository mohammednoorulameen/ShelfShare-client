import React, { useState } from "react";
import {
  Search,
  Filter,
  Mail,
  Phone,
  ShieldAlert,
  CheckCircle,
  XCircle,
  Shield,
} from "lucide-react";
import type { User, UserMgmntProps } from "../../types/responseUser.types";


/*------
  Vendor status checking
 -----------------------*/


const getVendorStatus = (user: User) => {
  if (!user.isEmailVerified)
    return { label: "Email not verified", type: "emailPending" };

  if (user.status === "blocked") return { label: "Blocked", type: "blocked" };
  return { label: "verified", type: "verified" };
};

const fallbackImg = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const UserMgmnt: React.FC<UserMgmntProps> = ({
  users,
  page,
  totalPages,
  setPage,
  isLoading,
  isError,
  onToggleBlock
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVendors = users.filter(
    (user) =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading)
    return <p className="text-center text-sm text-slate-500">Loading...</p>;

  if (isError)
    return (
      <p className="text-center text-sm text-red-500">
        Failed to fetch vendors
      </p>
    );

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            User Management
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage User accounts access
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search user..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>

          <button className="p-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 text-slate-600 shadow-sm">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Vendors Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                  Vendor
                </th>
                <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                  Contact
                </th>
                <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                  Status
                </th>
                <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wide text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredVendors.map((user) => {
                const { label, type } = getVendorStatus(user);

                const badgeClasses =
                  type === "verified"
                    ? "bg-green-50 text-green-700 border-green-200"
                    : type === "blocked"
                    ? "bg-red-50 text-red-700 border-red-200"
                    : type === "emailPending"
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : "bg-blue-50 text-blue-700 border-blue-200";

                const Icon =
                  type === "verified"
                    ? CheckCircle
                    : type === "blocked"
                    ? XCircle
                    : Shield;

                return (
                  <tr key={user._id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.imageKey || fallbackImg}
                          alt={user.userName}
                          className="w-9 h-9 rounded-full object-cover border border-slate-100"
                        />

                        <div>
                          <p className="font-medium text-sm text-slate-900 flex items-center gap-1">
                            {user.userName}
                            {user.isEmailVerified && (
                              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            )}
                          </p>

                          <p className="text-[11px] text-slate-500">
                            {user.userId}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          {user.phoneNumber}
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium capitalize border ${badgeClasses}`}
                      >
                        <Icon className="w-3 h-3 mr-1" />
                        {label}
                      </span>
                    </td>

                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                       
                        {type !== "blocked" ? (
                          <button 
                          onClick={()=> onToggleBlock(user._id)}
                          className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-red-600 bg-white border border-red-200 rounded-md hover:bg-red-50 transition shadow-sm">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            Block
                          </button>
                        ) : (
                          <button
                          onClick={()=> onToggleBlock(user._id)}
                           className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition shadow-sm">
                            <Shield className="w-3.5 h-3.5" />
                            Unblock
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end gap-3 p-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="px-3 py-1 text-xs border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-3 py-1 text-xs border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {filteredVendors.length === 0 && (
            <div className="p-6 text-center text-sm text-slate-500">
              No vendors found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserMgmnt;
