import { Button } from "@/shared-ui/ui/button";
import { Card, CardContent } from "@/shared-ui/ui/card";
import { Checkbox } from "@/shared-ui/ui/checkbox";
import { Input } from "@/shared-ui/ui/input";
import { Label } from "@/shared-ui/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared-ui/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared-ui/ui/select";
import {  Search, Star } from "lucide-react";

/* ================= EXPLORE SORTING SIDEBAR ================= */

export function Sidebar() {
  return (
    <div className="bg-white rounded-lg border p-6 space-y-8 h-fit">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl">Filters</h2>
        <button className="text-sm text-blue-600 font-medium hover:underline">
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Categories</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-9 bg-slate-50 border-none"
          />
        </div>
        <div className="space-y-2">
          {[
            { label: "Fiction", count: 234 },
            { label: "Non-Fiction", count: 156 },
            { label: "Mystery", count: 89 },
            { label: "Romance", count: 67 },
            { label: "Science Fiction", count: 45 },
          ].map((cat) => (
            <div key={cat.label} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={cat.label} />
                <Label htmlFor={cat.label} className="text-sm font-normal">
                  {cat.label}
                </Label>
              </div>
              <span className="text-xs text-muted-foreground">
                ({cat.count})
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Price Range</h3>
        <RadioGroup defaultValue="under-10">
          {[
            { label: "Under ₹10", id: "under-10" },
            { label: "₹10 - ₹20", id: "10-20" },
            { label: "₹20 - ₹50", id: "20-50" },
            { label: "Over ₹50", id: "over-50" },
          ].map((range) => (
            <div key={range.id} className="flex items-center space-x-2">
              <RadioGroupItem value={range.id} id={range.id} />
              <Label htmlFor={range.id} className="text-sm font-normal">
                {range.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* A - Z */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">A - Z</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="a-z" />
            <Label htmlFor="a-z" className="text-sm font-normal">
              A - Z
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="z-a" />
            <Label htmlFor="z-a" className="text-sm font-normal">
              Z - A
            </Label>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">Rating</h3>
        {[5, 4, 3].map((star) => (
          <div key={star} className="flex items-center space-x-2">
            <Checkbox id={`star-${star}`} />
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < star ? "text-orange-400" : "text-gray-200"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <Label
              htmlFor={`star-${star}`}
              className="text-sm font-normal text-muted-foreground"
            >
              & up
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= EXPLORE PRODUCT CARD ================= */

interface BookCardProps {
  title: string;
  author: string;
  rating: number;
  price: string;
  image: string;
}

// export function BookCard({
//   title,
//   author,
//   rating,
//   price,
//   image,
// }: BookCardProps) {
//   return (
//     <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow bg-card">
//       <div className="aspect-3/4 relative overflow-hidden">
//         {/* <Image
//           src={image || "/placeholder.svg"}
//           alt={title}
//           fill
//           className="object-cover transition-transform hover:scale-105"
//         /> */}
//         <img
//           src={image || "/placeholder.svg"}
//           alt="Book cover"
//           className="w-32 h-40 object-cover rounded-lg"
//         />
//       </div>
//       <CardContent className="p-4 space-y-2">
//         <div className="space-y-1">
//           <h3 className="font-bold text-lg leading-tight">{title}</h3>
//           <p className="text-sm text-muted-foreground">{author}</p>
//         </div>

//         <div className="flex gap-0.5">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <Star
//               key={i}
//               className={`w-4 h-4 ${
//                 i < rating ? "fill-orange-400 text-orange-400" : "text-gray-200"
//               }`}
//             />
//           ))}
//         </div>

//         <div className="flex items-center justify-between pt-2">
//           <span className="font-bold text-lg">{price}</span>
//           <Button
//             variant="default"
//             className="bg-blue-600 hover:bg-blue-700 px-6"
//           >
//             Rent Now
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }


export function BookCard({
  title,
  author,
  rating,
  price,
  image,
}: BookCardProps) {
  return (
    <Card className="rounded-2xl overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white">
      {/* IMAGE SECTION */}
      <div className="relative w-full aspect-3/4 bg-linear-to-br to-pink-50 flex items-center justify-center">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-[85%] object-contain drop-shadow-xl"
        />
      </div>

      {/* CONTENT */}
      <CardContent className="p-5 space-y-3">
        <div>
          <h3 className="text-xl font-semibold leading-tight">{title}</h3>
          <p className="text-base text-muted-foreground mt-1">{author}</p>
        </div>

        {/* RATING */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating
                  ? "fill-orange-400 text-orange-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold">{price}</span>
          <Button className="rounded-xl px-6 py-2 bg-blue-600 hover:bg-blue-700">
            Rent Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ================= EXPLORE HEADER SORT ================= */




export function SortHeader({ resultsCount }: { resultsCount: number }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">Books</h1>
        <p className="text-sm text-muted-foreground">Showing {resultsCount.toLocaleString()} results</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
        <Select defaultValue="relevance">
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

