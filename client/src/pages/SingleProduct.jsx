import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Footer, Header } from '../components'
import { useNavigate, useParams } from 'react-router-dom';
import BagContext from '../contexts/BagContext';
import { toast } from 'react-toastify';

const { VITE_SERVER } = import.meta.env;

const SingleProduct = () => {

  const navigate = useNavigate();
  const { addToBag } = useContext(BagContext);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  let { id } = useParams();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/product/${id}`, {
        withCredentials: true,
      });
      console.log("product", response);
      response ?
        setProduct({ ...response.data.product })
        : navigate("/404")
    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, {className: "toastify"}) : null;
      if (error.response.status === 500) {navigate("/404")}
    }
  }


  useEffect(() => {
    fetchProduct();
  }, [])
  

  const updateBag = (e) => {
    e.preventDefault();
    const item = {
      id: product._id,
      productName: product.productName,
      image: product.image,
      salePrice: product.salePrice,
      quantity
    }
    addToBag(item);
  }
  // useEffect(() => {
  //   console.log(quantity);
  // }, [quantity])


  return (
    <>
      <Header />
      <main className="container-fluid mt-3 p-0 position-relative">
        <div className="row g-3 ">
          {/* Image section  */}
          <div className="col-lg-6">
            {/* <div className="banner-image position-relative overflow-hidden h-100">
              <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50"></div>
              <img className="object-fit-cover w-100 h-100" src={product.img} alt="product image" />
            </div> */}
            <div className="row">
              <div className="position-relative overflow-hidden h-100">
                <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50"></div>
                <img className="product-image object-fit-cover w-100 h-100" src={product.image} alt="product image" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="position-relative overflow-hidden h-100">
                <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50"></div>
                <img className="product-image object-fit-cover w-100 h-100" src="https://source.unsplash.com/random/600x600/?girl,fashion" alt="product image" />
              </div>
            </div>
          </div>
          {/* Product details section  */}
          <div className="col-lg-6  ">
            <div className="card container-fluid h-auto p-4 position-sticky top-0">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col">
                    <p className="product-card-price text-uppercase font-color mb-0">
                      <span className="product-card-price font-color me-2">$ {product.salePrice?.toFixed(2)} USD</span>
                      <span className="product-card-price striked ms-2">$ {product.regularPrice?.toFixed(2)} USD</span>
                    </p>
                    <h1 className="title text-uppercase font-color my-2">
                      {product.productName}
                    </h1>

                    <div className="mb-1">
                      <p className="banner-paragragh fs-6 fw-medium muted">
                        {product.shortDescription}
                        {/* Bringing Your Fashion Brand's Unique Identity to Life Through Amazing Styles and Products. */}
                      </p>
                    </div>

                    <form className="contact-form my-5">
                      <div className="d-flex align-items-center w-100 my-4">
                        <button
                          type='button'
                          disabled={quantity === 1}
                          onClick={() => setQuantity(quantity - 1)}
                          className="btn btn-sm bag text-decoration-none">
                          <i className="ai ai-minus fs-4 px-1"></i>
                        </button>

                        <input className="login-input text-center font-color mx-3"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                          style={{
                            minHeight: 2.9 + 'rem',
                            padding: 0.5 + 'rem',
                            maxWidth: 4 + 'rem'
                          }}
                          min={1}
                          type="number"
                          name="quantity"
                          id="quantity" />

                        <button
                          type='button'
                          onClick={() => setQuantity(quantity + 1)}
                          className="btn btn-sm bag text-decoration-none">
                          <i className="ai ai-plus fs-4 px-1"></i>
                        </button>
                      </div>
                      <button
                        type="submit"
                        onClick={updateBag}
                        className="btn text-uppercase d-block my-2 py-3 w-100 fw-bold"
                        style={{ fontSize: 0.88 + 'rem' }}>
                        Add to bag
                      </button>
                    </form>

                    <div className="">
                      <p className="banner-paragragh fs-6 fw-medium muted">
                        {product.longDescription}
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, facere. Quos velit atque dolor. Mollitia nesciunt magnam, illum aspernatur quisquam quibusdam deserunt, ipsam earum eaque hic quis sint dolores porro! */}
                      </p>
                      <p className="banner-paragragh fs-6 fw-medium muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, facere. Quos velit atque dolor. Mollitia nesciunt magnam, illum aspernatur quisquam quibusdam deserunt, ipsam earum eaque hic quis sint dolores porro!
                      </p>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default SingleProduct
