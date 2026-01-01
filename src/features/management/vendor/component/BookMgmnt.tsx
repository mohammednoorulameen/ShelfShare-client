// import React, { useState } from "react";
// import {
//   Search,
//   Filter,
//   ShieldAlert,
//   Shield,
//   Tag,
//   IndianRupee,
//   Star,
//   Plus,
// } from "lucide-react";

// import { useNavigate } from "react-router-dom";
// import type { BookManagementProps, Product } from "../../types/product.types";
// const getBookStatus = (book: Product) => {
//   if (book.status === "blocked") return { label: "Blocked", type: "blocked" };
//   return { label: "Active", type: "active" };
// };

// const fallbackCover = "https://cdn-icons-png.flaticon.com/512/29/29302.png";

// const BookManagement: React.FC<BookManagementProps> = ({
//   books,
//   page,
//   totalPages,
//   setPage,
//   isLoading,
//   isError,
// }) => {
//   console.log("chekc the firehfihnfinfirtnffifnitnfginhfgt4f", books);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

//   // const filteredBooks = books
//   const filteredBooks = books.filter(
//     (book) =>
//       book.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (isLoading)
//     return <p className="text-center text-sm text-slate-500">Loading...</p>;

//   if (isError)
//     return (
//       <p className="text-center text-sm text-red-500">Failed to fetch books</p>
//     );

//   return (
//     <div className="space-y-5">
//       {/* -------------------- HEADER ----------------------- */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//         <div>
//           <h2 className="text-xl font-semibold text-slate-800">
//             Book Management
//           </h2>
//           <p className="text-xs text-slate-500 mt-0.5">
//             Manage all listed books
//           </p>
//         </div>

//         <div className="flex gap-2 w-full sm:w-auto items-center">
//           {/* Search Box */}
//           <div className="relative flex-1 sm:w-56">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//             <input
//               type="text"
//               placeholder="Search book..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-md 
//                 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//             />
//           </div>

//           {/* Filter Button */}
//           <button
//             className="p-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 
//               text-slate-600 shadow-sm"
//           >
//             <Filter className="w-4 h-4" />
//           </button>

//           {/* Add Rent Book Button */}
//           <button
//             onClick={() => navigate("/vendor/addrentbook")}
//             className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white 
//             text-xs rounded-md hover:bg-blue-700 shadow-sm"
//           >
//             <Plus className="w-4 h-4" />
//             Add Rent Book
//           </button>
//         </div>
//       </div>

//       {/* -------------------- TABLE ----------------------- */}
//       <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse min-w-[1200px]">
//             <thead>
//               <tr className="bg-slate-50 border-b border-slate-200">
//                 <th className="table-head">SNo</th>
//                 <th className="table-head">Book</th>
//                 <th className="table-head">Category</th>
//                 <th className="table-head">Publisher</th>
//                 <th className="table-head">Language</th>
//                 <th className="table-head">Stock</th>
//                 <th className="table-head">Price</th>
//                 <th className="table-head">Rating</th>
//                 <th className="table-head">status</th>
//                 <th className="table-head text-right">Actions</th>
//                 <th className="table-head text-right">Update</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-slate-100">
//               {filteredBooks.map((book, index) => {
//                 const serialNumber = (page - 1) * 10 + (index + 1);
//                 const { type } = getBookStatus(book);
//                 console.log(book.imageKey);
//                 return (
//                   <tr key={book._id} className="hover:bg-slate-50 transition">
//                     {/* Serial Number */}
//                     <td className="table-col">{serialNumber}</td>
//                     {/* Book Details */}
//                     <td className="table-col">
//                       <div className="flex items-center gap-3">
//                         <img
//                           src={book.imageKey?.[0] || fallbackCover}
//                           alt={book.productName}
//                           className="w-10 h-14 object-cover rounded border"
//                         />
//                         {/* <img
//                           src={
//                             book.imageKey?.length
//                               ? `${config.backendUrl}/${book.imageKey[0]}`
//                               : fallbackCover
//                           }
//                           alt={book.productName}
//                           className="w-10 h-14 object-cover rounded border"
//                         /> */}
//                         <div>
//                           <p className="font-medium text-sm text-slate-900">
//                             {book.productName}
//                           </p>
//                           <p className="text-[11px] text-slate-500">
//                             by {book.author}
//                           </p>
//                           <p className="text-[11px] text-slate-500">
//                             Date: {book.createdAt.toLocaleDateString()}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     {/* Category */}
//                     <td className="table-col flex items-center gap-1.5">
//                       <Tag className="w-3.5 h-3.5 text-slate-400" />
//                       {book.category}
//                     </td>

//                     {/* Publisher */}
//                     <td className="table-col">{book.publisher}</td>

//                     {/* Language */}
//                     <td className="table-col">{book.language}</td>

//                     {/* Stock */}
//                     <td className="table-col">{book.stock}</td>

//                     {/* Price */}
//                     <td className="table-col">
//                       <div className="flex flex-col leading-tight">
//                         <span className="flex items-center gap-1.5">
//                           <IndianRupee className="w-3 h-3 text-slate-400" />
//                           {book.actualPrice}
//                         </span>
//                         <span className="text-[11px] text-slate-500">
//                           Rent: ₹{book.rentPrice}
//                         </span>
//                       </div>
//                     </td>

//                     {/* Rating */}
//                     <td className="table-col">
//                       <div className="flex items-center gap-1">
//                         <Star className="w-3.5 h-3.5 text-yellow-500" />
//                         {book.rating.average} ({book.rating.count})
//                       </div>
//                     </td>

//                     <td className="table-col">
//                       <div className="flex items-center gap-1">
//                         <Star className="w-3.5 h-3.5 text-yellow-500" />
//                         {book.rating.average} ({book.rating.count})
//                       </div>
//                     </td>

//                     {/* Action Buttons */}
//                     <td className="table-col text-right">
//                       {type === "active" ? (
//                         <button
//                           // onClick={() => onToggleStatus(book._id)}
//                           className="btn-red"
//                         >
//                           <ShieldAlert className="w-3.5 h-3.5" />
//                           Block
//                         </button>
//                       ) : (
//                         <button
//                           // onClick={() => onToggleStatus(book._id)}
//                           className="btn-gray"
//                         >
//                           <Shield className="w-3.5 h-3.5" />
//                           Unblock
//                         </button>
//                       )}
//                     </td>
//                     <td className="table-col text-right">
//                       <button
//                         onClick={() =>
//                           navigate(`/vendor/updateproduct/${book.productId}`)
//                         }
//                         className="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-md 
//                hover:bg-blue-700 transition shadow-sm flex items-center gap-1 float-right"
//                       >
//                         Update
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>

//           {/* No Books Found */}
//           {filteredBooks.length === 0 && (
//             <div className="p-6 text-center text-sm text-slate-500">
//               No books found.
//             </div>
//           )}
//         </div>

//         {/* -------------------- PAGINATION ----------------------- */}
//         <div className="flex justify-end gap-3 p-4">
//           <button
//             disabled={page === 1}
//             onClick={() => setPage((prev) => prev - 1)}
//             className="btn-page"
//           >
//             Prev
//           </button>

//           <button
//             disabled={page === totalPages}
//             onClick={() => setPage((prev) => prev + 1)}
//             className="btn-page"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookManagement;
