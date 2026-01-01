import { useGetAllProducts } from "../api/ProductApi";
import { BookCard, Sidebar, SortHeader } from "../Components/Explore";

const page = 1;
const limit = 9;

export default function ExplorePage() {
  const { data } = useGetAllProducts(page, limit);

  const products = data?.data ?? [];
  console.log("check the data", data);
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        <aside className="hidden md:block">
          <Sidebar />
        </aside>

        <main className="space-y-6">
          <SortHeader resultsCount={data?.total ?? 0} />

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...BOOKS, ...BOOKS.slice(0, 2)].map((book, idx) => (
              <BookCard
                key={`${book.id}-${idx}`}
                {...book}
              />
            ))}
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}

            {products.map((book) => (
              <BookCard
                key={book._id}
                title={book.productName}
                author={book.author}
                rating={book.rating?.average ?? 0}
                price={`₹${book.actualPrice}/week`}
                image={book.imageKey?.[0]}
              />
            ))}
          </div>

          {/* <div className="flex justify-end pt-8">
            <Pagination />
          </div> */}
        </main>
      </div>
    </div>
  );
}
