import { useState } from "react";
import {
  useGetVentors,
  useVerifyVentor,
  useBlockVentor,
} from "../api/adminVendorMgmntApi";
import type { Vendor } from "../../types/responseVendor.types";

import ManagementTable from "@/shared/DataTable";
import type { Column } from "@/types/IdataTable.types";
import type { StatusResult } from "@/types/Iconstants.types";

/* ================= PAGE ================= */

const VendorMgmntPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetVentors(page, 10);
  const verifyVendor = useVerifyVentor();
  const blockVendor = useBlockVentor();

  const vendors = data?.data ?? [];

  /* ================= STATUS HELPERS ================= */

  const getVendorStatus = (v: Vendor): StatusResult => {
    if (!v.isEmailVerified) {
      return { label: "ENVerified", type: "email_unverified" };
    }
    if (v.isAdminVerifiedStatus === "pending") {
      return { label: "Pending", type: "pending" };
    }
    if (v.isAdminVerifiedStatus === "rejected") {
      return { label: "Rejected", type: "rejected" };
    }
    if (v.status === "blocked") {
      return { label: "Blocked", type: "blocked" };
    }
    return { label: "Verified", type: "verified" };
  };

  /* ================= TABLE COLOMNS ================= */

  const adminColumns: Column<Vendor>[] = [
    {
      key: "index",
      header: "#",
      render: (_, index) =>
        (index + 1 + (page - 1) * 10).toString().padStart(2, "0"),
    },
    {
      key: "name",
      header: "Vendor",
      render: (v) => v.bussinessName,
    },
    {
      key: "email",
      header: "Email",
      render: (v) => v.email,
    },
    // {
    //   key: "phone",
    //   header: "Phone",
    //   render: (v) => v.phoneNumber,
    // },
    {
      key: "status",
      header: "Status",
      render: (u) => {
        const status = getVendorStatus(u);
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
      render: (v) => (
        <div className="flex justify-end gap-2">
          <button
            onClick={() =>
              verifyVendor.mutate({
                vendorId: v.vendorId,
                action: "approved",
              })
            }
            className="px-3 py-1 text-xs bg-green-600 text-white rounded"
          >
            Approve
          </button>

          <button
            onClick={() => blockVendor.mutate(v.vendorId)}
            className="px-3 py-1 text-xs bg-red-600 text-white rounded"
          >
            Block
          </button>
        </div>
      ),
    },
  ];

  /* ================= RENDER ================= */

  return (
    <ManagementTable<Vendor>
      columns={adminColumns}
      title="Vendor Management"
      subtitle="Approve, reject & block vendors"
      data={vendors}
      page={page}
      totalPages={data?.totalPages ?? 1}
      setPage={setPage}
      isLoading={isLoading}
      isError={isError}
      getName={(v) => v.bussinessName}
      getId={(v) => v.vendorId}
      getEmail={(v) => v.email}
      getPhone={(v) => v.phoneNumber}
      getImage={(v) => v.imageKey}
      getStatus={getVendorStatus}
      onApprove={(v) =>
        verifyVendor.mutate({
          vendorId: v.vendorId,
          action: "approved",
        })
      }
      onReject={(v, reason) =>
        verifyVendor.mutate({
          vendorId: v.vendorId,
          action: "rejected",
          reason,
        })
      }
      onToggleBlock={(v) => blockVendor.mutate(v.vendorId)}
    />
  );
};

export default VendorMgmntPage;
