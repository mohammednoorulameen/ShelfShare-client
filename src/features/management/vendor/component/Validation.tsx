import * as Yup from "yup";

export const AddBookSchema = Yup.object({
  productName: Yup.string().required("Book title is required"),
  actualPrice: Yup.number().min(0).required("Actual price is required"),
  rentPrice: Yup.number().min(0).required("Rent price is required"),
  stock: Yup.number().min(1).required("Stock is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description required"),
  publisher: Yup.string().required("Publisher required"),
  author: Yup.string().required("Author required"),
  language: Yup.string().required("Language required"),
  rentDate: Yup.string().required("Rent date required"),
  duration: Yup.string().required("Duration required"),
});
