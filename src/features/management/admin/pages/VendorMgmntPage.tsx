import { useState } from 'react'
import VendorMgmnt from '../component/VendorMgmnt'
import { useBlockVentor, useGetVentors, useVerifyVentor } from '../api/adminVendorMgmntApi';
import type { Vendor } from '../../types/responseVendor.types';

const VendorMgmntPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetVentors(page,10);
  const adminVerifyVendor = useVerifyVentor()
  const adminBlockVendor = useBlockVentor()
  // const adminRejectVendor = useRejectVendor(); 

  const vendors : Vendor[] = data?.data ?? [];
  console.log('data', data)
  return (
    <div>
        <VendorMgmnt
        vendors = {vendors}
        page = {page}
        totalPages = {data?.totalPages ?? 1}
        setPage = {setPage}
        isLoading = {isLoading}
        isError = {isError}
        onToggleVerify ={adminVerifyVendor.mutate}
        onToggleBlock ={adminBlockVendor.mutate}
        // onReject={(vendorId, reason) =>
        //   adminRejectVendor.mutate({ vendorId, reason })
        // }
        />
    </div>
  )
}

export default VendorMgmntPage