

import { Moon, Trash2, CheckCircle,  } from "lucide-react"
// import Image from "next/image"

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-gray-600 text-sm mb-6">Account- personal info</div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-8">Account</h1>

        {/* User Profile Card */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
                  {/* <Image
                    src="/alice-johnson-profile.jpg"
                    alt="Alice Johnson"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-2">Alice Johnson</h2>
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mb-3">
                  <CheckCircle className="w-4 h-4" />
                  Verified Customer
                </div>
                <p className="text-gray-600">alice.johnson@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded">
                <Moon className="w-6 h-6 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Trash2 className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8 flex gap-8">
          <button className="pb-4 border-b-2 border-blue-600 text-blue-600 font-semibold">Personal Info</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Rental History</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Reset Password</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Favorites</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Referral</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Address</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Wallet</button>
        </div>

        {/* Personal Information Form */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-xl font-bold mb-8">Personal Information</h3>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="Alice Johnson"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                defaultValue="alice.johnson@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
              <input
                type="text"
                defaultValue="123 Main St, City, State 12345"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900"
              />
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </main>


    </div>
  )
}



// import React from "react";
// import { Pencil, Moon, Trash2, CheckCircle2 } from "lucide-react";

// type FieldProps = {
//   id: string;
//   label: string;
//   type: string;
//   defaultValue?: string;
// };

// const FormField: React.FC<FieldProps> = ({ id, label, type, defaultValue }) => (
//   <div className="space-y-2">
//     <label
//       htmlFor={id}
//       className="block text-xs font-medium text-gray-500 uppercase tracking-wide"
//     >
//       {label}
//     </label>

//     <input
//       id={id}
//       type={type}
//       defaultValue={defaultValue}
//       className="block w-full px-4 py-3 rounded-lg border border-gray-200 
//       text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent 
//       outline-none transition-shadow bg-white"
//     />
//   </div>
// );

// type ProfileHeaderProps = {
//   name: string;
//   email: string;
//   imageUrl: string;
// };

// const ProfileHeader: React.FC<ProfileHeaderProps> = ({
//   name,
//   email,
//   imageUrl,
// }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//       <div className="flex items-center gap-6">
//         {/* Profile Image */}
//         <div className="relative">
//           <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-gray-50">
//             <img
//               src={imageUrl}
//               alt={name}
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* Edit Image Button */}
//           <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 transition-colors border-2 border-white">
//             <Pencil className="h-3 w-3" />
//           </button>
//         </div>

//         {/* Name + Email */}
//         <div className="flex flex-col">
//           <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
//           <div className="flex items-center gap-2 mt-1 mb-2">
//             <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
//               <CheckCircle2 className="h-3 w-3" />
//               Verified Customer
//             </span>
//           </div>
//           <p className="text-gray-500 text-sm">{email}</p>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex items-center gap-4 self-end md:self-center">
//         <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all">
//           <Moon className="h-6 w-6" />
//         </button>

//         <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
//           <Trash2 className="h-6 w-6" />
//         </button>
//       </div>
//     </div>
//   );
// };

// const UserProfile: React.FC = () => {
//   return (
//     <div className="p-6 space-y-6">

//       {/* ---- PROFILE HEADER ---- */}
//       <ProfileHeader
//         name="Alice Johnson"
//         email="alice@example.com"
//         imageUrl="https://picsum.photos/200/200"
//       />
//   {/* ------------------ TABS ------------------ */}
//         <div className="border-b mb-6">
//           <div className="flex gap-8 overflow-x-auto text-sm font-medium">
//             {[
//               "Personal Info",
//               "Rental History",
//               "Reset Password",
//               "Favorites",
//               "Referral",
//               "Address",
//               "Wallet",
//             ].map((tab, idx) => (
//               <button
//                 key={idx}
//                 className={`py-3 border-b-2 ${
//                   idx === 0
//                     ? "border-blue-600 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-800"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>
//       {/* ---- PERSONAL INFO FORM ---- */}
//       <div className="bg-white rounded-b-xl rounded-tr-xl shadow-sm border border-gray-100 p-6 sm:p-8">
//         <h2 className="text-lg font-bold text-gray-900 mb-6">
//           Personal Information
//         </h2>

//         <form className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//             <FormField
//               id="fullName"
//               label="Full Name"
//               type="text"
//               defaultValue="Alice Johnson"
//             />

//             <FormField
//               id="email"
//               label="Email Address"
//               type="email"
//               defaultValue="alice@example.com"
//             />

//             <FormField
//               id="phone"
//               label="Phone Number"
//               type="tel"
//               defaultValue="+1 (555) 123-4567"
//             />

//             <FormField
//               id="address"
//               label="Address"
//               type="text"
//               defaultValue="123 Main St, City, State 12345"
//             />
//           </div>

//           <div className="pt-4">
//             <button
//               type="button"
//               className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold 
//             rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 
//             focus:ring-offset-2 focus:ring-blue-500 transition-colors"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>

//     </div>
//   );
// };

// export default UserProfile;




// import React from "react";
// import { Pencil, Moon, Trash2, CheckCircle2 } from "lucide-react";

// /* ----------------------------------------
//    Smaller Form Field Component
// ------------------------------------------- */
// type FieldProps = {
//   id: string;
//   label: string;
//   type: string;
//   defaultValue?: string;
// };

// const FormField: React.FC<FieldProps> = ({ id, label, type, defaultValue }) => (
//   <div className="space-y-1">
//     <label
//       htmlFor={id}
//       className="block text-[10px] font-medium text-gray-500 tracking-wide"
//     >
//       {label}
//     </label>

//     <input
//       id={id}
//       type={type}
//       defaultValue={defaultValue}
//       className="block w-full px-3 py-2 rounded-md border border-gray-200
//       text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent
//       outline-none transition-shadow bg-white"
//     />
//   </div>
// );

// /* ----------------------------------------
//    Smaller Profile Header
// ------------------------------------------- */
// type ProfileHeaderProps = {
//   name: string;
//   email: string;
//   imageUrl: string;
// };

// const ProfileHeader: React.FC<ProfileHeaderProps> = ({
//   name,
//   email,
//   imageUrl,
// }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//       <div className="flex items-center gap-4">
//         {/* Profile Image (Smaller) */}
//         <div className="relative">
//           <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-gray-100">
//             <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
//           </div>

//           {/* Edit Image Button (smaller) */}
//           <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700 transition-colors border border-white">
//             <Pencil className="h-3 w-3" />
//           </button>
//         </div>

//         {/* Name / Email */}
//         <div className="flex flex-col">
//           <h1 className="text-lg font-bold text-gray-900">{name}</h1>

//           <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full mt-1 mb-1 font-medium">
//             <CheckCircle2 className="h-3 w-3" /> Verified Customer
//           </span>

//           <p className="text-xs text-gray-500">{email}</p>
//         </div>
//       </div>

//       {/* Right buttons */}
//       <div className="flex items-center gap-2">
//         <button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all">
//           <Moon className="h-4 w-4" />
//         </button>

//         <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
//           <Trash2 className="h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// /* ----------------------------------------
//    MAIN PAGE (Smaller)
// ------------------------------------------- */
// const UserProfile: React.FC = () => {
//   return (
//     <div className="p-4 space-y-4">

//       {/* Profile Header */}
//       <ProfileHeader
//         name="Alice Johnson"
//         email="alice@example.com"
//         imageUrl="https://picsum.photos/200/200"
//       />

//       {/* Tabs */}
//       <div className="border-b mb-4">
//         <div className="flex gap-4 overflow-x-auto text-xs font-medium">
//           {[
//             "Personal Info",
//             "Rental History",
//             "Reset Password",
//             "Favorites",
//             "Referral",
//             "Address",
//             "Wallet",
//           ].map((tab, idx) => (
//             <button
//               key={idx}
//               className={`py-2 border-b-2 ${
//                 idx === 0
//                   ? "border-blue-600 text-blue-600"
//                   : "border-transparent text-gray-500 hover:text-gray-800"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Form Card */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
//         <h2 className="text-base font-bold text-gray-900 mb-4">
//           Personal Information
//         </h2>

//         <form className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             <FormField
//               id="fullName"
//               label="Full Name"
//               type="text"
//               defaultValue="Alice Johnson"
//             />

//             <FormField
//               id="email"
//               label="Email Address"
//               type="email"
//               defaultValue="alice@example.com"
//             />

//             <FormField
//               id="phone"
//               label="Phone Number"
//               type="tel"
//               defaultValue="+1 (555) 123-4567"
//             />

//             <FormField
//               id="address"
//               label="Address"
//               type="text"
//               defaultValue="123 Main St, City, State 12345"
//             />
//           </div>

//           <button
//             type="button"
//             className="px-5 py-2 bg-blue-600 text-white text-xs font-semibold rounded-md shadow-sm hover:bg-blue-700 transition"
//           >
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
