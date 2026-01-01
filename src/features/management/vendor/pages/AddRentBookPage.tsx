import { useFormik } from "formik";
import { AddBookSchema } from "../component/Validation";
import { autofillBookDetails } from "../../services/GeminiServices";
import { useEffect, useRef, useState } from "react";
import type { IProductPayload } from "../../types/product.types";
import { useGetVendorCategory } from "../api/GetCategory";
import type { Category } from "../../types/category.types";
import { useAppSelector } from "@/app/hooks/useRedux";
import { useAddProductMutation} from "../api/ProductApi";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import { imageUploadCloudinery } from "@/app/utils/imageUploadCloudinery";
import { useNavigate } from "react-router-dom";
import AddUpdateRentBook from "../component/AddUpdateRentBook";

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
  const {  data: getCategoryData, } = useGetVendorCategory(1, 10);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const { vendorId, email } = useAppSelector((state) => state.auth);
  const { mutateAsync: addProduct } = useAddProductMutation();
  const navigate = useNavigate()

  const CURRENT_VENDOR = {
    id: vendorId ?? "",
    name: email ?? "Unknown Vendor",
  };

  useEffect(() => {
    if (getCategoryData?.data) {
      const activeCategories = getCategoryData.data.filter(
        (item) => item.status === "active"
      );
      setCategoryList(activeCategories);
    }
  }, [getCategoryData]);

  const formik = useFormik({
    initialValues: { ...INITIAL_DATA, vendorId: CURRENT_VENDOR.id },
    enableReinitialize: true,
    validationSchema: AddBookSchema,
    onSubmit: async (values) => {
      console.log("values", values);

      let imageUrls : string[] = []

      if(imageFiles.length > 0){
        imageUrls = await Promise.all(
          imageFiles.map((file)=> imageUploadCloudinery(file))
        )
      }


      const payload = {
        ...values,
        imageKey: imageUrls,
        vendorId: CURRENT_VENDOR.id,
        rentDate: new Date(values.rentDate),
        rating: { count: 0, average: 0 },
      };
    

      try {
        const response = await addProduct(payload);
        toast.success(
          response?.message ||
            `Book "${payload.productName}" added successfully!`
        );
        navigate('/vendor/bookmanagement')
      } catch (error) {
        console.error("Error adding product:", error);
        let message = "Something went wrong";

        if (isAxiosError(error)) {
          message = error.response?.data?.message || message;
        }

        toast.error(message);
      }
    },
  });

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


  // ==================== HANDLE AUTOFILL GIMNI API ====================

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
        category: matchedCategory?._id || formik.values.category,
        actualPrice: data.estimatedPrice ?? formik.values.actualPrice,
      });
    }
    setIsAiLoading(false);
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
      handleAiAutofill={handleAiAutofill}
      isAiLoading={isAiLoading}
      isSubmitting={formik.isSubmitting}
      currentVendor={CURRENT_VENDOR}
    />
  );
};

export default AddRentBookPage;
