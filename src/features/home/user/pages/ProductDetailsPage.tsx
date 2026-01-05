import { useParams } from "react-router-dom";
import {
  BookDetails,
  RelatedBooks,
  ReviewSection,
} from "../Components/ProductDetailes";
import { useProductDetailes } from "../api/ProductApi";

// const ProductDetailsPage = () => {

//   const { id } = useParams<{ id: string }>();
//     const { data: productRes } =
//       useProductDetailes(id as string);

//       const product = productRes?.data
//   console.log('jofheliafkhjlirefjhlierfjlner',productRes, id)
//   console.log('jofheliafkhjlirefjhlierfjlner',productRes, id)

//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className='bg-gray-50"'>
//         <BookDetails product={product}/>
//         <ReviewSection/>
//         <RelatedBooks/>
//     </div>
//   )
// }

// export default ProductDetailsPage

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: productRes, isLoading } = useProductDetailes(id as string);

  if (isLoading || !productRes) {
    return <p>Loading...</p>;
  }

  const product = productRes?.data;
  console.log('check the ',product)

  return (
    <div className="min-h-screen pb-20">
      <main className="container mx-auto max-w-7xl pt-8 space-y-12">
        <section>
          <BookDetails product={product} />
        </section>

        <section className="px-4">
          <ReviewSection />
        </section>

        <section className="px-4">
          <RelatedBooks />
        </section>
      </main>

      {/* Floating Bottom Nav for Mobile */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-2xl flex items-center justify-between z-50">
        <div>
          <p className="font-bold text-slate-900 leading-none">
            ₹{product.rentPrice}
          </p>
          <p className="text-[10px] text-slate-500">/ {product.duration}</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-blue-200">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
