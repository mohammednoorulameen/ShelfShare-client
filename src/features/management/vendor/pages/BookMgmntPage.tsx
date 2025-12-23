import type { Status } from "@/app/constants/status";
import {
  useGetVendorProducts,
} from "../api/ProductApi";

import BookManagement from "../component/BookMgmnt";


const BookMgmntPage = () => {
  const { data, isLoading, isError, } = useGetVendorProducts();
  const products =
    data?.map((item) => ({
      ...item,
      rentDate: new Date(item.rentDate),
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
      status: item.status as Status,
    })) ?? [];

  return (
    <BookManagement
      books={products}
      page={1}
      totalPages={1}
      setPage={() => {}}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default BookMgmntPage;
























// import type { Status } from "@/app/constants/status";
// import { useGetVendorProducts, useUpdateProduct } from "../api/ProductApi";
// import BookManagement from "../component/BookMgmnt";

// const BookMgmntPage = () => {
//   const { data, isLoading, isError } = useGetVendorProducts();
//   const updateProduct = useUpdateProduct();

//   // console.log("Products:", products); 

//    const products =
//     data?.map((item) => ({
//       ...item,
//       rentDate: new Date(item.rentDate), 
//       createdAt: new Date(item.createdAt),
//       updatedAt: new Date(item.updatedAt),


//       status: item.status as Status,
//     })) ?? [];

//   return (
//     <BookManagement
//       books={products}
//       page={1}
//       totalPages={1}
//       setPage={() => {}}
//       isLoading={isLoading}
//       isError={isError}
//       onToggleStatus={(id) => console.log("Toggle:", id)}
//     />
//   );
// };


// export default BookMgmntPage;

























// import type { Book } from "../../types/product.types";
// import { useGetVendorProducts } from "../api/ProductApi";
// import BookManagement from "../component/BookMgmnt";

  
//   const BookMgmntPage = () => {
//   const { data: products, isLoading, isError } = useGetVendorProducts();
//   console.log(products)
//   return (
//     <div>
//       <BookManagement
//         books={products}
//         page={1}
//         totalPages={1}
//         setPage={() => {}}
//         isLoading={false}
//         isError={false}
//         onToggleStatus={(id) => console.log("Toggle:", id)}
//       />
//     </div>
//   );
// };

// export default BookMgmntPage;
