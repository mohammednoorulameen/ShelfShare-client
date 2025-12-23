import type { Status } from "@/app/constants/status";
import type { Category } from "./category.types";

// Simulating ObjectId as string for frontend
export type ObjectId = string;

export interface ProductRating {
  count: number;
  average: number;
}

export interface ProductResponseDto {
  _id: ObjectId;
  vendorId: string;        
  productId: string;       
  productName: string;
  actualPrice: number;
  rentPrice: number;
  stock: number;
  category: ObjectId;       
  description: string;
  publisher: string;
  author: string;
  language: string;
  rentDate: string;         
  duration: string;
  imageKey: string[];
  status: string;
  rating: ProductRating;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  _id?: ObjectId;
  vendorId: string;
  // vendorId: ObjectId;
  productId : string,
  productName: string;
  actualPrice: number;
  rentPrice: number;
  stock: number;
  // category: ObjectId;
  category: string;
  description: string;
  publisher: string;
  author: string;
  language: string;
  rentDate: Date;
  duration: string;
  imageKey: string[];
  status: Status
  rating: ProductRating;
  createdAt: Date;
}

export interface IProductPayload {
  productName: string;
  actualPrice: number;
  rentPrice: number;
  stock: number;
  category: string;
  description: string;
  publisher: string;
  author: string;
  language: string;
  rentDate: string | Date;
  duration: string;
  imageKey: string[];
  status: Status
  vendorId: string;
}

export interface CategoryOption {
  id: string;
  name: string;
}



export interface AddRentProdectProps {
  formData: IProductPayload;
  setFormData: React.Dispatch<React.SetStateAction<IProductPayload>>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  categories: Category[];
  imagePreviews: string[];
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
  handleAiAutofill: () => void;
  isAiLoading: boolean;
  isSubmitting: boolean;
  currentVendor: {
    id: string;
    name: string;
  };
}


export interface BookManagementProps {
  books: Product[];
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  isError: boolean;
  // onToggleStatus: (id: string) => void;
}


export interface ApiResponse<T> {
  success: boolean;
  data: T;
}


export interface IUpdateProduct {
  productId: string;
  data: Partial<IProductPayload>;
}
