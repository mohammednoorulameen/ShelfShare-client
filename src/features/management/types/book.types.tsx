export interface Book {
  _id: string;
  name: string;
  actualPrice: number;
  rentPrice: number;
  stock: number;
  category: string;       
  description: string;
  publisher: string;
  author: string;
  language: string;
  rentDate?: string;
  duration: string;
  imageKey: string[];
  status: "active" | "blocked";

  rating: {
    count: number;
    average: number;
  };

  createdAt: string;
}


export interface BookManagementPropss {
  books: Book[];
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  isError: boolean;
  onToggleStatus: (id: string) => void;
}

export interface RentBookFormData {
  name: string;
  actualPrice: number;
  rentPrice: number;
  stock: number;
  category: string;
  description: string;
  publisher: string;
  author: string;
  language: string;
  rentDate: string;
  duration: string;
  imageKey: File[]; 
  status: "active" | "blocked";
  rating: {
    count: number;
    average: number;
  };
  
}
