

import type { PaginationProps } from "@/types/pagination.types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  page,
  totalPages,
  totalItems,
  onPrev,
  onNext,
}: PaginationProps) => {
  return (
    <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
      <p className="text-xs font-semibold text-slate-500 italic">
        Showing{" "}
        <span className="text-slate-900 font-bold">
          {totalItems}
        </span>{" "}
        entries
      </p>

      <div className="flex items-center gap-2">
        <button
          disabled={page === 1}
          onClick={onPrev}
          className="p-2 border border-slate-200 rounded-lg bg-white disabled:opacity-40 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="px-3 text-xs font-bold text-slate-600">
          {page} / {totalPages}
        </div>

        <button
          disabled={page === totalPages}
          onClick={onNext}
          className="p-2 border border-slate-200 rounded-lg bg-white disabled:opacity-40 hover:bg-slate-50 transition-colors shadow-sm"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;














// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "./ui/button"
// import type { PaginationProps } from "@/types/pagination.types";


// export default function Pagination({
//   page,
//   totalPages,
//   totalItems,
//   onPrev,
//   onNext,
// }: PaginationProps) {
//   if (totalPages <= 1) return null;

//   return (
//     <div className="flex items-center justify-between pt-6 border-t mt-6">
//       {/* LEFT INFO */}
//       <p className="text-sm text-muted-foreground">
//         Showing page <span className="font-semibold">{page}</span> of{" "}
//         <span className="font-semibold">{totalPages}</span> ({totalItems} items)
//       </p>

//       {/* CONTROLS */}
//       <div className="flex items-center gap-2">
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={onPrev}
//           disabled={page === 1}
//           className="h-9 w-9"
//         >
//           <ChevronLeft className="h-4 w-4" />
//         </Button>

//         <span className="px-3 text-sm font-semibold text-blue-600">
//           {page}
//         </span>

//         <Button
//           variant="outline"
//           size="icon"
//           onClick={onNext}
//           disabled={page === totalPages}
//           className="h-9 w-9"
//         >
//           <ChevronRight className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   );
// }
