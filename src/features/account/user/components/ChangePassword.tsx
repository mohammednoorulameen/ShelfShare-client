const ChangePassword = () => {
  return (
    <div className="bg-white rounded-lg shadow p-5 sm:p-6">
      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold mb-5">Change Password</h3>

      <div className="space-y-5">

        {/* Current Password */}
        <div className="relative">
          <input
            type="password"
            id="currentPassword"
            placeholder="Current Password"
            className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white 
            text-gray-900 text-sm placeholder-transparent 
            focus:border-blue-600 focus:outline-none"
          />
          <label
            htmlFor="currentPassword"
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
            bg-white px-1"
          >
            Current Password
          </label>
        </div>

        {/* New Password */}
        <div className="relative">
          <input
            type="password"
            id="newPassword"
            placeholder="New Password"
            className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white 
            text-gray-900 text-sm placeholder-transparent 
            focus:border-blue-600 focus:outline-none"
          />
          <label
            htmlFor="newPassword"
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
            bg-white px-1"
          >
            New Password
          </label>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm New Password"
            className="peer w-full px-3 py-2 border border-gray-300 rounded-md bg-white 
            text-gray-900 text-sm placeholder-transparent 
            focus:border-blue-600 focus:outline-none"
          />
          <label
            htmlFor="confirmPassword"
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm
            peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-600 
            bg-white px-1"
          >
            Confirm New Password
          </label>
        </div>

      </div>

      {/* Button */}
      <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
        Update Password
      </button>
    </div>
  );
};

export default ChangePassword;
