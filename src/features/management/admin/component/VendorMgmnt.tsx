import React, { useState } from "react";
import {
  Search,
  Filter,
  Mail,
  Phone,
  ShieldCheck,
  ShieldAlert,
  CheckCircle,
  XCircle,
  Shield,
} from "lucide-react";
import type { VendorMgmntProps, Vendor } from "../../types/responseVendor.types";

/*---------------------------
  Vendor Status Checking Logic
----------------------------*/
const getVendorStatus = (vendor: Vendor) => {
  if (!vendor.isEmailVerified)
    return { label: "Email not verified", type: "emailPending" };

  if (vendor.status === "blocked") return { label: "Blocked", type: "blocked" };

  if (!vendor.isAdminVerified)
    return { label: "Pending admin approval", type: "pending" };

  return { label: "Verified", type: "verified" };
};

const fallbackImg = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const VendorMgmnt: React.FC<VendorMgmntProps> = ({
  vendors,
  page,
  totalPages,
  setPage,
  isLoading,
  isError,
  onToggleBlock,
  onToggleVerify,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // NEW — IMAGE PREVIEW STATE
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.bussinessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
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
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Vendor Management
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage vendor accounts, verification & access
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search vendor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-md text-xs 
              focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          <button className="p-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 text-slate-600 shadow-sm">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* VENDORS TABLE */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="table-head">Vendor</th>
                <th className="table-head">Contact</th>
                <th className="table-head">Status</th>
                <th className="table-head text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredVendors.map((vendor) => {
                const { label, type } = getVendorStatus(vendor);

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
                  <tr key={vendor._id} className="hover:bg-slate-50 transition">
                    {/* VENDOR INFO */}
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        {/* CLICKABLE IMAGE */}
                        <img
                          src={vendor.imageKey || fallbackImg}
                          alt={vendor.bussinessName}
                          onClick={() =>
                            setPreviewImage(vendor.imageKey || fallbackImg)
                          }
                          className="w-10 h-10 rounded-full object-cover border cursor-pointer 
                          hover:opacity-80 transition"
                        />

                        <div>
                          <p className="font-medium text-sm text-slate-900 flex items-center gap-1">
                            {vendor.bussinessName}
                            {vendor.isAdminVerified && (
                              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                            )}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {vendor.vendorId}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}
                    <td className="px-5 py-3">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          {vendor.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          {vendor.phoneNumber}
                        </div>
                      </div>
                    </td>

                    {/* STATUS */}
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] 
                        font-medium border ${badgeClasses}`}
                      >
                        <Icon className="w-3 h-3 mr-1" />
                        {label}
                      </span>
                    </td>

                    {/* ACTION BUTTONS */}
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* VERIFY / REJECT */}
                        {!vendor.isAdminVerified ? (
                          <button
                            onClick={() => onToggleVerify(vendor._id)}
                            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] 
                            font-medium text-white bg-green-500 rounded-md hover:bg-green-600 shadow-sm"
                          >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Verify
                          </button>
                        ) : (
                          <button
                            onClick={() => onToggleVerify(vendor._id)}
                            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] 
                            font-medium text-red-600 bg-white border border-red-200 rounded-md 
                            hover:bg-red-50 shadow-sm"
                          >
                            <XCircle className="w-3.5 h-3.5" />
                            Reject
                          </button>
                        )}

                        {/* BLOCK / UNBLOCK */}
                        {vendor.status !== "blocked" ? (
                          <button
                            onClick={() => onToggleBlock(vendor._id)}
                            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] 
                            font-medium text-red-600 bg-white border border-red-200 rounded-md 
                            hover:bg-red-50 shadow-sm"
                          >
                            <ShieldAlert className="w-3.5 h-3.5" />
                            Block
                          </button>
                        ) : (
                          <button
                            onClick={() => onToggleBlock(vendor._id)}
                            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] 
                            font-medium text-slate-600 bg-white border border-slate-200 rounded-md 
                            hover:bg-slate-50 shadow-sm"
                          >
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

          {filteredVendors.length === 0 && (
            <div className="p-6 text-center text-sm text-slate-500">
              No vendors found.
            </div>
          )}
        </div>

        {/* PAGINATION */}
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
      </div>

      {/* ------------------------------------
           FULL IMAGE PREVIEW MODAL
      ------------------------------------ */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewImage}
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            />

            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-2 bg-white text-slate-700 
              rounded-full px-2 py-1 text-xs font-medium shadow hover:bg-slate-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorMgmnt;










