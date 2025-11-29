import type { FC } from "react";
import type { PersonalInfoFormikProps } from "../../types/PersonalInfo";

const PersonalInfo: FC<PersonalInfoFormikProps> = ({
  user,
  formik,
  isEditing,
  onEdit,
}) => {
  const ImagePreview = formik.values.imageFile
    ? URL.createObjectURL(formik.values.imageFile)
    : user.imagekey || "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  return (
    <div>
      <div className="bg-white rounded-lg shadow p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-5">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              id="fullname"
              defaultValue={user.userName ?? ""}
              //   className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 text-sm placeholder-transparent focus:border-blue-600 focus:outline-none"
              className={`peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 text-sm
                ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
              placeholder="Full Name"
            />
            <label
              htmlFor="fullname"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-2 
              peer-placeholder-shown:text-sm 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
              bg-white px-1"
            >
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              defaultValue={user.email ?? ""}
              placeholder="Email Address"
              className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 text-sm placeholder-transparent focus:border-blue-600 focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-2 
              peer-placeholder-shown:text-sm 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
              bg-white px-1"
            >
              Email Address
            </label>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              id="phone"
              defaultValue={user.phoneNumber ?? ""}
              placeholder="Phone Number"
              className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 text-sm placeholder-transparent focus:border-blue-600 focus:outline-none"
            />
            <label
              htmlFor="phone"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-2 
              peer-placeholder-shown:text-sm 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
              bg-white px-1"
            >
              Phone Number
            </label>
          </div>

          {/* Address */}
          <div className="relative">
            <input
              type="text"
              id="address"
              defaultValue="123 Main St, City, State 12345"
              placeholder="Address"
              className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 text-sm placeholder-transparent focus:border-blue-600 focus:outline-none"
            />
            <label
              htmlFor="address"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-2 
              peer-placeholder-shown:text-sm 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
              bg-white px-1"
            >
              Address
            </label>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;

// import type { FC } from "react";
// import type { PersonalInfoFormikProps } from "../../types/PersonalInfo";
// import { Camera } from "lucide-react";

// const PersonalInfo: FC<PersonalInfoFormikProps> = ({
//   user,
//   formik,
//   isEditing,
//   onEdit,
// }) => {

//   const previewImage = formik.values.imageFile
//     ? URL.createObjectURL(formik.values.imageFile)
//     : user.imagekey || "https://cdn-icons-png.flaticon.com/512/149/149071.png";

//   return (
//     <div className="bg-white rounded-lg shadow p-5 sm:p-6">

//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-5">
//         <h3 className="text-lg sm:text-xl font-bold">Personal Information</h3>

//         {!isEditing && (
//           <button
//             type="button"
//             onClick={onEdit}
//             className="text-blue-600 font-medium underline"
//           >
//             Edit
//           </button>
//         )}
//       </div>

//       {/* IMAGE SECTION */}
//       <div className="flex items-center gap-6 mb-6">
//         <div className="relative">
//           <img
//             src={previewImage}
//             alt="Profile"
//             className="w-24 h-24 rounded-full object-cover border"
//           />

//           {isEditing && (
//             <label className="absolute bottom-0 right-0 p-1 bg-blue-600 rounded-full cursor-pointer">
//               <Camera className="w-4 h-4 text-white" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={(e) => {
//                   const file = e.target.files?.[0] || null;
//                   formik.setFieldValue("imageFile", file);
//                 }}
//               />
//             </label>
//           )}
//         </div>

//         <p className="text-sm text-gray-600">Click the camera to change the photo</p>
//       </div>

//       {/* FORM */}
//       <form onSubmit={formik.handleSubmit}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

//           {/* Full Name */}
//           <div className="relative">
//             <input
//               type="text"
//               name="userName"
//               disabled={!isEditing}
//               value={formik.values.userName}
//               onChange={formik.handleChange}
//               className={`peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 text-sm
//                 ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
//               placeholder="Full Name"
//             />
//             <label
//               htmlFor="fullname"
//               className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//               peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//               peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
//             >
//               Full Name
//             </label>
//           </div>

//           {/* Email (readonly) */}
//           <div className="relative">
//             <input
//               type="email"
//               value={user.email ?? ""}
//               readOnly
//               className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-900 text-sm cursor-not-allowed"
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//               peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//               peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
//             >
//               Email Address
//             </label>
//           </div>

//         </div>

//         {/* PHONE NUMBER */}
//         <div className="relative mb-6">
//           <input
//             type="tel"
//             name="phoneNumber"
//             disabled={!isEditing}
//             value={formik.values.phoneNumber}
//             onChange={formik.handleChange}
//             className={`peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 text-sm
//               ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
//             placeholder="Phone Number"
//           />
//           <label
//             htmlFor="phone"
//             className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//             peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//             peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
//           >
//             Phone Number
//           </label>
//         </div>

//         {/* SAVE BUTTON (only when editing) */}
//         {isEditing && (
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
//           >
//             Save Changes
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default PersonalInfo;

// import {  useState, type FC } from "react";
// import type { PersonalInfoFormikProps } from "../../types/PersonalInfo";
// import { Camera } from "lucide-react";

// const PersonalInfo: FC<PersonalInfoFormikProps> = ({ user, formik }) => {
//   const [isEditing, setIsEditing] = useState(false);

//   const previewImage = formik.values.imageFile
//     ? URL.createObjectURL(formik.values.imageFile)
//     : user.imagekey || "https://cdn-icons-png.flaticon.com/512/149/149071.png";

//   return (
//     <div className="bg-white rounded-lg shadow p-5 sm:p-6">
//       <div className="flex justify-between items-center mb-5">
//         <h3 className="text-lg sm:text-xl font-bold">Personal Information</h3>

//         <button
//           type="button"
//           onClick={() => {
//             if (isEditing) formik.handleSubmit();
//             setIsEditing(!isEditing);
//           }}
//           className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
//         >
//           {isEditing ? "Save" : "Edit"}
//         </button>
//       </div>

//       {/* IMAGE */}
//       <div className="flex items-center gap-6 mb-6">
//         <div className="relative">
//           <img
//             src={previewImage}
//             alt="Profile"
//             className="w-24 h-24 rounded-full object-cover border"
//           />

//           {isEditing && (
//             <label className="absolute bottom-0 right-0 p-1 bg-blue-600 rounded-full cursor-pointer">
//               <Camera className="w-4 h-4 text-white" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={(e) => {
//                   const file = e.target.files?.[0] || null;
//                   formik.setFieldValue("imageFile", file);
//                 }}
//               />
//             </label>
//           )}
//         </div>
//       </div>

//       {/* FORM */}
//       <form onSubmit={formik.handleSubmit}>
//         {/* USERNAME */}
//         <div className="relative mb-5">
//           <input
//             type="text"
//             name="userName"
//             value={formik.values.userName}
//             onChange={formik.handleChange}
//             disabled={!isEditing}
//             className={`w-full px-3 py-2 border rounded-md ${
//               !isEditing ? "bg-gray-100 cursor-not-allowed" : ""
//             }`}
//           />
//           <label className="absolute left-3 top-2 text-gray-500 text-sm bg-white px-1">
//             Full Name
//           </label>
//         </div>

//         {/* EMAIL (READONLY) */}
//         <div className="relative mb-5">
//           <input
//             type="email"
//             value={user.email ?? ""}
//             readOnly
//             className="w-full px-3 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
//           />
//           <label className="absolute left-3 top-2 text-gray-500 text-sm bg-white px-1">
//             Email (Not Editable)
//           </label>
//         </div>

//         {/* PHONE */}
//         <div className="relative mb-5">
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formik.values.phoneNumber}
//             onChange={formik.handleChange}
//             disabled={!isEditing}
//             className={`w-full px-3 py-2 border rounded-md ${
//               !isEditing ? "bg-gray-100 cursor-not-allowed" : ""
//             }`}
//           />
//           <label className="absolute left-3 top-2 text-gray-500 text-sm bg-white px-1">
//             Phone Number
//           </label>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PersonalInfo;

// import type { FC } from "react";
// import type { PersonalInfoFormikProps } from "../../types/PersonalInfo";
// import { Camera } from "lucide-react";

// const PersonalInfo: FC<PersonalInfoFormikProps> = ({
//   user,
//   formik,

// }) => {
//   const previewImage = formik.values.imageFile
//     ? URL.createObjectURL(formik.values.imageFile)
//     : user.imagekey || "https://cdn-icons-png.flaticon.com/512/149/149071.png";

//   return (
//     <div className="bg-white rounded-lg shadow p-5 sm:p-6">

//       <div className="flex justify-between items-center mb-5">
//         <h3 className="text-lg sm:text-xl font-bold">Personal Information</h3>

//         {!isEditing && (
//           <button
//             onClick={onEdit}
//             className="text-blue-600 font-medium underline"
//           >
//             Edit
//           </button>
//         )}
//       </div>

//       {/* IMAGE SECTION */}
//       <div className="flex items-center gap-6 mb-6">
//         <div className="relative">
//           <img
//             src={previewImage}
//             alt="Profile"
//             className="w-24 h-24 rounded-full object-cover border"
//           />

//           {isEditing && (
//             <label className="absolute bottom-0 right-0 p-1 bg-blue-600 rounded-full cursor-pointer">
//               <Camera className="w-4 h-4 text-white" />
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={(e) => {
//                   const file = e.target.files?.[0] || null;
//                   formik.setFieldValue("imageFile", file);
//                 }}
//               />
//             </label>
//           )}
//         </div>

//         <p className="text-sm text-gray-600">Click the camera to change the photo</p>
//       </div>

//       {/* FORM */}
//       <form onSubmit={formik.handleSubmit}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

//           {/* Full Name */}
//           <div className="relative">
//             <input
//               type="text"
//               name="userName"
//               disabled={!isEditing}
//               value={formik.values.userName}
//               onChange={formik.handleChange}
//               className={`w-full px-3 py-2 border border-gray-300 rounded-md
//               ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
//             />
//             <label className="absolute left-3 top-2 text-gray-500 text-sm bg-white px-1">
//               Full Name
//             </label>
//           </div>

//           {/* Email (readonly) */}
//           <div className="relative">
//             <input
//               type="email"
//               value={user.email ?? ""}
//               readOnly
//               className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
//             />
//             <label className="absolute left-3 top-2 text-gray-500 text-sm bg-white px-1">
//               Email
//             </label>
//           </div>
//         </div>

//         {/* Phone Number */}
//         <div className="relative mb-6">
//           <input
//             type="tel"
//             name="phoneNumber"
//             disabled={!isEditing}
//             value={formik.values.phoneNumber}
//             onChange={formik.handleChange}
//             className={`w-full px-3 py-2 border border-gray-300 rounded-md
//             ${!isEditing ? "bg-gray-100 cursor-not-allowed" : ""}`}
//           />
//           <label className="absolute left-3 top-2 text-gray-500 text-sm bg-white px-1">
//             Phone Number
//           </label>
//         </div>

//         {isEditing && (
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
//           >
//             Save Changes
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default PersonalInfo;

// const PersonalInfo = ({ Formik }) => {
//   const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, dirty } = formik;

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="bg-white rounded-lg shadow p-5 sm:p-6">
//         <h3 className="text-lg sm:text-xl font-bold mb-5">Personal Information</h3>

//         {/* Row 1 */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">

//           {/* Full Name */}
//           <div className="relative">
//             <input
//               type="text"
//               id="fullname"
//               name="fullname"
//               value={values.fullname}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Full Name"
//               className={`peer w-full px-3 py-2 border rounded-md bg-white text-gray-900 text-sm
//               placeholder-transparent focus:border-blue-600 focus:outline-none
//               ${errors.fullname && touched.fullname ? "border-red-500" : "border-gray-300"}`}
//             />
//             <label
//               htmlFor="fullname"
//               className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//                 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//                 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
//                 bg-white px-1"
//             >
//               Full Name
//             </label>
//             {errors.fullname && touched.fullname && (
//               <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div className="relative">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Email Address"
//               className={`peer w-full px-3 py-2 border rounded-md bg-white text-gray-900 text-sm
//               placeholder-transparent focus:border-blue-600 focus:outline-none
//               ${errors.email && touched.email ? "border-red-500" : "border-gray-300"}`}
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//                 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//                 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
//                 bg-white px-1"
//             >
//               Email Address
//             </label>
//             {errors.email && touched.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>

//         </div>

//         {/* Row 2 */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

//           {/* Phone */}
//           <div className="relative">
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={values.phone}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Phone Number"
//               className={`peer w-full px-3 py-2 border rounded-md bg-white text-gray-900 text-sm
//               placeholder-transparent focus:border-blue-600 focus:outline-none
//               ${errors.phone && touched.phone ? "border-red-500" : "border-gray-300"}`}
//             />
//             <label
//               htmlFor="phone"
//               className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//                 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//                 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
//                 bg-white px-1"
//             >
//               Phone Number
//             </label>
//             {errors.phone && touched.phone && (
//               <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//             )}
//           </div>

//           {/* Address */}
//           <div className="relative">
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={values.address}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Address"
//               className={`peer w-full px-3 py-2 border rounded-md bg-white text-gray-900 text-sm
//               placeholder-transparent focus:border-blue-600 focus:outline-none
//               ${errors.address && touched.address ? "border-red-500" : "border-gray-300"}`}
//             />
//             <label
//               htmlFor="address"
//               className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//                 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//                 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600
//                 bg-white px-1"
//             >
//               Address
//             </label>
//             {errors.address && touched.address && (
//               <p className="text-red-500 text-xs mt-1">{errors.address}</p>
//             )}
//           </div>

//         </div>

//         {/* BUTTON */}
//         <button
//           type="submit"
//           disabled={isSubmitting || !dirty}
//           className={`px-5 py-2 rounded-md text-sm font-medium transition
//           ${dirty
//             ? "bg-blue-600 text-white hover:bg-blue-700"
//             : "bg-gray-300 text-gray-600 cursor-not-allowed"
//           }`}
//         >
//           {dirty ? "Save Changes" : "Updated"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default PersonalInfo;
