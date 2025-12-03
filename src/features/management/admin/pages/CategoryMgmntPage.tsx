// CategoryMgmntPage.tsx
import { useState } from "react";
import CategoryManagement from "../component/CategoryMgmnt";
import { toast } from "react-hot-toast";
import {
  useCreateCategory,
  useGetCategory,
  useToggleCategoryStatus,
} from "../api/adminCategoryMgmntApi";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/app/constants/messages";
import { isAxiosError } from "axios";

const CategoryMgmntPage = () => {
  const createCategory = useCreateCategory();
  const { data, isLoading, refetch } = useGetCategory(1, 10);
  const toggleCategory = useToggleCategoryStatus();
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

  const handleToggleStatus = (categoryId: string) => {
    toggleCategory.mutate(categoryId, {
      onSuccess: () => {
        toast.success(SUCCESS_MESSAGES.CATEGORY_UPDATED);
        refetch();
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

  return (
    <CategoryManagement
      form={form}
      setForm={setForm}
      onSubmit={handleSubmit}
      categories={data?.data || []}
      isLoading={isLoading}
      onToggleStatus={handleToggleStatus}
    />
  );
};

export default CategoryMgmntPage;
