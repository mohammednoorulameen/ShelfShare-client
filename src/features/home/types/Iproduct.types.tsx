export interface BookDetailsProps {
  product: {
    productName: string;
    author: string;
    description: string;
    imageKey: string[];
    actualPrice: number;
    rentPrice: number;
    duration: string;
    stock: number;
    publisher: string;
    rating: {
      average: number;
      count: number;
    };
    status: string;
  };
}
