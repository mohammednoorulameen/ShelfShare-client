import { useEffect, useState } from "react";
import { useGetVendorProducts } from "../api/ProductApi";
import ManagementTable from "@/shared/DataTable";

import type { Status } from "@/app/constants/status";
import type { Column } from "@/types/dataTable.types";
import type { StatusResult } from "@/types/constants.types";
import type { IProduct } from "../../types/product.types";

/* ================= STATUS HANDLER ================= */

const getBookStatus = (book: IProduct): StatusResult => {
  
  if (book.status === "blocked") {
    return { label: "Inactive", type: "blocked" };
  }
  return { label: "Active", type: "verified" };
};



/* ================= PAGE ================= */

const BookMgmntPage = () => {
    const [books, setBooks] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetVendorProducts();

  console.log('check data',data)


  
  const totalPages = 2

   useEffect(() => {
    if (data) {
      setBooks(
        data.map((item) => ({
          ...item,
          rentDate: new Date(item.rentDate),
          createdAt: new Date(item.createdAt),
          updatedAt: new Date(item.updatedAt),
          status: item.status as Status,
        }))
      );
    }
  }, [data]);

    const handleToggleBlock = (book: IProduct) => {
    setBooks((prev) =>
      prev.map((b) =>
        b._id === book._id
          ? {
              ...b,
              status: b.status === "active" ? "blocked" : "active",
            }
          : b
      )
    );
  };

/* ================= HANDLE UPDATE PRODUCT ================= */

const handleEdit = () =>{

}

/* ================= TABLE COLUMNS ================= */

const bookColumns: Column<IProduct>[] = [
  {
    key: "index",
    header: "#",
    render: (_, index) => (index + 1).toString().padStart(2, "0"),
  },
  {
    key: "book",
    header: "Book",
    render: (b) => (
      <div className="flex items-center gap-3">
        <img
          src={b.imageKey?.[0]}
          alt={b.productName}
          className="w-10 h-14 rounded object-cover border"
        />
        <div>
          <p className="font-medium">{b.productName}</p>
          <p className="text-xs text-slate-500">{b.productId}</p>
        </div>
      </div>
    ),
  },
  {
    key: "createdAt",
    header: "Date",
    render: (b) => new Date(b.createdAt).toLocaleDateString(),
  },
  {
    key: "category",
    header: "Category",
    render: (b) => b.category,
  },
  
  {
    key: "publisher",
    header: "Publisher",
    render: (b) => b.publisher,
  },
  {
    key: "language",
    header: "Language",
    render: (b) => `₹${b.language}`,
  },
  {
    key: "stock",
    header: "Stock",
    render: (b) => `₹${b.stock}`,
  },
  {
    key: "rating",
    header: "Rating",
    render: (b) => `₹${b.rating}`,
  },
  {
    key: "price",
    header: "Rent Price",
    render: (b) => `₹${b.rentPrice}`,
  },
  {
    key: "status",
    header: "Status",
    render: (b) => {
      const status = getBookStatus(b);
      return <span>{status.label}</span>;
    },
  },
   {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (c) => (
        <button
          onClick={() => handleToggleBlock(c)}
          className={`px-3 py-1 text-xs rounded font-medium ${
            c.status === "active"
              ? "bg-red-600 text-white"
              : "bg-slate-200 text-slate-700"
          }`}
        >
          {c.status === "active" ? "Block" : "Unblock"}
        </button>
      ),
    },
];


  return (
    <ManagementTable<IProduct, undefined>
      columns={bookColumns}
      getStatus={getBookStatus}
      onToggleBlock  = {(c) => handleToggleBlock(c)}
      title="Book Management"
      subtitle="Manage your books, pricing, and availability."
      data={books}
      page={page}
      totalPages={totalPages ?? 1}
      setPage={setPage}
      isLoading={isLoading}
      isError={isError}
      getName={(b) => b.productName}
      getId={(b) => b.productId}
      getImage={(b) => b.imageKey?.[0]}

      getCategory={(b) => b.category}

      getPublisher={(b)=> b.publisher}
      getLanguage={(b)=> b.language}
      getStock={(b)=> b.stock.toString()}
      getRentPrice={(b)=> b.rentPrice}
      getActualPrice={(b)=> b.actualPrice}
      getRating={(b)=> b.rating.average}
      getCreatedDate={(b)=> (b.createdAt).toISOString().split("T")[0]}
      enableBookData = {true}
      onEdit = {handleEdit}

    />
  );
};

export default BookMgmntPage;















