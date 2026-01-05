import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { AddBookSchema } from "../component/Validation";
import { useGetUpdatePdoductWithId, useUpdateProduct } from "../api/ProductApi";
import { useAppSelector } from "@/app/hooks/useRedux";
import { useEffect, useRef, useState } from "react";
import type { IProductPayload } from "../../types/product.types";
import type { Category } from "../../types/category.types";
import { useGetVendorCategory } from "../api/GetCategory";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import { imageUploadCloudinery } from "@/app/utils/imageUploadCloudinery";
import AddUpdateRentBook from "../component/AddUpdateRentBook";

const UpdateProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { vendorId, email } = useAppSelector((state) => state.auth);

  const { data: productRes, isLoading } =
    useGetUpdatePdoductWithId(id as string);

  const { data: categoryRes } = useGetVendorCategory(1, 10);
  const { mutateAsync: updateProduct } = useUpdateProduct();
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const navigate = useNavigate()


  const product = productRes?.data;

  const CURRENT_VENDOR = {
    id: vendorId ?? "",
    name: email ?? "Unknown Vendor",
  };

  useEffect(() => {
    if (categoryRes?.data) {
      setCategoryList(categoryRes.data.filter((c) => c.status === "active"));
    }
  }, [categoryRes]);

  const formik = useFormik<IProductPayload>({
    initialValues: product
      ? {
          productName: product.productName,
          actualPrice: product.actualPrice,
          rentPrice: product.rentPrice,
          stock: product.stock,
          category: product.category,
          description: product.description,
          publisher: product.publisher,
          author: product.author,
          language: product.language,
          rentDate: product.rentDate.split("T")[0],
          duration: product.duration,
          imageKey: product.imageKey,
          status: product.status as IProductPayload["status"],
          vendorId: product.vendorId,
        }
      : ({} as IProductPayload),

    enableReinitialize: true,
    validationSchema: AddBookSchema,

   onSubmit: async (values) => {

  try {
    let uploadedImages: string[] = [];

    if (imageFiles.length > 0) {
      uploadedImages = await Promise.all(
        imageFiles.map((file) => imageUploadCloudinery(file))
      );
    }

    const payload = {
      ...values,
      imageKey:
        uploadedImages.length > 0
          ? [...values.imageKey, ...uploadedImages]
          : values.imageKey,
    };

    await updateProduct({
      productId: id as string,
      data: payload,
    });

    toast.success("Book updated successfully");
    navigate('/vendor/bookmanagement')

  } catch (error) {
    let message = "Update failed";
    if (isAxiosError(error)) {
      message = error.response?.data?.message || message;
    }
    toast.error(message);
  }
}

  });

  if (isLoading || !product) return <p>Loading...</p>;


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const files = Array.from(e.target.files);

    setImagePreviews((prev) => [...prev, ...previews]);
    setImageFiles((prev) => [...prev, ...files]);
    const previews = files.map((file) => URL.createObjectURL(file));
     setImagePreviews((prev) => [...prev, ...previews]);

  };



  const removeImage = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));

    formik.setFieldValue(
      "imageKey",
      formik.values.imageKey.filter((_, i) => i !== index)
    );
  };




  return (
    <AddUpdateRentBook
      formData={formik.values}
      handleChange={formik.handleChange}
      handleSubmit={formik.handleSubmit}
      setFormData={formik.setValues}
      categories={categoryList}
      fileInputRef={fileInputRef}
      imagePreviews={imagePreviews}
      onImageUpload={handleImageUpload}
      onRemoveImage={removeImage}
      handleAiAutofill={() => {}}
      isAiLoading={false}
      isSubmitting={formik.isSubmitting}
      currentVendor={CURRENT_VENDOR}
    />
  );
};

export default UpdateProductPage;

