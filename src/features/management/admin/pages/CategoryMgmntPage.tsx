// CategoryMgmntPage.tsx
import { useEffect, useState } from "react";
import {
  useCreateCategory,
  useGetCategory,
  useToggleCategoryStatus,
} from "../api/adminCategoryMgmntApi";

import ManagementTable, { type Column } from "@/shared/DataTable";
import type { Category } from "../../types/category.types";
import { ERROR_MESSAGES } from "@/app/constants/messages";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

/* ================= PAGE ================= */

const CategoryMgmntPage = () => {
  const [page, setPage] = useState(1);
  const [showCreate, setShowCreate] = useState(false);
  const { data, isLoading, isError } = useGetCategory(page, 10);
  const toggleCategory = useToggleCategoryStatus();
  const createCategory = useCreateCategory();

  /* ================= LOCAL STATE (IMPORTANT) ================= */

  const [localCategories, setLocalCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (data?.data) {
      setLocalCategories(data.data);
    }
  }, [data]);

  const handleAddClick = () => {
    setShowCreate(true);
  };

  // const handleCancel = () => {
  //   setShowCreate(false);
  //   setForm({ name: "", description: "" });
  // };
  const handleCancel = () => {
    setShowCreate(false);

    if (setForm) {
      setForm({ name: "", description: "" });
    }
  };

  /* ================= STATUS TYPES ================= */

  type StatusType = "verified" | "blocked";

  interface StatusResult {
    label: string;
    type: StatusType;
  }

  const getCategoryStatus = (category: Category): StatusResult => {
    if (category.status === "blocked")
      return { label: "Blocked", type: "blocked" };

    return { label: "Verified", type: "verified" };
  };

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createCategory.mutate(form, {
      onSuccess: () => {
        toast.success("Category created successfully!");
        setForm({ name: "", description: "" });
      },
      onError: (error) => {
        let message = ERROR_MESSAGES.SOMETHING_WENT_WRONG;
        if (isAxiosError(error)) {
          message = error.response?.data?.message || message;
        }
        toast.error(message);
      },
    });
  };

  /* ================= HANDLER (OPTIMISTIC UPDATE) ================= */

  const handleToggleBlock = (category: Category) => {
    // 🔹 optimistic UI update
    setLocalCategories((prev) =>
      prev.map((c) =>
        c._id === category._id
          ? {
              ...c,
              status: c.status === "active" ? "blocked" : "active",
            }
          : c
      )
    );

    toggleCategory.mutate(category._id, {
      onError: () => {
        setLocalCategories((prev) =>
          prev.map((c) => (c._id === category._id ? category : c))
        );
      },
    });
  };

  /* ================= COLUMNS ================= */

  const categoryColumns: Column<Category>[] = [
    {
      key: "index",
      header: "#",
      render: (_, index) =>
        (index + 1 + (page - 1) * 10).toString().padStart(2, "0"),
    },
    {
      key: "name",
      header: "Category",
      render: (c) => (
        <div>
          <p className="font-medium text-slate-900">{c.name}</p>
          <p className="text-xs text-slate-500">{c._id}</p>
        </div>
      ),
    },
    {
      key: "description",
      header: "Description",
      render: (c) => c.description || "-",
    },
    {
      key: "status",
      header: "Status",
      render: (c) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            c.status === "active"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {c.status === "active" ? "Active" : "Blocked"}
        </span>
      ),
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

  /* ================= RENDER ================= */

  return (
    <ManagementTable<Category, { name: string; description: string }>
      title="Category Management"
      subtitle="Manage product categories and control visibility"
      columns={categoryColumns}
      data={localCategories}
      page={page}
      totalPages={data?.totalPages ?? 1}
      setPage={setPage}
      isLoading={isLoading}
      isError={isError}
      getName={(c) => c.name}
      getId={(c) => c.categoryId}
      getDescription={(c) => c.description}
      getStatus={getCategoryStatus}
      onToggleBlock={(c) => handleToggleBlock(c)}
      form={form}
      setForm={setForm}
      onSubmit={handleSubmit}
      handleCancel={handleCancel}
      handleAddClick={handleAddClick}
      showCreate={showCreate}
      enableCreate={true}
    />
  );
};

export default CategoryMgmntPage;
