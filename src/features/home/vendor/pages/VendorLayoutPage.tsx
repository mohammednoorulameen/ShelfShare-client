import { useReapplyVendor } from "../api/VendorLayoutApi";
import VendorLayout from "../vendorLayout/VendorLayout";

const VendorLayoutPage = () => {
  const { mutate: reapplyVendor, isPending } = useReapplyVendor();

  return (
    <div>
      <VendorLayout onReapply={reapplyVendor} isReapplyLoading={isPending} />
    </div>
  );
};

export default VendorLayoutPage;
