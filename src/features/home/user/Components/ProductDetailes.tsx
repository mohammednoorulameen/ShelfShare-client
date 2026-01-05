import {
  Calendar,
  ChevronRight,
  Heart,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Star,
  ThumbsUp,
} from "lucide-react";
import type { BookDetailsProps } from "../../types/Iproduct.types";
import { useState } from "react";

// ============================ BOOK DETAILS ============================

export const BookDetails: React.FC<BookDetailsProps> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);

  const {
    productName,
    author,
    description,
    imageKey,
    actualPrice,
    rentPrice,
    duration,
    stock,
    publisher,
    rating,
    status,
  } = product;

  return (
    <div className="bg-white lg:rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT – IMAGE GALLERY (5 cols) */}
        <div className="lg:col-span-5 p-6 md:p-10 bg-slate-50/50">
          <div className="space-y-6 sticky top-24">
            <div className="relative aspect-3/4 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center group overflow-hidden">
              <img
                src={
                  imageKey[activeImage] ||
                  "https://picsum.photos/seed/book1/600/800"
                }
                alt={productName}
                className="max-h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-slate-100 hover:scale-110 active:scale-95 transition-all">
                <Heart className="w-5 h-5 text-slate-400 hover:text-red-500" />
              </button>
            </div>

            <div className="flex gap-4 justify-center">
              {imageKey.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 aspect-3/4 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === i
                      ? "border-blue-600 scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Preview ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT – INFO (7 cols) */}
        <div className="lg:col-span-7 p-6 md:p-10 flex flex-col">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-full uppercase tracking-wider border border-blue-100">
              {publisher}
            </span>
            <span
              className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider border ${
                status === "active"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                  : "bg-red-50 text-red-700 border-red-100"
              }`}
            >
              {status}
            </span>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
                {productName}
              </h1>
              <p className="text-lg font-medium text-slate-500">
                by{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  {author}
                </span>
              </p>
            </div>
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <Share2 size={20} />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < Math.floor(rating.average)
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-200"
                  }
                />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">
              {rating.count}
            </span>
            <span className="text-sm text-slate-400 border-l border-slate-200 pl-2 ml-1">
              128 Reviews
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">
                Publisher
              </p>
              <p className="text-sm font-semibold text-slate-800 line-clamp-1">
                {publisher}
              </p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">
                Original Price
              </p>
              <p className="text-sm font-semibold text-slate-800">
                ₹{actualPrice}
              </p>
            </div>
            {/* <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">In Stock</p>
              <p className="text-sm font-semibold text-slate-800">{stock} Copies</p>
            </div> */}
            <div
              className={`p-3 rounded-xl border ${
                stock === 0
                  ? "bg-red-50 border-red-200"
                  : "bg-slate-50 border-slate-100"
              }`}
            >
              <p
                className={`text-[10px] uppercase font-bold tracking-widest mb-1 ${
                  stock === 0 ? "text-red-500" : "text-slate-400"
                }`}
              >
                {stock === 0 ? "Out of Stock" : "In Stock"}
              </p>

              <p
                className={`text-sm font-semibold ${
                  stock === 0 ? "text-red-700" : "text-slate-800"
                }`}
              >
                {stock === 0 ? "0 Copies" : `${stock} Copies`}
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">
                Duration
              </p>
              <p className="text-sm font-semibold text-slate-800">{duration}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              Synopsis
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* VENDOR & LOCATION */}
          <div className="flex flex-wrap items-center justify-between gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full border border-slate-200 flex items-center justify-center font-bold text-blue-600">
                AB
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none mb-1">
                  Vendor
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-800">
                    ABC Books Store
                  </span>
                  <button className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded flex items-center gap-1 hover:bg-blue-700 transition-colors">
                    <MessageSquare size={10} /> Chat
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none mb-1">
                  Location
                </p>
                <span className="text-sm font-semibold text-slate-800">
                  Kochi, Kerala
                </span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-auto pt-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-full sm:w-auto">
              <p className="text-slate-400 text-xs font-medium">Rental Cost</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">
                  ₹{rentPrice}
                </span>
                <span className="text-slate-400 font-medium">/ {duration}</span>
              </div>
            </div>

            {/* <div className="flex flex-1 gap-3 w-full">
              <button className="flex-1 bg-slate-900 hover:bg-black text-white px-6 h-14 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all hover:translate-y-[-2px] active:translate-y-[0px] shadow-lg shadow-slate-200">
                <Calendar className="w-5 h-5" />
                Rent This Book
              </button>
              <button className="h-14 w-14 border-2 border-slate-200 flex items-center justify-center rounded-2xl text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all">
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div> */}
            <div className="flex flex-1 gap-3 w-full">
              {/* RENT BUTTON */}
              <button
                disabled={stock === 0}
                className={`flex-1 px-6 h-14 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all shadow-lg
      ${
        stock === 0
          ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
          : "bg-slate-900 hover:bg-black text-white hover:-translate-y-[2px] active:translate-y-0 shadow-slate-200"
      }
    `}
              >
                <Calendar className="w-5 h-5" />
                {stock === 0 ? "Out of Stock" : "Rent This Book"}
              </button>

              {/* ADD TO CART BUTTON */}
              <button
                disabled={stock === 0}
                className={`h-14 w-14 border-2 rounded-2xl flex items-center justify-center transition-all
      ${
        stock === 0
          ? "border-gray-300 text-gray-400 cursor-not-allowed"
          : "border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600"
      }
    `}
              >
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4 text-[11px] text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" /> Secure
              Checkout
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" /> Money Back
              Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================ BOOK DETAILS ============================

const REVIEWS = [
  {
    id: 1,
    title: "Absolutely mind-blowing!",
    body: "I couldn't put this book down. The twist at the end was something I never saw coming. Highly recommend for any thriller fan.",
    reviewer: "Sarah Jenkins",
    date: "2 weeks ago",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
  },
  {
    id: 2,
    title: "Slow start but worth it",
    body: "The beginning was a bit slow, but once the psychological elements kicked in, it became impossible to stop reading. The rental process was smooth too.",
    reviewer: "Marcus Thorne",
    date: "1 month ago",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    rating: 4,
  },
  {
    id: 3,
    title: "Great condition",
    body: "The book arrived in perfect condition. It looked brand new. The story is a masterpiece of modern psychological thrillers.",
    reviewer: "Elena Rodriguez",
    date: "1 month ago",
    avatar: "https://i.pravatar.cc/150?u=elena",
    rating: 5,
  },
];

export const ReviewSection: React.FC = () => {
  return (
    <div className="py-12 border-t border-slate-200">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Rating Breakdown */}
        <div className="md:w-1/3 space-y-6">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            What readers are saying
          </h2>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-5xl font-black text-slate-900">4.9</p>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-400 text-[11px] font-bold mt-2 uppercase tracking-widest">
                Total 128 Reviews
              </p>
            </div>

            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-[11px] font-bold text-slate-500 w-2">
                    {rating}
                  </span>
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{
                        width: `${rating === 5 ? 85 : rating === 4 ? 12 : 1}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl font-bold transition-all shadow-lg shadow-blue-100">
              Write a Review
            </button>
            <p className="text-center text-[10px] text-slate-400 font-medium">
              Only verified renters can leave a review
            </p>
          </div>
        </div>

        {/* Right: Review List */}
        <div className="md:w-2/3 space-y-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="group relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={review.avatar}
                      alt={review.reviewer}
                      className="w-10 h-10 rounded-full border border-slate-200 object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-0.5 border-2 border-white">
                      <ShieldCheck size={8} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {review.reviewer}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold">
                      {review.date}
                    </p>
                  </div>
                </div>
                <button className="text-slate-300 hover:text-slate-600 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="pl-13">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-200"
                      }
                    />
                  ))}
                </div>
                <h5 className="font-bold text-slate-900 mb-2 leading-snug">
                  {review.title}
                </h5>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {review.body}
                </p>

                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-600 transition-colors text-[11px] font-bold uppercase tracking-wider">
                    <ThumbsUp size={14} /> Helpful (12)
                  </button>
                  <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-600 transition-colors text-[11px] font-bold uppercase tracking-wider">
                    <MessageSquare size={14} /> Reply
                  </button>
                </div>
              </div>

              <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-slate-100 hidden md:block" />
            </div>
          ))}

          <button className="w-full py-4 border-2 border-slate-100 rounded-2xl text-slate-400 font-bold text-sm hover:bg-slate-50 hover:border-slate-200 transition-all">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================ RELATED BOOKS  ============================

const RELATED_BOOKS = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "₹199",
    image: "/great-gatsby-cover.jpg",
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: "₹249",
    image: "/gone-girl-cover.jpg",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: "₹299",
    image: "/harry-potter-cover.jpg",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    price: "₹349",
    image: "/dune-cover.jpg",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    price: "₹349",
    image: "/dune-cover.jpg",
  },
];

export const RelatedBooks: React.FC = () => {
  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            You might also like
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Based on your interest in Psychological Thrillers
          </p>
        </div>
        <button className="group flex items-center gap-1 text-blue-600 font-bold text-sm hover:translate-x-1 transition-transform">
          View all recommendations <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {RELATED_BOOKS.map((book) => (
          <div key={book.title} className="group cursor-pointer">
            <div className="relative aspect-[2/3] bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-100 mb-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <button className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-xl text-slate-900 font-bold text-[10px] shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                Quick Rent
              </button>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-extrabold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                {book.title}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                {book.author}
              </p>
              <div className="flex items-center gap-1 pt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 font-bold">
                  (4.8)
                </span>
              </div>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-sm font-black text-slate-900">
                  {book.price}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Rental
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
