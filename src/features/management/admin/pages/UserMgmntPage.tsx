import { useBlockUser, useGetUsers } from "../api/adminUserMgmntApi";
import type { User } from "../../types/responseUser.types";
import ManagementTable from "@/shared/DataTable";
import { useState } from "react";
import type { Column } from "@/types/dataTable.types";
import type { StatusResult } from "@/types/constants.types";

/* ================= PAGE ================= */

const UserMgmntPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetUsers(page, 10);
  const adminBlockUser = useBlockUser();

  const users: User[] = data?.data ?? [];

  /* ================= STATUS HELPERS ================= */

  const getUserStatus = (user: User): StatusResult => {
    if (!user.isEmailVerified) return { label: " ENverified", type: "pending" };

    if (user.status === "blocked") return { label: "Blocked", type: "blocked" };
    return { label: "verified", type: "verified" };
  };

  /* ================= TABLE COLUMNS ================= */

  const userColumns: Column<User>[] = [
    {
      key: "index",
      header: "#",
      render: (_, index) =>
        (index + 1 + (page - 1) * 10).toString().padStart(2, "0"),
    },
    {
      key: "user",
      header: "User",
      render: (u) => (
        <div>
          <p className="font-medium text-slate-900">{u.userName}</p>
          <p className="text-xs text-slate-500">{u.userId}</p>
        </div>
      ),
    },
    {
      key: "email",
      header: "Email",
      render: (u) => u.email,
    },
    // {
    //   key: "phone",
    //   header: "Phone",
    //   render: (u) => u.phoneNumber || "-",
    // },
    {
      key: "status",
      header: "Status",
      render: (u) => {
        const status = getUserStatus(u);
        return (
          <span>{status.label}</span>

          // <span
          //   className={`px-2 py-1 rounded-full text-xs font-semibold ${status.color}`}
          // >
          //   {status.label}
          // </span>
        );
      },
    },
    {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (u) => (
        <button
          onClick={() => adminBlockUser.mutate(u._id)}
          className={`px-3 py-1 text-xs rounded font-medium ${
            u.status === "blocked"
              ? "bg-slate-200 text-slate-700"
              : "bg-red-600 text-white"
          }`}
        >
          {u.status === "blocked" ? "Unblock" : "Block"}
        </button>
      ),
    },
  ];

  /* ================= RENDER ================= */

  return (
    <div>
      <ManagementTable<User, undefined>
        columns={userColumns}
        getStatus={getUserStatus}
        title="User Management"
        subtitle="Manage your platform users, monitor status and control access."
        data={users}
        page={page}
        totalPages={data?.totalPages ?? 1}
        setPage={setPage}
        isLoading={isLoading}
        isError={isError}
        getName={(u) => u.userName}
        getId={(u) => u.userId}
        getEmail={(u) => u.email}
        getPhone={(u) => u.phoneNumber}
        getImage={(u) => u.imageKey}
        onToggleBlock={(user) => adminBlockUser.mutate(user._id)}
      />
    </div>
  );
};

export default UserMgmntPage;
