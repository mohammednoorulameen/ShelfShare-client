
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