import type { Book } from "../../types/book.types";
import BookManagement from "../component/BookMgmnt";

// Dummy Books
const dummyBooks: Book[] = [
  {
    _id: "1",
    name: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Thriller",
    publisher: "Celadon Books",
    language: "English",
    description: "A thrilling psychological mystery.",
    actualPrice: 600,
    rentPrice: 299,
    stock: 12,
    duration: "7 days",
    imageKey: [
      "https://images-na.ssl-images-amazon.com/images/I/81LcKykF-tL.jpg",
    ],
    status: "active",
    rating: { count: 1200, average: 4.5 },
    createdAt: "2025-01-15T10:22:00Z",
  },

  {
    _id: "2",
    name: "Atomic Habits",
    author: "James Clear",
    category: "Self-help",
    publisher: "Penguin Random House",
    language: "English",
    description: "Build better habits with proven methods.",
    actualPrice: 900,
    rentPrice: 450,
    stock: 20,
    duration: "10 days",
    imageKey: [
      "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    ],
    status: "blocked",
    rating: { count: 3500, average: 4.8 },
    createdAt: "2025-01-10T09:10:00Z",
  },

  {
    _id: "3",
    name: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Finance",
    publisher: "Plata Publishing",
    language: "English",
    description: "Personal finance and wealth mindset.",
    actualPrice: 500,
    rentPrice: 350,
    stock: 18,
    duration: "7 days",
    imageKey: [
      "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
    ],
    status: "active",
    rating: { count: 2800, average: 4.6 },
    createdAt: "2025-02-01T14:32:00Z",
  },

  {
    _id: "4",
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    publisher: "Bloomsbury",
    language: "English",
    description: "The magical beginning of the Harry Potter series.",
    actualPrice: 700,
    rentPrice: 499,
    stock: 25,
    duration: "10 days",
    imageKey: [
      "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    ],
    status: "active",
    rating: { count: 5000, average: 4.9 },
    createdAt: "2025-02-03T11:40:00Z",
  },

  {
    _id: "5",
    name: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    publisher: "Harriman House",
    language: "English",
    description: "Timeless lessons on wealth, greed, and happiness.",
    actualPrice: 650,
    rentPrice: 399,
    stock: 10,
    duration: "5 days",
    imageKey: [
      "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
    ],
    status: "blocked",
    rating: { count: 1500, average: 4.7 },
    createdAt: "2025-01-29T16:00:00Z",
  },
];

const BookMgmntPage = () => {
  return (
    <div>
      <BookManagement
        books={dummyBooks}
        page={1}
        totalPages={1}
        setPage={() => {}}
        isLoading={false}
        isError={false}
        onToggleStatus={(id) => console.log("Toggle:", id)}
      />
    </div>
  );
};

export default BookMgmntPage;
