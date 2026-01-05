import { useState } from "react";
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
  Plus,
} from "lucide-react";
import type { CreateForm, ManagementTableProps } from "@/types/IdataTable.types";
import type { StatusType } from "@/types/Iconstants.types";
import { useNavigate } from "react-router-dom";

const fallbackImg = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const statusStyles: Record<StatusType, string> = {
  verified: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  blocked: "bg-red-50 text-red-700 ring-red-600/20",
  rejected: "bg-orange-50 text-orange-700 ring-orange-600/20",
  pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
  email_unverified: "bg-slate-100 text-slate-600 ring-slate-500/20",
  unknown: "bg-slate-50 text-slate-700 ring-slate-600/20",
};

function ManagementTable<T, F extends CreateForm | undefined = undefined>({
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
  getDescription,
  getCreatedDate,
  setForm,
  onSubmit,
  onEdit,
  getRating,
  getCategory,
  getPublisher,
  getLanguage,
  getStock,
  getRentPrice,
  getActualPrice,

  enableBookData,

  isEdit,
  form,
  isLoading,
  isError,
  columns,
  handleCancel,
  showCreate,
  handleAddClick,
  enableCategory,
}: ManagementTableProps<T, F>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [rejectItem, setRejectItem] = useState<T | null>(null);

  // const [showCreate, setShowCreate] = useState(false);
  // const isFormFilled = form.name.trim() || form.description.trim();
  const isFormFilled =
    !!form && (form.name.trim() !== "" || form.description.trim() !== "");
  const isFormNotFilled =
    form && (form.name.trim() == "" || form.description.trim() == "");

  const canCreate = enableCategory && form && setForm && onSubmit;
  const navigate = useNavigate();

  //   const handleAddClick = () => {
  //     setShowCreate(true);
  //   };

  //   // const handleCancel = () => {
  //   //   setShowCreate(false);
  //   //   setForm({ name: "", description: "" });
  //   // };
  //   const handleCancel = () => {
  //   setShowCreate(false);

  //   if (setForm) {
  //     setForm({ name: "", description: "" } as F);
  //   }
  // };

  const filteredData = (data || []).filter((item) => {
    const name = getName(item)?.toLowerCase() || "";
    const email = getEmail?.(item)?.toLowerCase() || "";
    return (
      name.includes(searchTerm.toLowerCase()) ||
      email.includes(searchTerm.toLowerCase())
    );
  });

  console.log("checkt he data management table ", filteredData);

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
          {!showCreate && (
            <div className="relative group w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm w-full md:w-72 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none"
              />
            </div>
          )}
          {!showCreate && (
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
              <Filter className="w-4 h-4 text-slate-600" />
            </button>
          )}

          {enableBookData && (
            <button
              onClick={() => navigate("/vendor/addupdaterentbook")}
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white 
            text-xs rounded-md hover:bg-blue-700 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              Add Rent Book
            </button>
          )}
          {showCreate && canCreate && (
            <form
              onSubmit={(e) => {
                onSubmit?.(e);
                handleCancel?.();
              }}
              className="flex gap-3 items-center"
            >
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Category"
                required
                className="
                  pl-4 pr-4 py-3
                  bg-white border border-slate-200
                  rounded-xl
                  text-base
                  focus:ring-4 focus:ring-blue-500/10
                  focus:border-blue-500
                  transition-all outline-none
                "
              />

              <input
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Description"
                required
                className="
                  pl-4 pr-4 py-3
                  bg-white border border-slate-200
                  rounded-xl
                  text-base
                  focus:ring-4 focus:ring-blue-500/10
                  focus:border-blue-500
                  transition-all outline-none
                "
              />

              {/* SAVE */}
              {!isFormNotFilled && (
                <button
                  type="submit"
                  className="
                  flex items-center gap-2
                  px-4 py-3
                  bg-blue-600 text-white
                  text-sm font-medium
                  rounded-xl
                  hover:bg-blue-700
                  shadow-sm
                "
                >
                  {isEdit ? "update" : "Save"}
                </button>
              )}

              {/* CANCEL */}
              {(isFormFilled || isFormNotFilled) && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="
                    px-4 py-3
                    text-sm
                    border border-slate-200
                    rounded-xl
                    hover:bg-slate-50
                  "
                >
                  Cancel
                </button>
              )}
            </form>
          )}
          {!showCreate && canCreate && (
            <button
              onClick={handleAddClick}
              className="
                flex items-center gap-2
                px-4 py-3
                bg-blue-600 text-white
                text-sm font-medium
                rounded-xl
                hover:bg-blue-700
                shadow-sm
              "
            >
              <Plus className="w-5 h-5" />
              Add Category
            </button>
          )}
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
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
                  // const { label, type } = getStatus(item);
                  const { label, type } = getStatus?.(item) ?? {
                    label: "Unknown",
                    type: "unknown",
                  };

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
                    (isPending || (isRejected && reply));

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

                      {getDescription && getEmail && getPhone && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getDescription && (
                            <p className="text-xs text-slate-600 max-w-xs truncate">
                              {getDescription(item) || "-"}
                            </p>
                          )}
                          <div className="space-y-1">
                            {getEmail && (
                              <div className="flex items-center gap-2 text-xs text-slate-600">
                                <Mail className="w-3.5 h-3.5 text-slate-400" />
                                {getEmail(item)}
                              </div>
                            )}

                            {getPhone && (
                              <div className="flex items-center gap-2 text-xs text-slate-600">
                                <Phone className="w-3.5 h-3.5 text-slate-400" />
                                {getPhone(item)}
                              </div>
                            )}
                          </div>
                        </td>
                      )}
                      {enableBookData && (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getCreatedDate?.(item)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getCategory?.(item)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getPublisher?.(item)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getLanguage?.(item)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getStock?.(item)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getRating?.(item)}
                          </td>
                          <td>
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-slate-900 truncate">
                                ₹{getRentPrice?.(item)}
                              </p>
                              <p className="text-[10px] font-mono text-slate-400 truncate uppercase">
                                ₹{getActualPrice?.(item)}
                              </p>
                            </div>
                          </td>
                        </>
                      )}
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

                      {!isEmailUnverified && (
                        <td className="px-6 py-4 text-right">
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
                            {enableCategory && onEdit && (
                              <button
                                onClick={() => onEdit(item)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold 
                                           bg-white text-blue-600 border border-blue-200 
                                            rounded-lg hover:bg-blue-50 active:scale-95 transition-all"
                              >
                                Edit
                              </button>
                            )}
                            {enableBookData && onEdit && (
                              <button
                                onClick={() =>
                                  navigate(
                                    `/vendor/updateproduct/${getId(
                                      item
                                    )}`
                                  )
                                }
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold 
                                           bg-white text-blue-600 border border-blue-200 
                                            rounded-lg hover:bg-blue-50 active:scale-95 transition-all"
                              >
                                Edit
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
                      )}
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
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center z-100 p-6"
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
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-100 p-4">
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
