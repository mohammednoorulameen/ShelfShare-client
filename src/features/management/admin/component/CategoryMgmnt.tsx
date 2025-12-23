import { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  CheckCircle,
  XCircle,
  ShieldAlert,
  Shield,
} from "lucide-react";
import type { CategoryManagementProps } from "../../types/category.types";

const CategoryManagement: React.FC<CategoryManagementProps> = ({
  form,
  setForm,
  onSubmit,
  categories,
  isLoading,
  onToggleStatus,
}) => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Category Management
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage product categories
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          {/* Search */}
          <div className="relative flex-1 sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search category..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Filter */}
          <button className="p-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 text-slate-600 shadow-sm">
            <Filter className="w-4 h-4" />
          </button>

          {/* Add Category */}
          <button
            onClick={() => setShowCreate(!showCreate)}
            className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        </div>
      </div>

      {/* Create Form */}
      {showCreate && (
        <form
          onSubmit={(e) => {
            onSubmit(e);
            setShowCreate(false);
          }}
          className="bg-white p-4 border rounded shadow-sm space-y-3 max-w-md"
        >
          <div>
            <label className="text-xs font-medium">Category Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded text-sm"
              placeholder="Enter name..."
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="text-xs font-medium">Description</label>
            <textarea
              className="w-full mt-1 p-2 border rounded text-sm"
              placeholder="Enter description..."
              rows={2}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1.5 rounded text-xs hover:bg-blue-700"
          >
            Create
          </button>
        </form>
      )}

      {/* Category Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-5 py- text-[10px] font-semibold text-slate-500 uppercase">
                Index
              </th>
              <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase">
                Name
              </th>
              <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase">
                Description
              </th>
              <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase">
                Status
              </th>
              <th className="px-5 py- text-[10px] font-semibold text-slate-500 uppercase text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {/* Loading State */}
            {isLoading && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-4 text-slate-500 text-sm"
                >
                  Loading categories...
                </td>
              </tr>
            )}

            {/* NO DATA */}
            {!isLoading && categories.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-4 text-slate-500 text-sm"
                >
                  No categories found.
                </td>
              </tr>
            )}

            {/* REAL CATEGORY DATA */}
            {categories.map((cat,Index) => (
              <tr key={cat._id} className="hover:bg-slate-50 transition">
              {/* <td className="px-5 py-3 text-sm text-slate-600">{Index + 1 + (page - 1) * 10}</td> */}
              <td className="px-5 py-3 text-sm text-slate-600">{Index + 1}</td>
                <td className="px-5 py-3 font-medium text-sm text-slate-900">
                  {cat.name}
                </td>

                <td className="px-5 py-3 text-xs text-slate-600">
                  {cat.description}
                </td>

                <td className="px-5 py-3">
                  {cat.status === "active" ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border bg-red-50 text-red-700 border-red-200">
                      <XCircle className="w-3 h-3 mr-1" />
                      Blocked
                    </span>
                  )}
                </td>

                <td className="px-5 py-3 text-right">
                  {cat.status === "active" ? (
                    <button
                      onClick={() => onToggleStatus(cat._id)}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-red-600 border border-red-200 bg-white rounded-md hover:bg-red-50 shadow-sm"
                    >
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={() => onToggleStatus(cat._id)}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-slate-600 border border-slate-200 bg-white rounded-md hover:bg-slate-50 shadow-sm"
                    >
                      <Shield className="w-3.5 h-3.5" />
                      Unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         {/* Pagination */}
          <div className="flex justify-end gap-3 p-4">
            <button
              // disabled={page === 1}
              // onClick={() => setPage((prev) => prev - 1)}
              className="px-3 py-1 text-xs border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <button
              // disabled={page === totalPages}
              // onClick={() => setPage((prev) => prev + 1)}
              className="px-3 py-1 text-xs border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
      </div>
    </div>
  );
};

export default CategoryManagement;
