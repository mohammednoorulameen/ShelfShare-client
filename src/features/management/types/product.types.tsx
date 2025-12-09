import type { Category } from "./category.types";

// Simulating ObjectId as string for frontend
export type ObjectId = string;

export interface BookRating {
  count: number;
  average: number;
}

export interface Product {
  _id?: ObjectId;
  vendorId: ObjectId;
  name: string;
  actualPrice: number;
  rentPrice: number;
  stock: number;
  category: ObjectId;
  description: string;
  publisher: string;
  author: string;
  language: string;
  rentDate: Date;
  duration: string;
  imageKey: string[];
  status: "active" | "inactive";
  rating: BookRating;
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
  status: "active" | "inactive";
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
