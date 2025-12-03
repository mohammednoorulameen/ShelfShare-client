import type { FC } from "react";
import type { IUpdatePasswordProps } from "../../types/UpdatePassword.types";

const UpdatePassword: FC<IUpdatePasswordProps> = ({formik, loading}) => {
  return (
     <div className="bg-white rounded-lg shadow p-5 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold mb-5">Change Password</h3>

      <div className="space-y-5">
        {/* CURRENT PASSWORD */}
        <div className="relative">
          <input
            type="password"
            name="oldPassword"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=" "
            className="peer w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
          />

          <label
            className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1"
          >
            Current Password
          </label>

          {formik.touched.oldPassword && formik.errors.oldPassword && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.oldPassword}
            </p>
          )}
        </div>

        {/* NEW PASSWORD */}
        <div className="relative">
          <input
            type="password"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=" "
            className="peer w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
          />

          <label className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1">
            New Password
          </label>

          {formik.touched.newPassword && formik.errors.newPassword && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.newPassword}
            </p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative">
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder=" "
            className="peer w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
          />

          <label className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1">
            Confirm Password
          </label>

          {formik.touched.confirmPassword &&
            formik.errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.confirmPassword}
              </p>
            )}
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className={`mt-6 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium ${
          loading ? "opacity-50 cursor-wait" : "hover:bg-blue-700"
        }`}
      >
        {loading ? "Updating..." : "Update Password"}
      </button>
    </div>
  );
};



/// you wan to this design just uncomand 

//     <div className="bg-white rounded-lg shadow p-5 sm:p-6">
//       {/* Title */}
//       <h3 className="text-lg sm:text-xl font-bold mb-5">Change Password</h3>

//       <div className="space-y-5">

//         {/* Current Password */}
//         <div className="relative">
//           <input
//             type="password"
//             id="currentPassword"
//             placeholder="Current Password"
//             className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white 
//             text-gray-900 text-sm placeholder-transparent 
//             focus:border-blue-600 focus:outline-none"
//           />
//           <label
//             htmlFor="currentPassword"
//             className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//             peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//             peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
//             bg-white px-1"
//           >
//             Current Password
//           </label>
//         </div>

//         {/* New Password */}
//         <div className="relative">
//           <input
//             type="password"
//             id="newPassword"
//             placeholder="New Password"
//             className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white 
//             text-gray-900 text-sm placeholder-transparent 
//             focus:border-blue-600 focus:outline-none"
//           />
//           <label
//             htmlFor="newPassword"
//             className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//             peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//             peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
//             bg-white px-1"
//           >
//             New Password
//           </label>
//         </div>

//         {/* Confirm Password */}
//         <div className="relative">
//           <input
//             type="password"
//             id="confirmPassword"
//             placeholder="Confirm New Password"
//             className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white 
//             text-gray-900 text-sm placeholder-transparent 
//             focus:border-blue-600 focus:outline-none"
//           />
//           <label
//             htmlFor="confirmPassword"
//             className="absolute left-3 top-2 text-gray-500 text-sm transition-all
//             peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
//             peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
//             bg-white px-1"
//           >
//             Confirm New Password
//           </label>
//         </div>

//       </div>

//       {/* Button */}
//       <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
//         Update Password
//       </button>
//     </div>
//   );
// };

export default UpdatePassword;
