import type { FC } from "react";
import type { PersonalInfoFormikProps } from "../../types/PersonalInfo";

type Props = PersonalInfoFormikProps & {
  onCancel?: () => void;
  saving?: boolean;
};
const PersonalInfo: FC<Props> = ({
  user,
  formik,
  isEditing,
  onEdit,
  onCancel,
  saving = false,
}) => {
  const ImagePreview = formik.values.imageFile
    ? URL.createObjectURL(formik.values.imageFile)
    : user?.imageKey || "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  return (
    <div className="bg-white rounded-lg shadow p-5 sm:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg sm:text-xl font-bold">Personal Information</h3>

        {!isEditing ? (
          <button
            type="button"
            className="text-blue-600 text-sm font-medium"
            onClick={onEdit}
          >
            Update
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onCancel}
              className="text-sm px-3 py-1 border rounded bg-gray-100"
              disabled={saving}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={`bg-blue-600 text-white px-5 py-2 rounded-md text-sm ${
                saving ? "opacity-60 cursor-wait" : "cursor-pointer"
              }`}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        )}
      </div>

      {/* Image Preview + Upload */}
     { isEditing && <div className="mb-4">
        <img src={ImagePreview} className="w-16 h-16 rounded-full" />
      </div>
}
      {isEditing && (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            formik.setFieldValue("imageFile", file);
          }}
          disabled={saving}
        />
      )}

      {/* FULL NAME */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="relative">
          <input
            type="text"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={!isEditing || saving}
            className={`w-full px-3 py-2 border rounded-md text-sm ${
              !isEditing ? "bg-gray-100" : "bg-white"
            }`}
          />
          <label className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1">
            Full Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            value={user?.email ?? ""}
            disabled
            className="w-full px-3 py-2 border rounded-md bg-gray-100 text-sm"
          />
          <label className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1">
            Email Address
          </label>
        </div>
      </div>

      {/* PHONE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div className="relative">
          <input
            type="tel"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={!isEditing || saving}
            className={`w-full px-3 py-2 border rounded-md text-sm ${
              !isEditing ? "bg-gray-100" : "bg-white"
            }`}
          />
          <label className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1">
            Phone Number
          </label>
        </div>

        {isEditing && (
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                formik.setFieldValue("imageFile", file);
              }}
              disabled={saving}
            />
            <label className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1">
              Phone Number
            </label>
          </div>
        )}

        {/* Static Address */}
        {!isEditing && (
          <div className="relative">
            <input
              type="text"
              value="123 Main St, City, State 12345"
              disabled
              className="w-full px-3 py-2 border rounded-md bg-gray-100 text-sm"
            />
            <label className="absolute left-3 -top-3 text-xs text-gray-500 bg-white px-1">
              Address
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;







