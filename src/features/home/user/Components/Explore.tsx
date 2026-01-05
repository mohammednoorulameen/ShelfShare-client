import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  // Grid2X2,
  Heart,
  // List,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Star,
} from "lucide-react";

/* ================= EXPLORE HEADER SORT ================= */

interface SortHeaderProps {
  resultsCount: number;
}
export const SortHeader: React.FC<SortHeaderProps> = ({ resultsCount }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-blue-600"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
            Premium Collection
          </span>
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-none mb-4">
          Discover Titles
        </h1>
        <p className="text-slate-400 text-xs font-medium">
          Browsing{" "}
          <span className="text-slate-900 font-bold">
            {resultsCount} results
          </span>{" "}
          across all categories
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* <div className="flex items-center bg-slate-50 p-1 rounded-xl">
          <button className="p-2 bg-white shadow-sm rounded-lg text-slate-900">
            <Grid2X2 size={14} />
          </button>
          <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
            <List size={14} />
          </button>
        </div> */}

        <div className="relative group">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-100 rounded-xl cursor-pointer hover:border-slate-300 transition-all">
            <SlidersHorizontal size={12} className="text-slate-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
              Sort: Recommended
            </span>
            <ChevronDown
              size={12}
              className="text-slate-400 group-hover:rotate-180 transition-transform"
            />
          </div>

          {/* Custom Select Dropdown Placeholder */}
          <select className="absolute inset-0 opacity-0 cursor-pointer">
            <option>Recommended</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// export function SortHeader({ resultsCount }: { resultsCount: number }) {
//   return (
//     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//       <div>
//         <h1 className="text-3xl font-bold">Books</h1>
//         <p className="text-sm text-muted-foreground">Showing {resultsCount.toLocaleString()} results</p>
//       </div>
//       <div className="flex items-center gap-2">
//         <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
//         <Select defaultValue="relevance">
//           <SelectTrigger className="w-[180px] bg-white">
//             <SelectValue placeholder="Sort by" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="relevance">Relevance</SelectItem>
//             <SelectItem value="newest">Newest</SelectItem>
//             <SelectItem value="price-low">Price: Low to High</SelectItem>
//             <SelectItem value="price-high">Price: High to Low</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//     </div>
//   )
// }

/* ================= EXPLORE SORTING SIDEBAR ================= */

// export function Sidebar() {

//   return (
//     <div className="bg-white rounded-lg border p-6 space-y-8 h-fit">
//       <div className="flex items-center justify-between">
//         <h2 className="font-bold text-xl">Filters</h2>
//         <button className="text-sm text-blue-600 font-medium hover:underline">
//           Clear All
//         </button>
//       </div>

//       {/* Categories */}
//       <div className="space-y-4">
//         <h3 className="font-semibold text-sm">Categories</h3>
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//           <Input
//             placeholder="Search"
//             className="pl-9 bg-slate-50 border-none"
//           />
//         </div>
//         <div className="space-y-2">
//           {[
//             { label: "Fiction", count: 234 },
//             { label: "Non-Fiction", count: 156 },
//             { label: "Mystery", count: 89 },
//             { label: "Romance", count: 67 },
//             { label: "Science Fiction", count: 45 },
//           ].map((cat) => (
//             <div key={cat.label} className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <Checkbox id={cat.label} />
//                 <Label htmlFor={cat.label} className="text-sm font-normal">
//                   {cat.label}
//                 </Label>
//               </div>
//               <span className="text-xs text-muted-foreground">
//                 ({cat.count})
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Price Range */}
//       <div className="space-y-4">
//         <h3 className="font-semibold text-sm">Price Range</h3>
//         <RadioGroup defaultValue="under-10">
//           {[
//             { label: "Under ₹10", id: "under-10" },
//             { label: "₹10 - ₹20", id: "10-20" },
//             { label: "₹20 - ₹50", id: "20-50" },
//             { label: "Over ₹50", id: "over-50" },
//           ].map((range) => (
//             <div key={range.id} className="flex items-center space-x-2">
//               <RadioGroupItem value={range.id} id={range.id} />
//               <Label htmlFor={range.id} className="text-sm font-normal">
//                 {range.label}
//               </Label>
//             </div>
//           ))}
//         </RadioGroup>
//       </div>

//       {/* A - Z */}
//       <div className="space-y-4">
//         <h3 className="font-semibold text-sm">A - Z</h3>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <Checkbox id="a-z" />
//             <Label htmlFor="a-z" className="text-sm font-normal">
//               A - Z
//             </Label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox id="z-a" />
//             <Label htmlFor="z-a" className="text-sm font-normal">
//               Z - A
//             </Label>
//           </div>
//         </div>
//       </div>

//       {/* Rating */}
//       <div className="space-y-4">
//         <h3 className="font-semibold text-sm">Rating</h3>
//         {[5, 4, 3].map((star) => (
//           <div key={star} className="flex items-center space-x-2">
//             <Checkbox id={`star-${star}`} />
//             <div className="flex gap-0.5">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <span
//                   key={i}
//                   className={`text-lg ${
//                     i < star ? "text-orange-400" : "text-gray-200"
//                   }`}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>
//             <Label
//               htmlFor={`star-${star}`}
//               className="text-sm font-normal text-muted-foreground"
//             >
//               & up
//             </Label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

const CATEGORIES = [
  { label: "Fiction", count: 234 },
  { label: "Non-Fiction", count: 156 },
  { label: "Mystery", count: 89 },
  { label: "Romance", count: 67 },
  { label: "Science Fiction", count: 45 },
];

const PRICE_RANGES = [
  { label: "Under ₹10", id: "under-10" },
  { label: "₹10 - ₹20", id: "10-20" },
  { label: "₹20 - ₹50", id: "20-50" },
  { label: "Over ₹50", id: "over-50" },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24 h-fit pb-10">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">
          Refine By
        </h2>
        <button className="text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
          Reset
        </button>
      </div>

      <div className="space-y-10">
        {/* Search */}
        <section>
          <div className="relative group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-slate-900 transition-colors" />
            <input
              type="text"
              placeholder="Search library..."
              className="w-full pl-7 py-2 bg-transparent border-b border-slate-100 focus:border-slate-900 focus:outline-none text-xs font-medium placeholder:text-slate-300 transition-all"
            />
          </div>
        </section>

        {/* Categories */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-5">
            Genre
          </h3>
          <div className="space-y-3">
            {CATEGORIES.map((cat) => (
              <label
                key={cat.label}
                className="group flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded border border-slate-200 flex items-center justify-center transition-all group-hover:border-slate-900">
                    <div className="w-2 h-2 rounded-sm bg-slate-900 opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                  </div>
                  <input type="checkbox" className="hidden" />
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                    {cat.label}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-200 group-hover:text-slate-400">
                  {cat.count}
                </span>
              </label>
            ))}
          </div>
          <button className="mt-5 text-[10px] font-black uppercase tracking-widest text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
            See All <ChevronRight size={10} />
          </button>
        </section>

        {/* Price */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-5">
            Price Range
          </h3>
          <div className="space-y-3">
            {PRICE_RANGES.map((range) => (
              <label
                key={range.id}
                className="group flex items-center gap-3 cursor-pointer"
              >
                <div className="w-4 h-4 rounded-full border border-slate-200 flex items-center justify-center transition-all group-hover:border-slate-900">
                  <div className="w-2 h-2 rounded-full bg-slate-900 opacity-0 group-has-checked:opacity-100 transition-opacity" />
                </div>
                <input type="radio" name="price" className="hidden" />
                <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Rating */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-5">
            Rating
          </h3>
          <div className="space-y-4">
            {[5, 4, 3].map((star) => (
              <label
                key={star}
                className="group flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-200 text-slate-900 focus:ring-0"
                />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className={
                        i < star
                          ? "fill-slate-900 text-slate-900"
                          : "text-slate-100"
                      }
                    />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-slate-300">
                  & Up
                </span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
};

/* ================= EXPLORE PRODUCT CARD ================= */

interface BookCardProps {
  productName: string;
  author: string;
  rating: number;
  price: string;
  image: string;
  rentPrice: string;
}

export const BookCard: React.FC<BookCardProps> = ({
  productName,
  author,
  rating,
  price,
  rentPrice,
  image,
}) => {
  return (
    <div className="group flex flex-col transition-all duration-500">
      {/* Editorial Image Section */}
      <div className="relative aspect-[3/4.2] mb-5 rounded-2xl overflow-hidden bg-[#F3F4F6] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200 group-hover:-translate-y-1">
        <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
          <img
            src={image || "/placeholder.svg"}
            alt={productName}
            className="h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* Dynamic Overlay Actions */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-all duration-500" />

        <div className="absolute top-4 right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
          <button className="p-2.5 bg-white rounded-xl text-slate-400 hover:text-red-500 shadow-xl transition-colors">
            <Heart
              size={16}
              fill="currentColor"
              className="fill-transparent hover:fill-red-500"
            />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full py-3 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-xl hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
            Quick Look <ArrowUpRight size={12} />
          </button>
        </div>
      </div>

      {/* Clean Metadata */}
      <div className="flex flex-col flex-1 px-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-extrabold text-slate-900 leading-tight line-clamp-1 flex-1 pr-2">
            {productName}
          </h3>
          <span className="text-[10px] font-black text-slate-900">
            {rentPrice}
          </span>
        </div>

        <p className="text-[11px] text-slate-400 font-medium mb-3">{author}</p>
        <p className="text-[11px] text-slate-400 font-medium mb-3">
          actual Price:{price}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={10} className="fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-black text-slate-900">
              {rating}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`text-[9px] font-bold uppercase tracking-wider ${
                status === "Active" ? "text-emerald-500" : "text-slate-400"
              }`}
            >
              {status}
            </span>
            <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
              <ShoppingCart size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export function BookCard({
// title,
// author,
// rating,
// price,
// image,
// }: BookCardProps) {
//   return (
//     <Card className="rounded-2xl overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white">
//       {/* IMAGE SECTION */}
//       <div className="relative w-full aspect-3/4 bg-linear-to-br to-pink-50 flex items-center justify-center">
//         <img
//           src={image || "/placeholder.svg"}
//           alt={title}
//           className="h-[85%] object-contain drop-shadow-xl"
//         />
//       </div>

//       {/* CONTENT */}
//       <CardContent className="p-5 space-y-3">
//         <div>
//           <h3 className="text-xl font-semibold leading-tight">{title}</h3>
//           <p className="text-base text-muted-foreground mt-1">{author}</p>
//         </div>

//         {/* RATING */}
//         <div className="flex gap-1">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <Star
//               key={i}
//               className={`w-5 h-5 ${
//                 i < rating
//                   ? "fill-orange-400 text-orange-400"
//                   : "text-gray-300"
//               }`}
//             />
//           ))}
//           <span>stock : 10</span>
//         </div>

//         {/* PRICE + BUTTON */}
//         <div className="flex items-center justify-between pt-2">
//           <span className="text-2xl font-bold">{price}</span>
//           <Button className="rounded-xl px-6 py-2 bg-blue-600 hover:bg-blue-700">
//             Rent Now
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
