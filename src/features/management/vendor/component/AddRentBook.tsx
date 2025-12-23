import React from "react";
import { config } from "@/config";
import { AddBooks } from "@/app/constants/Icons";
import type { AddRentProdectProps } from "../../types/product.types";

const AddRentBook: React.FC<AddRentProdectProps> = (props) => {
  const {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    categories,
    imagePreviews,
    onImageUpload,
    onRemoveImage,
    handleAiAutofill,
    fileInputRef,
    isAiLoading,
    isSubmitting,
    currentVendor,
  } = props;
  console.log('chekc chekc her ethe categories',categories)
  return (
    <div className="max-w-6xl mx-auto">
      {/* Context Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Add New Book
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Fill in the details to list a new book for rent or sale.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-medium text-gray-600">
            Posting as:{" "}
            <span className="text-gray-900 font-bold">
              {currentVendor.name}
            </span>
          </span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* LEFT COLUMN - MAIN INFO */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Information */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <AddBooks.Book className="w-4 h-4 text-blue-500" />
                General Information
              </h3>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Book Title <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      name="productName"
                      required
                      value={formData.productName}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 border bg-white pl-4 pr-10 py-2.5 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                      placeholder="e.g. The Psychology of Money"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      {formData.productName && (
                        <AddBooks.Success className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAiAutofill}
                    disabled={isAiLoading || !config.GEMINI_API}
                    className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:shadow-md hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                  >
                    {isAiLoading ? (
                      <AddBooks.Spinner className="w-4 h-4 animate-spin" />
                    ) : (
                      <AddBooks.AI className="w-4 h-4" />
                    )}
                    <span>Auto-Fill</span>
                  </button>
                </div>
                <p className="text-[11px] text-gray-400 mt-1 ml-1">
                  Use AI to automatically fill details based on the title.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Author
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <AddBooks.User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    name="author"
                    required
                    value={formData.author}
                    onChange={handleChange}
                    className="pl-9 w-full rounded-lg border-gray-300 border bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
                    placeholder="Author Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Publisher
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <AddBooks.Building className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    name="publisher"
                    required
                    value={formData.publisher}
                    onChange={handleChange}
                    className="pl-9 w-full rounded-lg border-gray-300 border bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
                    placeholder="Publisher"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Language
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 border bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Mandarin">Mandarin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Category
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 border bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Description
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 border bg-white px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none resize-none"
                  placeholder="Enter a detailed description of the book..."
                />
              </div>
            </div>
          </section>

          {/* Media Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <AddBooks.Image className="w-4 h-4 text-pink-500" />
                Book Covers
              </h3>
              <span className="text-xs text-gray-500">
                {imagePreviews.length} images selected
              </span>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {/* Upload Button */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="aspect-[3/4] rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 cursor-pointer flex flex-col items-center justify-center gap-2 transition-all group"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={onImageUpload}
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-500 transition-colors">
                    <AddBooks.Upload className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-500 group-hover:text-blue-600">
                    Add Photo
                  </span>
                </div>

                {/* Previews */}
                {imagePreviews.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-lg overflow-hidden border border-gray-200 aspect-[3/4] shadow-sm"
                  >
                    <img
                      src={src}
                      alt={`Preview ${idx}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => onRemoveImage(idx)}
                        className="bg-white/90 text-red-600 p-2 rounded-full hover:bg-red-50 hover:text-red-700 transition-all transform scale-90 hover:scale-100 shadow-lg"
                      >
                        <AddBooks.Delete className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN - PRICING & CONFIG */}
        <div className="space-y-6">
          {/* Status & Stock */}
          <section className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Availability
            </h3>

            <div className="space-y-5">
              <div className="bg-gray-50 p-1 rounded-lg flex">
                {(["active"] as const).map((statusOption) => (
                // {(["active", "inactive"] as const).map((statusOption) => (
                  <button
                    key={statusOption}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, status: statusOption }))
                    }
                    className={`flex-1 text-sm font-medium py-2 rounded-md capitalize transition-all ${
                      formData.status === statusOption
                        ? statusOption === "active"
                          ? "bg-white text-green-600 shadow-sm border border-gray-100"
                          : "bg-white text-red-600 shadow-sm border border-gray-100"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {statusOption}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        stock: Math.max(0, prev.stock - 1),
                      }))
                    }
                    className="px-3 py-2 text-gray-500 hover:bg-gray-100 border-r border-gray-200"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="stock"
                    min="0"
                    value={formData.stock}
                    onChange={handleChange}
                    className="w-full text-center py-2 text-sm font-semibold outline-none appearance-none"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        stock: prev.stock + 1,
                      }))
                    }
                    className="px-3 py-2 text-gray-500 hover:bg-gray-100 border-l border-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Pricing
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Selling Price (Actual)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400 font-serif italic">
                    $
                  </span>
                  <input
                    type="number"
                    name="actualPrice"
                    min="0"
                    step="0.01"
                    value={formData.actualPrice}
                    onChange={handleChange}
                    className="pl-7 w-full rounded-lg border-gray-300 border bg-white px-3 py-2 text-sm font-medium focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Rental Price / Cycle
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400 font-serif italic">
                    $
                  </span>
                  <input
                    type="number"
                    name="rentPrice"
                    min="0"
                    step="0.01"
                    value={formData.rentPrice}
                    onChange={handleChange}
                    className="pl-7 w-full rounded-lg border-gray-300 border bg-white px-3 py-2 text-sm font-medium focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Rental Configuration */}
          <section className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Rental Rules
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration Cycle
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 border bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  placeholder="e.g. 7 Days"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Available Date
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <AddBooks.Calendar className="w-4 h-4" />
                  </span>
                  <input
                    type="date"
                    name="rentDate"
                    // value={formData.rentDate}
                    value={
                      formData.rentDate instanceof Date
                        ? formData.rentDate.toISOString().split("T")[0]
                        : formData.rentDate
                    }
                    onChange={handleChange}
                    className="pl-9 w-full rounded-lg border-gray-300 border bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Submit Action */}
          <div className="sticky bottom-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl shadow-xl shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <AddBooks.Spinner className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <AddBooks.Success className="w-5 h-5" />
                  Publish Book
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRentBook;
