
import axios from 'axios'
import { Footer, Header, PageTitle, ProductGrid } from '../components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const { VITE_SERVER } = import.meta.env;

const Shop = ({ category, subCategory }) => {


  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${VITE_SERVER}/api/all-products`, {
        withCredentials: true,
      });
      console.log("all-products", response.data);
      setProducts(response.data.allProducts);
      setLoading(false);

    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null
    } finally {
      setLoading(false);
    }
  }

  /**
   * The function `fetchProductsByCategory` asynchronously fetches products based on a specified
   * category and subcategory using an API endpoint.
   */
  const fetchProductsByCategory = async (category, subCategory) => {
    try {
      console.log(category, subCategory);
      const response = await axios.get(`${VITE_SERVER}/api/category/${category}/${subCategory}`, {
        withCredentials: true,
      });
      console.log("products", response.data);
      setProducts(response.data.products)

    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null
    }
  }

  useEffect(() => {

    if (category === 'all') {
      fetchAllProducts()
    } else {
      fetchProductsByCategory(category, subCategory)
    }
  }, [category, subCategory])

  return (
    <>
      <Header />
      <PageTitle
        title={`Shop / ${category} - ${(subCategory ? subCategory : "")}`}
      />
      {
        loading ?
          (
            <div className='d-flex justify-content-center align-items-center h-100 w-100'>
              <span className="spinner-grow spinner-grow bag" aria-hidden="true"></span>
            </div>
          ) : (
            <ProductGrid products={[...products]} />
          )
      }
      <Footer />
    </>
  )
}

export default Shop
