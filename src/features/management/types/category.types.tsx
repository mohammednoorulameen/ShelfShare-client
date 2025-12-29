export interface CreateCategoryPayload {
  name: string;
  description: string;
}

export interface  IUpdateCategory{
  name : string,
  description : string
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


 type StatusType = "verified" | "blocked";

  export interface StatusResult {
    label: string;
    type: StatusType;
  }