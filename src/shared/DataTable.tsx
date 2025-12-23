import React, { useState } from "react";
import {
  Search,
  Filter,
  Mail,
  Phone,
  CheckCircle,
  XCircle,
  Shield,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

export type StatusType =
  | "verified"
  | "blocked"
  | "rejected"
  | "pending"
  | "email_unverified"
  | "unknown";

interface StatusResult {
  label: string;
  type: StatusType;
}


/* ================= TYPES ================= */

export type Column<T> = {
  key: string;
  header: string;
  align?: "left" | "right" | "center";
  render: (item: T, index: number) => React.ReactNode;
};

// interface ManagementTableProps<T> {
//   title: string;
//   subtitle: string;
//   data: T[];
//   columns: Column<T>[];
//   page: number;
//   totalPages: number;
//   setPage: React.Dispatch<React.SetStateAction<number>>;
//   isLoading: boolean;
//   isError: boolean;
// }

interface ManagementTableProps<T> {
  title: string;
  subtitle: string;
  data: T[];
  columns: Column<T>[];
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  isError: boolean;
}



interface ManagementTableProps<T> {
  title: string;
  subtitle: string;
  data: T[];
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  getStatus: (item: T) => StatusResult;
  getName: (item: T) => string;
  getId: (item: T) => string;
  getEmail: (item: T) => string;
  getPhone?: (item: T) => string;
  getImage?: (item: T) => string | undefined;
  getVendorReply?: (item: T) => string | undefined;
  onApprove?: (item: T) => void;
  onReject?: (item: T, reason: string) => void;
  onToggleBlock?: (item: T) => void;
  isLoading: boolean;
  isError: boolean;
}

const fallbackImg = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const statusStyles: Record<StatusType, string> = {
  verified: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  blocked: "bg-red-50 text-red-700 ring-red-600/20",
  rejected: "bg-orange-50 text-orange-700 ring-orange-600/20",
  pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
  email_unverified: "bg-slate-100 text-slate-600 ring-slate-500/20",
  unknown: "bg-slate-50 text-slate-700 ring-slate-600/20",
};

function ManagementTable<T>({
  title,
  subtitle,
  data,
  page,
  totalPages,
  setPage,
  getStatus,
  getName,
  getId,
  getEmail,
  getPhone,
  getImage,
  getVendorReply,
  onApprove,
  onReject,
  onToggleBlock,
  isLoading,
  isError,
  columns
}: ManagementTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [rejectItem, setRejectItem] = useState<T | null>(null);

  const filteredData = (data || []).filter((item) => {
    const name = getName(item)?.toLowerCase() || "";
    const email = getEmail(item)?.toLowerCase() || "";
    return (
      name.includes(searchTerm.toLowerCase()) ||
      email.includes(searchTerm.toLowerCase())
    );
  });
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-4">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-500 italic">
          Syncing records...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="p-4 bg-red-50 rounded-full mb-4">
          <XCircle className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          Failed to load data
        </h3>
        <p className="text-sm text-slate-500 max-w-xs mx-auto">
          There was an error fetching the records.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-slate-500 font-medium">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm w-full md:w-72 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none"
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
            <Filter className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            {/* <thead className="bg-slate-50/80 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  #
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  Details
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  Contact
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  Status
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead> */}

             {/* <table className="w-full border-collapse"> */}
          <thead className="bg-slate-50 border-b">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-6 py-4 text-xs font-bold uppercase text-slate-500 ${
                    col.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>


            <tbody className="divide-y divide-slate-100">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => {
                  const { label, type } = getStatus(item);
                  const isBlocked = type === "blocked";
                  const isRejected = type === "rejected";
                  const isVerified = type === "verified";
                  const isPending = type === "pending";
                  const isEmailUnverified = type === "email_unverified";
                  const reply = getVendorReply?.(item);

                  const StatusIcon = isVerified
                    ? CheckCircle
                    : isBlocked || isRejected
                    ? XCircle
                    : type === "email_unverified"
                    ? ShieldAlert
                    : Shield;

                  const canShowApprove =
                    onApprove &&
                    !isVerified &&
                    ( isPending || (isRejected && reply));

                  // const canShowReject = onReject && !isRejected && !isVerified && !isPending;
                  const canShowReject = onReject && !isRejected && !isPending;

                  return (
                    <tr
                      key={getId(item)}
                      className="hover:bg-blue-50/30 transition-colors group"
                    >
                      <td className="px-6 py-4 text-xs font-mono text-slate-400">
                        {(index + 1 + (page - 1) * 10)
                          .toString()
                          .padStart(2, "0")}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={getImage?.(item) || fallbackImg}
                            className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm cursor-zoom-in hover:scale-105 transition-transform"
                            onClick={() =>
                              setPreviewImage(getImage?.(item) || fallbackImg)
                            }
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-slate-900 truncate">
                              {getName(item)}
                            </p>
                            <p className="text-[10px] font-mono text-slate-400 truncate uppercase">
                              ID: {getId(item)}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            {getEmail(item)}
                          </div>
                          {getPhone && (
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <Phone className="w-3.5 h-3.5 text-slate-400" />
                              {getPhone(item)}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col items-start gap-1.5">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold ring-1 ring-inset ${statusStyles[type]}`}
                          >
                            <StatusIcon className="w-3.5 h-3.5" />
                            {label}
                          </span>
                          {reply && (
                            <div className="group/reply relative flex items-center gap-1.5 text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded cursor-help">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                              Message Received
                              <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-slate-900 text-white text-[11px] font-normal rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover/reply:opacity-100 group-hover/reply:translate-y-0 transition-all z-20">
                                <p className="mb-1 font-bold text-blue-400 italic">
                                  "Feedback/Reply:"
                                </p>
                                {reply}
                                <div className="absolute top-full left-4 w-2 h-2 bg-slate-900 rotate-45 -translate-y-1" />
                              </div>
                            </div>
                          )}
                        </div>
                      </td>





                  { !isEmailUnverified &&   <td className="px-6 py-4 text-right">
                        <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {canShowApprove && (
                            <button
                              onClick={() => onApprove(item)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-sm active:scale-95 transition-all"
                            >
                              <CheckCircle className="w-3.5 h-3.5" />
                              Approve
                            </button>
                          )}

                          {canShowReject && (
                            <button
                              onClick={() => setRejectItem(item)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold bg-white text-red-600 border border-red-200 rounded-lg hover:bg-red-50 active:scale-95 transition-all"
                            >
                              <XCircle className="w-3.5 h-3.5" />
                              Reject
                            </button>
                          )}

                          {onToggleBlock && type !== "pending" && (
                            <button
                              onClick={() => onToggleBlock(item)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all active:scale-95 ${
                                isBlocked
                                  ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
                                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                              }`}
                            >
                              {isBlocked ? (
                                <ShieldAlert className="w-3.5 h-3.5" />
                              ) : (
                                <Shield className="w-3.5 h-3.5" />
                              )}
                              {isBlocked ? "Unblock" : "Block"}
                            </button>
                          )}
                        </div>
                        <div className="group-hover:hidden text-slate-300">
                          <MoreHorizontal className="w-5 h-5 ml-auto" />
                        </div>
                      </td>
                      }
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-20 text-center text-slate-400 text-sm"
                  >
                    No entries found.
                  </td>
                </tr>
              )}

              
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500 italic">
            Showing{" "}
            <span className="text-slate-900 font-bold">
              {filteredData.length}
            </span>{" "}
            entries
          </p>
          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="p-2 border border-slate-200 rounded-lg bg-white disabled:opacity-40 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="px-3 text-xs font-bold text-slate-600">
              {page} / {totalPages}
            </div>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="p-2 border border-slate-200 rounded-lg bg-white disabled:opacity-40 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* IMAGE PREVIEW */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center z-[100] p-6"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
          />
        </div>
      )}

      {/* REJECT MODAL */}
      {rejectItem && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Reason for Rejection
              </h3>
              <p className="text-sm text-slate-500 mb-6 px-4">
                Provide details for this decision.
              </p>
              <textarea
                autoFocus
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="Write reason here..."
                className="w-full p-4 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-red-500/10 focus:border-red-500 min-h-[120px] transition-all outline-none resize-none mb-4"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setRejectItem(null);
                    setRejectReason("");
                  }}
                  className="flex-1 px-4 py-2.5 text-sm font-bold text-slate-500 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  disabled={!rejectReason.trim()}
                  onClick={() => {
                    if (rejectItem && onReject)
                      onReject(rejectItem, rejectReason);
                    setRejectItem(null);
                    setRejectReason("");
                  }}
                  className="flex-1 px-4 py-2.5 text-sm font-bold bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:opacity-50 transition-all shadow-lg shadow-red-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManagementTable;
