export interface CreateCategoryPayload {
  name: string;
  description: string;
}

export interface CategoryManagementProps {
  form: {
    name: string;
    description: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
    }>
  >;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  categories: Category[];
  isLoading: boolean;
  onToggleStatus: (categoryId: string) => void; 
}


export interface Category {
  _id: string;
  categoryId: string;
  name: string;
  description: string;
  status: string
  createdAt: string;
  updatedAt: string;
}

export interface CategoryResponse {
  data: Category[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
