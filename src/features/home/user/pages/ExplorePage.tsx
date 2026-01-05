import { useNavigate } from "react-router-dom";
import { useGetAllProducts } from "../api/ProductApi";
import { BookCard, Sidebar, SortHeader } from "../Components/Explore";
import Pagination from "@/shared-ui/Pagination";
import { usePagination } from "@/app/hooks/usePagination";

const pageSize = 9;

export default function ExplorePage() {
  const navigate = useNavigate();

  const { data: response } = useGetAllProducts(1, 100);
  const products = response?.data ?? [];

  const { paginatedData, page, setPage, totalPages, totalItems } =
    usePagination({
      data: products,
      pageSize,
    });

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        {/* SIDEBAR */}
        <aside className="hidden md:block">
          <Sidebar />
        </aside>

        {/* MAIN */}
        <main className="space-y-6">
          {/* HEADER */}
          <SortHeader resultsCount={totalItems} />

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedData.map((book) => (
              <div
                key={book._id}
                onClick={() =>
                  navigate(`/user/productdetails/${book.productId}`)
                }
                className="cursor-pointer"
              >
                <BookCard
                  productName={book.productName}
                  author={book.author}
                  rating={book.rating?.average ?? 0}
                  price={`₹${book.actualPrice}`}
                  image={book.imageKey?.[0]}
                  rentPrice = {`₹${book.rentPrice}/week`}
                />
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <Pagination
            page={page}
            totalPages={totalPages}
            totalItems={totalItems}
            onPrev={() => setPage((p) => p - 1)}
            onNext={() => setPage((p) => p + 1)}
          />
        </main>
      </div>
    </div>
  );
}



// import { useNavigate } from "react-router-dom";
// import { useGetAllProducts } from "../api/ProductApi";
// import { BookCard, Sidebar, SortHeader } from "../Components/Explore";
// import Pagination from "@/shared-ui/Pagination";
// import { usePagination } from "@/app/hooks/usePagination";

// // const page = 1;
// const limit = 9;

// export default function ExplorePage({ data }: { data: any[] }) {
//   const { data } = useGetAllProducts(page, limit);
//   const navigate = useNavigate()
//   const products = data?.data ?? [];
//   console.log("check the data", data);

//     const {
//     paginatedData,
//     page,
//     setPage,
//     totalPages,
//     totalItems,
//   } = usePagination({
//     data,
//     pageSize: 8,
//   });

//   return (
//     <div className="min-h-screen bg-background p-4 md:p-8">
//       <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
//         <aside className="hidden md:block">
//           <Sidebar />
//         </aside>

//         <main className="space-y-6">
//           <SortHeader resultsCount={data?.total ?? 0} />

//         <button onClick={() => navigate('/user/productdetails')}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}

//             {products.map((book) => (
//               <BookCard
//               key={book._id}
//               title={book.productName}
//               author={book.author}
//               rating={book.rating?.average ?? 0}
//               price={`₹${book.actualPrice}/week`}
//               image={book.imageKey?.[0]}
//               />
//             ))}
//               <Pagination
//             page={page}
//             totalPages={totalPages}
//             totalItems={totalItems}
//             onPrev={() => setPage((p) => p - 1)}
//             onNext={() => setPage((p) => p + 1)}
//           />
//           </div>
//             </button>

//           {/* <div className="flex justify-end pt-8">
//             <Pagination />
//           </div> */}
//         </main>
//       </div>
//     </div>
//   );
// }
