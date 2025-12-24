// import { useState } from "react";
// import {
//   Search,
//   Filter,
//   Plus,
//   CheckCircle,
//   XCircle,
//   ShieldAlert,
//   Shield,
// } from "lucide-react";
// import type { CategoryManagementProps } from "../../types/category.types";

// const CategoryManagement: React.FC<CategoryManagementProps> = ({
//   form,
//   setForm,
//   onSubmit,
//   categories,
//   isLoading,
//   onToggleStatus,
// }) => {
//   const [showCreate, setShowCreate] = useState(false);

//   const isFormFilled = form.name.trim() || form.description.trim();

//   const handleAddClick = () => {
//     setShowCreate(true);
//   };

//   const handleCancel = () => {
//     setShowCreate(false);
//     setForm({ name: "", description: "" });
//   };

//   return (
//     <div className="space-y-5">
//       {/* ================= HEADER ================= */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//         <div>
//           <h2 className="text-xl font-semibold text-slate-800">
//             Category Management
//           </h2>
//           <p className="text-xs text-slate-500 mt-0.5">
//             Manage product categories
//           </p>
//         </div>

//         <div className="flex gap-3 w-full sm:w-auto items-center">
//           {/* SEARCH */}
//           {!showCreate && (
//             <div className="relative flex-1 sm:w-80">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//               <input
//                 type="text"
//                 placeholder="Search category..."
//                 className="
//                   pl-11 pr-5 py-3
//                   bg-white border border-slate-200
//                   rounded-xl
//                   text-base
//                   w-full
//                   focus:ring-4 focus:ring-blue-500/10
//                   focus:border-blue-500
//                   transition-all outline-none
//                 "
//               />
//             </div>
//           )}

//           {/* FILTER */}
//           {!showCreate && (
//             <button
//               className="
//                 p-3
//                 bg-white border border-slate-200
//                 rounded-xl
//                 hover:bg-slate-50
//                 transition-colors
//                 shadow-sm
//               "
//             >
//               <Filter className="w-5 h-5 text-slate-600" />
//             </button>
//           )}

//           {/* CREATE FORM */}
//           {showCreate && (
//             <form
//               onSubmit={(e) => {
//                 onSubmit(e);
//                 handleCancel();
//               }}
//               className="flex gap-3 items-center"
//             >
//               <input
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//                 placeholder="Category"
//                 required
//                 className="
//                   pl-4 pr-4 py-3
//                   bg-white border border-slate-200
//                   rounded-xl
//                   text-base
//                   focus:ring-4 focus:ring-blue-500/10
//                   focus:border-blue-500
//                   transition-all outline-none
//                 "
//               />

//               <input
//                 value={form.description}
//                 onChange={(e) =>
//                   setForm({ ...form, description: e.target.value })
//                 }
//                 placeholder="Description"
//                 required
//                 className="
//                   pl-4 pr-4 py-3
//                   bg-white border border-slate-200
//                   rounded-xl
//                   text-base
//                   focus:ring-4 focus:ring-blue-500/10
//                   focus:border-blue-500
//                   transition-all outline-none
//                 "
//               />

//               {/* SAVE */}
//               <button
//                 type="submit"
//                 className="
//                   flex items-center gap-2
//                   px-4 py-3
//                   bg-blue-600 text-white
//                   text-sm font-medium
//                   rounded-xl
//                   hover:bg-blue-700
//                   shadow-sm
//                 "
//               >
//                 Save
//               </button>

//               {/* CANCEL */}
//               {isFormFilled && (
//                 <button
//                   type="button"
//                   onClick={handleCancel}
//                   className="
//                     px-4 py-3
//                     text-sm
//                     border border-slate-200
//                     rounded-xl
//                     hover:bg-slate-50
//                   "
//                 >
//                   Cancel
//                 </button>
//               )}
//             </form>
//           )}

//           {/* ADD CATEGORY */}
//           {!showCreate && (
//             <button
//               onClick={handleAddClick}
//               className="
//                 flex items-center gap-2
//                 px-4 py-3
//                 bg-blue-600 text-white
//                 text-sm font-medium
//                 rounded-xl
//                 hover:bg-blue-700
//                 shadow-sm
//               "
//             >
//               <Plus className="w-5 h-5" />
//               Add Category
//             </button>
//           )}
//         </div>
//       </div>

//       {/* ================= CATEGORY TABLE ================= */}
//       <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-slate-50 border-b border-slate-200">
//               <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase">
//                 Index
//               </th>
//               <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase">
//                 Name
//               </th>
//               <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase">
//                 Description
//               </th>
//               <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase">
//                 Status
//               </th>
//               <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase text-right">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-slate-100">
//             {isLoading && (
//               <tr>
//                 <td colSpan={5} className="text-center py-4 text-slate-500 text-sm">
//                   Loading categories...
//                 </td>
//               </tr>
//             )}

//             {!isLoading && categories.length === 0 && (
//               <tr>
//                 <td colSpan={5} className="text-center py-4 text-slate-500 text-sm">
//                   No categories found.
//                 </td>
//               </tr>
//             )}

//             {categories.map((cat, index) => (
//               <tr key={cat._id} className="hover:bg-slate-50 transition">
//                 <td className="px-5 py-3 text-sm text-slate-600">
//                   {index + 1}
//                 </td>
//                 <td className="px-5 py-3 font-medium text-sm text-slate-900">
//                   {cat.name}
//                 </td>
//                 <td className="px-5 py-3 text-xs text-slate-600">
//                   {cat.description}
//                 </td>
//                 <td className="px-5 py-3">
//                   {cat.status === "active" ? (
//                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border bg-green-50 text-green-700 border-green-200">
//                       <CheckCircle className="w-3 h-3 mr-1" />
//                       Active
//                     </span>
//                   ) : (
//                     <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border bg-red-50 text-red-700 border-red-200">
//                       <XCircle className="w-3 h-3 mr-1" />
//                       Blocked
//                     </span>
//                   )}
//                 </td>
//                 <td className="px-5 py-3 text-right">
//                   <button
//                     onClick={() => onToggleStatus(cat._id)}
//                     className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] border rounded-md shadow-sm"
//                   >
//                     {cat.status === "active" ? (
//                       <>
//                         <ShieldAlert className="w-3.5 h-3.5" />
//                         Block
//                       </>
//                     ) : (
//                       <>
//                         <Shield className="w-3.5 h-3.5" />
//                         Unblock
//                       </>
//                     )}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CategoryManagement;

