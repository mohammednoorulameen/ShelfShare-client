import { useFormik } from "formik";
import { AddBookSchema } from "../component/Validation";
import { autofillBookDetails } from "../../services/GeminiServices";
import AddRentBook from "../component/AddRentBook";
import { useEffect, useRef, useState } from "react";
import type { IProductPayload } from "../../types/product.types";
import { useGetVendorCategory } from "../api/GetCategory";
import type { Category } from "../../types/category.types";
import { useAppSelector } from "@/app/hooks/useRedux";
import { useAddProductMutation } from "../api/AddRentBookApi";

const INITIAL_DATA: IProductPayload = {
  productName: "",
  actualPrice: 0,
  rentPrice: 0,
  stock: 1,
  category: "",
  description: "",
  publisher: "",
  author: "",
  language: "English",
  rentDate: new Date().toISOString().split("T")[0],
  duration: "7 Days",
  imageKey: [],
  status: "active",
  vendorId: "",
};

const AddRentBookPage = () => {
  const { data } = useGetVendorCategory(1, 10);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const { vendorId, email } = useAppSelector((state) => state.auth);
  const { mutateAsync: addProduct } = useAddProductMutation();

  const CURRENT_VENDOR = {
    id: vendorId ?? "",
    name: email ?? "Unknown Vendor",
  };

  useEffect(() => {
    if (data?.data) {
      const activeCategories = data.data.filter(
        (item) => item.status === "active"
      );
      setCategoryList(activeCategories);
    }
  }, [data]);

  const formik = useFormik({
    initialValues:{ ...INITIAL_DATA, vendorId: CURRENT_VENDOR.id },
     enableReinitialize: true,
    validationSchema: AddBookSchema,

    // onSubmit: async (values) => {
    //   const payload = {
    //     ...values,
    //     vendorId: CURRENT_VENDOR.id,
    //     rentDate: new Date(values.rentDate),
    //     rating: { count: 0, average: 0 },
    //   };

    //   console.log(" FINAL SUBMIT PAYLOAD:", payload);
    //   alert(`Book "${payload.productName}" submitted successfully!`);
    // },
    onSubmit: async (values) => {
      console.log('valies',values)
      const payload = {
        ...values,
        vendorId: CURRENT_VENDOR.id,
        rentDate: new Date(values.rentDate),
        rating: { count: 0, average: 0 },
      };

      try {
        await addProduct(payload);
        alert(`Book "${payload.productName}" added successfully!`);
      } catch (err) {
        console.error("Error adding product:", err);
        alert("Failed to add product");
      }
    },
  });

  // Image Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const newFiles = Array.from(e.target.files);

    const previews = newFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...previews]);

    formik.setFieldValue("imageKey", [
      ...formik.values.imageKey,
      ...newFiles.map((f) => `uploads/${Date.now()}_${f.name}`),
    ]);
  };

  const removeImage = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));

    formik.setFieldValue(
      "imageKey",
      formik.values.imageKey.filter((_, i) => i !== index)
    );
  };

  // AI Autofill
  const handleAiAutofill = async () => {
    if (!formik.values.productName) {
      alert("Enter a book name first");
      return;
    }

    setIsAiLoading(true);
    const data = await autofillBookDetails(formik.values.productName);

    const matchedCategory = categoryList.find((c) =>
      data?.categoryName.toLowerCase().includes(c.name.toLowerCase())
    );

    if (data) {
      formik.setValues({
        ...formik.values,
        description: data.description,
        author: data.author,
        publisher: data.publisher,
        language: data.language,
        // category:
        //   categoryList.find((c) => data.categoryName.toLocaleLowerCase().includes(c.name.toLocaleLowerCase()))?.categoryId ||
        //   formik.values.category,
        category: matchedCategory?._id || formik.values.category,
        actualPrice: data.estimatedPrice ?? formik.values.actualPrice,
      });
    }

    setIsAiLoading(false);
  };

  console.log("chekc tuhifu3jognwifhn;s", vendorId);

  return (
    <AddRentBook
      formData={formik.values}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      setFormData={formik.setValues}
      categories={categoryList}
      fileInputRef={fileInputRef}
      imagePreviews={imagePreviews}
      onImageUpload={handleImageUpload}
      onRemoveImage={removeImage}
      handleAiAutofill={handleAiAutofill}
      isAiLoading={isAiLoading}
      isSubmitting={formik.isSubmitting}
      currentVendor={CURRENT_VENDOR}
    />
  );
};

export default AddRentBookPage;
