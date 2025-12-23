













// import React, { useState } from "react";
// import {
//   Search,
//   Filter,
//   Mail,
//   Phone,
//   CheckCircle,
//   XCircle,
//   Shield,
// } from "lucide-react";

// import type {
//   VendorMgmntProps,
//   Vendor,
// } from "../../types/responseVendor.types";

// /*--------------
//   Vendor Status Checking Logic
// ------------------------------------*/

// const getVendorStatus = (vendor: Vendor) => {
//   // Admin verification first
//   if (vendor.isAdminVerifiedStatus === "pending")
//     return { label: "Pending admin approval", type: "pending" };

//   if (vendor.isAdminVerifiedStatus === "rejected")
//     return { label: "Rejected", type: "rejected" };

//   if (vendor.isAdminVerifiedStatus === "approved") {
//     // After approved, then check if blocked
//     if (vendor.status === "blocked")
//       return { label: "Blocked", type: "blocked" };

//     return { label: "Verified", type: "verified" };
//   }

//   return { label: "Unknown", type: "unknown" };
// };

// const fallbackImg = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

// const VendorMgmnt: React.FC<VendorMgmntProps> = ({
//   vendors,
//   page,
//   totalPages,
//   setPage,
//   isLoading,
//   isError,
//   onToggleBlock,
//   onToggleVerify,
// }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const [previewImage, setPreviewImage] = useState<string | null>(null);

//   // Reject Modal
//   const [showRejectModal, setShowRejectModal] = useState(false);
//   const [rejectReason, setRejectReason] = useState("");
//   const [rejectVendorId, setRejectVendorId] = useState<string | null>(null);

//   const filteredVendors = vendors.filter(
//     (vendor) =>
//       vendor.bussinessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (isLoading)
//     return <p className="text-center text-sm text-slate-500">Loading...</p>;

//   if (isError)
//     return (
//       <p className="text-center text-sm text-red-500">
//         Failed to fetch vendors
//       </p>
//     );

//   return (
//     <div className="space-y-5">
//       {/* HEADER */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//         <div>
//           <h2 className="text-xl font-semibold text-slate-800">
//             Vendor Management
//           </h2>
//           <p className="text-xs text-slate-500 mt-0.5">
//             Manage vendor verification, status & access
//           </p>
//         </div>

//         {/* SEARCH BAR */}
//         <div className="flex gap-2 w-full sm:w-auto">
//           <div className="relative flex-1 sm:w-56">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//             <input
//               type="text"
//               placeholder="Search vendor..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-md text-xs 
//               focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//             />
//           </div>

//           <button className="p-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 text-slate-600 shadow-sm">
//             <Filter className="w-4 h-4" />
//           </button>
//         </div>
//       </div>





















//       {/* TABLE */}
//       <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-slate-50 border-b border-slate-200">
//                 <th className="table-head">Index</th>
//                 <th className="table-head">Vendor</th>
//                 <th className="table-head">Contact</th>
//                 <th className="table-head">Status</th>
//                 <th className="table-head text-right">Actions</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-slate-100">
//               {filteredVendors.map((vendor,index) => {
//                 const { label, type } = getVendorStatus(vendor);

//                 const badgeClasses =
//                   type === "verified"
//                     ? "bg-green-50 text-green-700 border-green-200"
//                     : type === "blocked" || type === "rejected"
//                     ? "bg-red-50 text-red-700 border-red-200"
//                     : type === "emailPending"
//                     ? "bg-amber-50 text-amber-700 border-amber-200"
//                     : "bg-blue-50 text-blue-700 border-blue-200";

//                 const Icon =
//                   type === "verified"
//                     ? CheckCircle
//                     : type === "blocked" || type === "rejected"
//                     ? XCircle
//                     : Shield;

//                 return (
//                   <tr key={vendor._id} className="hover:bg-slate-50 transition">
//                     {/* VENDOR INFO */}
//                     <td className="px-5 py-3 text-sm text-slate-600">{index + 1 + (page - 1) * 10}</td>
//                     <td className="px-5 py-3">
//                       <div className="flex items-center gap-3">
//                         <img
//                           src={vendor.imageKey || fallbackImg}
//                           onClick={() =>
//                             setPreviewImage(vendor.imageKey || fallbackImg)
//                           }
//                           className="w-10 h-10 rounded-full object-cover border cursor-pointer hover:opacity-80"
//                         />

//                         <div>
//                           <p className="font-medium text-sm text-slate-900 flex items-center gap-1">
//                             {vendor.bussinessName}

//                             {vendor.isAdminVerifiedStatus === "approved" && (
//                               <CheckCircle className="w-3.5 h-3.5 text-green-500" />
//                             )}
//                           </p>
//                           <p className="text-[11px] text-slate-500">
//                             {vendor.vendorId}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     {/* CONTACT */}
//                     <td className="px-5 py-3">
//                       <div className="flex flex-col gap-1">
//                         <div className="flex items-center gap-1.5 text-xs text-slate-600">
//                           <Mail className="w-3.5 h-3.5 text-slate-400" />
//                           {vendor.email}
//                         </div>
//                         <div className="flex items-center gap-1.5 text-xs text-slate-600">
//                           <Phone className="w-3.5 h-3.5 text-slate-400" />
//                           {vendor.phoneNumber}
//                         </div>
//                       </div>
//                     </td>

//                     {/* STATUS */}
//                     <td className="px-5 py-3">
//                       <span
//                         className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${badgeClasses}`}
//                       >
//                         <Icon className="w-3 h-3 mr-1" />
//                         {label}
//                       </span>
//                     </td>

//                     {/* ACTION BUTTONS */}
//                     <td className="px-5 py-3 text-right">
//                       <div className="flex items-center justify-end gap-2">
//                         {/* APPROVE */}
//                         {vendor.isAdminVerifiedStatus !== "approved" && (
//                           <button
//                             onClick={() =>
//                               onToggleVerify({
//                                 vendorId: vendor.vendorId,
//                                 action: "approved",
//                               })
//                             }
//                             className="px-3 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600"
//                           >
//                             Approve
//                           </button>
//                         )}

//                         {/* REJECT */}
//                         {vendor.isAdminVerifiedStatus === "approved" && (
//                           <button
//                             onClick={() => {
//                               setRejectVendorId(vendor.vendorId);
//                               setShowRejectModal(true);
//                             }}
//                             className="px-3 py-1 text-xs bg-red-100 text-red-600 border border-red-200 rounded-md hover:bg-red-200"
//                           >
//                             Reject
//                           </button>
//                         )}

//                         {/* BLOCK / UNBLOCK */}
//                         {vendor.status !== "blocked" ? (
//                           <button
//                             onClick={() => onToggleBlock(vendor.vendorId)}
//                             className="px-3 py-1 text-xs bg-red-50 text-red-600 border border-red-300 rounded-md hover:bg-red-100"
//                           >
//                             Block
//                           </button>
//                         ) : (
//                           <button
//                             onClick={() => onToggleBlock(vendor.vendorId)}
//                             className="px-3 py-1 text-xs bg-slate-100 text-slate-700 border border-slate-300 rounded-md hover:bg-slate-200"
//                           >
//                             Unblock
//                           </button>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>




















//         {/* Pagination */}
//         <div className="flex justify-end gap-3 p-3">
//           <button
//             disabled={page === 1}
//             onClick={() => setPage((prev) => prev - 1)}
//             className="px-3 py-1 border rounded disabled:opacity-50 text-xs"
//           >
//             Prev
//           </button>
//           <button
//             disabled={page === totalPages}
//             onClick={() => setPage((prev) => prev + 1)}
//             className="px-3 py-1 border rounded disabled:opacity-50 text-xs"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* IMAGE PREVIEW MODAL */}
//       {previewImage && (
//         <div
//           className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
//           onClick={() => setPreviewImage(null)}
//         >
//           <div className="relative">
//             <img
//               src={previewImage}
//               className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
//             />

//             <button
//               onClick={() => setPreviewImage(null)}
//               className="absolute top-2 right-2 text-black bg-white rounded-full px-2 py-1 text-xs"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}

//       {/* REJECT MODAL */}
//       {showRejectModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
//             <h3 className="text-lg font-semibold text-red-600">
//               Reject Vendor
//             </h3>
//             <p className="text-sm text-slate-600 mt-1">
//               Provide a reason for rejection:
//             </p>

//             <textarea
//               value={rejectReason}
//               onChange={(e) => setRejectReason(e.target.value)}
//               className="w-full mt-3 p-2 border rounded-md text-sm"
//               rows={4}
//               placeholder="Reason for rejection..."
//             />

//             <div className="flex justify-end gap-3 mt-4">
//               <button
//                 onClick={() => {
//                   setShowRejectModal(false);
//                   setRejectReason("");
//                   setRejectVendorId(null);
//                 }}
//                 className="px-3 py-1 bg-slate-200 text-sm rounded hover:bg-slate-300"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={() => {
//                   if (!rejectReason.trim()) {
//                     alert("Please enter a rejection reason");
//                     return;
//                   }

//                   onToggleVerify({
//                     vendorId: rejectVendorId!,
//                     action: "rejected",
//                     reason: rejectReason,
//                   });

//                   setShowRejectModal(false);
//                   setRejectReason("");
//                   setRejectVendorId(null);
//                 }}
//                 className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VendorMgmnt;
