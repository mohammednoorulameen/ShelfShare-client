import { useUpdateProduct } from '../api/ProductApi';
import AddRentBook from '../component/AddRentBook';


const UpdateProductPage = () => {
    const updateProduct = useUpdateProduct();
  return (
    <div>
        <AddRentBook/>
    </div>
  )
}

export default UpdateProductPage
