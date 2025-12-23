import { useState } from "react";
import {
  useGetVentors,
  useVerifyVentor,
  useBlockVentor,
} from "../api/adminVendorMgmntApi";
import type { Vendor } from "../../types/responseVendor.types";
import type { Column } from "@/shared/DataTable";
import ManagementTable from "@/shared/DataTable";

const VendorMgmntPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetVentors(page, 10);
  const verifyVendor = useVerifyVentor();
  const blockVendor = useBlockVentor();

  const vendors = data?.data ?? [];

  type StatusType =
    | "verified"
    | "blocked"
    | "rejected"
    | "pending"
    | "unknown"
    | "email_unverified";

  interface StatusResult {
    label: string;
    type: StatusType;
  }

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































































// import { useState } from "react";

// import {
//   useGetVentors,
//   useVerifyVentor,
//   useBlockVentor,
// } from "../api/adminVendorMgmntApi";
// import type { Vendor } from "../../types/responseVendor.types";
// import ManagementTable from "@/shared/DataTable";

// type StatusType = "verified" | "blocked" | "rejected" | "pending" | "unknown" | "email_unverified" ;

// interface StatusResult {
//   label: string;
//   type: StatusType;
// }

// const getVendorStatus = (v: Vendor): StatusResult => {
//   if(!v.isEmailVerified){
//     return {label : "ENVerified", type : 'email_unverified'}
//   }
//   if (v.isAdminVerifiedStatus === 'pending') {
//     return { label: "Pending", type: "pending" };
//   }

//   if (v.isAdminVerifiedStatus === "rejected") {
//     return { label: "Rejected", type: "rejected" };
//   }

//   if (v.status === "blocked") {
//     return { label: "Blocked", type: "blocked" };
//   }

//   return { label: "Verified", type: "verified" };
// };

// const VendorMgmntPage = () => {
//   const [page, setPage] = useState(1);

//   const { data, isLoading, isError } = useGetVentors(page, 10);
//   const verifyVendor = useVerifyVentor();
//   const blockVendor = useBlockVentor();

//   const vendors = data?.data ?? [];
//   return (
//     <ManagementTable<Vendor>
// title="Vendor Management"
// subtitle="Approve, reject & block vendors"
// data={vendors}
// page={page}
// totalPages={data?.totalPages ?? 1}
// setPage={setPage}
// isLoading={isLoading}
// isError={isError}
// getName={(v) => v.bussinessName}
// getId={(v) => v.vendorId}
// getEmail={(v) => v.email}
// getPhone={(v) => v.phoneNumber}
// getImage={(v) => v.imageKey}
// getStatus={getVendorStatus}
// onApprove={(v) =>
//   verifyVendor.mutate({
//     vendorId: v.vendorId,
//     action: "approved",
//   })
// }
// onReject={(v, reason) =>
//   verifyVendor.mutate({
//     vendorId: v.vendorId,
//     action: "rejected",
//     reason,
//   })
// }
// onToggleBlock={(v) => blockVendor.mutate(v.vendorId)}
//     />
//   );
// };

// export default VendorMgmntPage;

// import { useState } from 'react'
// import VendorMgmnt from '../component/VendorMgmnt'
// import { useBlockVentor, useGetVentors, useVerifyVentor } from '../api/adminVendorMgmntApi';
// import type { Vendor } from '../../types/responseVendor.types';

// const VendorMgmntPage = () => {
//   const [page, setPage] = useState(1);
//   const { data, isLoading, isError } = useGetVentors(page,10);
//   const adminVerifyVendor = useVerifyVentor()
//   const adminBlockVendor = useBlockVentor()

//   const vendors : Vendor[] = data?.data ?? [];
//   console.log('data', data)
//   return (
//     <div>
//         <VendorMgmnt
//         vendors = {vendors}
//         page = {page}
//         totalPages = {data?.totalPages ?? 1}
//         setPage = {setPage}
//         isLoading = {isLoading}
//         isError = {isError}
//         onToggleVerify ={adminVerifyVendor.mutate}
//         onToggleBlock ={adminBlockVendor.mutate}
//         />
//     </div>
//   )
// }

// export default VendorMgmntPage
