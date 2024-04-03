import React, { useState } from 'react'
import { useImageUpload } from '../../hooks/useImageUpload';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const { VITE_SERVER } = import.meta.env;

const AddNewProduct = () => {
  const [loading, setLoading] = useState();

  const [productName, setProductName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');

  const [image, setImage] = useState(null);
  // const [selectedImage, setSelectedImage] = useState("https://source.unsplash.com/random/500x500/?man,fashion,cloth,placeholder");
  const [selectedImage, setSelectedImage] = useState("http://velocityacademy.org/wp-content/uploads/2016/03/placeholder.jpg");

  const [regularPrice, setRegularPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [featured, setFeatured] = useState(false);

  const productData = {
    productName,
    shortDescription,
    longDescription,
    image,
    regularPrice,
    salePrice,
    selectedCategory,
    selectedSubCategory,
    featured
  };

  const successMessage = (productId) => (
    <div>
      Product added successfully! 
      <Link to={`/product/` + productId} className="ms-2 text-dark">view</Link>
    </div>
  )

  const addProductHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    /*
    *   checking if user has selected a image to upload. If it has, it calls the
    *   `useImageUpload` (custom hook) to upload the image and assigns the result 
    *   to the `imageUrl` variable. If image is not selected, it assigns a placeholder
    *   image URL from Unsplash to the `imageUrl` variable. 
    */

    let imageUrl = productData.image ?
      await useImageUpload(productData.image)
      : "https://source.unsplash.com/random/500x500/?man,fashion,cloth,placeholder";

    console.log({ ...productData, image: imageUrl })

    try {
      const response = await axios.post(
        `${VITE_SERVER}/api/admin/add-product`,
        {
          ...productData,
          image: imageUrl
        },
        {
          withCredentials: true
        }
      )

      setLoading(false);

      console.log(response);
      response.data.success
        ? toast.success(successMessage(response.data.product._id), { className: "toastify", autoClose: 15000 })
        : toast.error("Failed to add new sale!", { className: "toastify" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to add new product!", { className: "toastify" });
      error.response.status === 403
        ? toast.error("Session Expired, Login again!", { className: "toastify" }) && navigate('/Logout')
        : null
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="container-fluid p-0" onSubmit={addProductHandler}>
      <div className="row g-3">
        <div className="col-sm-8">
          {/* <!-- Bag Items section  --> */}
          <div className="card container-fluid p-3 mb-3">
            <div className="card-body p-3">
              <div className="row">
                <div className="col">
                  <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                    Product Title *
                  </h2>
                  <input type="text"
                    className="login-input font-color d-block w-100 mb-2"
                    id="productName"
                    name="productName"
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder=""
                    required />

                </div>
              </div>
            </div>
          </div>

          <div className="card container-fluid p-3 mb-3">
            <div className="card-body p-3">
              <div className="row">
                <div className="col">
                  <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                    Short Description *
                  </h2>
                  <textarea
                    className="login-input font-color d-block w-100 mb-2 p-3"
                    rows={2}
                    id="shortDescription"
                    name="shortDescription"
                    onChange={(e) => setShortDescription(e.target.value)}
                    placeholder=""
                    required >

                  </textarea>

                </div>
              </div>
            </div>
          </div>

          <div className="card container-fluid p-3 mb-3">
            <div className="card-body p-3">
              <div className="row">
                <div className="col">
                  <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                    Long Description *
                  </h2>
                  <textarea
                    className="login-input font-color d-block w-100 mb-2 p-3"
                    rows={6}
                    id="longDescription"
                    name="longDescription"
                    onChange={(e) => setLongDescription(e.target.value)}
                    placeholder=""
                    required >

                  </textarea>

                </div>
              </div>
            </div>
          </div>

          <div className="card container-fluid p-3 mb-3">
            <div className="card-body p-3">
              <div className="row">
                <div className="col">
                  <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                    Upload Picture *
                  </h2>

                  <label className='d-block p-3 px-5' htmlFor="productImage">
                    <div className="d-flex justify-content-center align-items-center border border-dashed rounded bg-color p-5">
                      <i className="ai ai-plus bag"></i>
                      <i className="ai ai-file-image-fill fs-1 bag"></i>
                    </div>
                    <input type="file"
                      accept="image/*"
                      onChange={(e) => { setImage((prev) => e.target.files[0]); setSelectedImage(URL.createObjectURL(e.target.files[0])) }}
                      className='visually-hidden'
                      name="productImage"
                      id="productImage" />
                  </label>

                  <div className="d-flex justify-content-center p-3">
                    <div className="position-relative">
                      <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50"></div>
                      <img
                        className='object-fit-cover rounded w-100 image'
                        src={selectedImage}
                        alt="" />
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="card container-fluid p-3 mb-3">
            <div className="card-body p-3">
              <div className="row">
                <div className="col">
                  <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                    Pricing $.
                  </h2>

                  <div className="row gap-3 px-2">
                    <div className="col-md p-0">
                      <label htmlFor="pincode" className="font-color product-card-price mb-1">Regular Price *</label>
                      <input type="number"
                        className="login-input font-color d-block w-100"
                        id="regularPrice"
                        name="regularPrice"
                        onChange={(e) => setRegularPrice(e.target.value)}
                        placeholder=""
                        required />
                    </div>
                    <div className="col-md p-0">
                      <label htmlFor="country" className="font-color product-card-price mb-1">Sale Price *</label>
                      <input type="number"
                        className="login-input font-color d-block w-100"
                        id="salePrice"
                        name="salePrice"
                        onChange={(e) => setSalePrice(e.target.value)}
                        placeholder=""
                        required />
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="col-sm-4">
          {/* Category */}
          <div className="card container-fluid p-3 mb-3">
            <div className="card-body p-3">
              <div className="row">
                <div className="col">
                  <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                    Category
                  </h2>
                  <div className="d-flex flex-column gap-3 my-5">
                    <input type="radio"
                      className="btn-check"
                      name="category"
                      value="men"
                      id="men"
                      checked={selectedCategory === "men"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      autoComplete="off"
                      required />
                    <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="men">
                      Men
                    </label>

                    <input type="radio"
                      className="btn-check"
                      name="category"
                      value="women"
                      id="women"
                      checked={selectedCategory === "women"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      autoComplete="off"
                      required />
                    <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="women">
                      Women
                    </label>

                    <input type="radio"
                      className="btn-check"
                      name="category"
                      value="kids"
                      id="kids"
                      checked={selectedCategory === "kids"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      autoComplete="off"
                      required />
                    <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="kids">
                      Kids
                    </label>

                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* Sub-Category */}
          <div className="card container-fluid p-3 mb-3">
            <div className="card-body p-3">
              <div className="row">
                <div className="col">
                  <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                    Sub-Category
                  </h2>
                  <div className="d-flex justify-content-center gap-3">
                    <div className="d-flex flex-column gap-3 my-5 w-100">
                      <input type="radio"
                        className="btn-check"
                        name="sub-category"
                        value="dresses"
                        id="dresses"
                        checked={selectedSubCategory === "dresses"}
                        onChange={(e) => setSelectedSubCategory(e.target.value)}
                        autoComplete="off"
                        required />
                      <label className="filter-btn btn btn-sm border bag w-100" htmlFor="dresses">
                        Dresses
                      </label>

                      <input type="radio"
                        className="btn-check"
                        name="sub-category"
                        value="skirts"
                        id="skirts"
                        checked={selectedSubCategory === "skirts"}
                        onChange={(e) => setSelectedSubCategory(e.target.value)}
                        autoComplete="off"
                        required />
                      <label className="filter-btn btn btn-sm border bag w-100" htmlFor="skirts">
                        Skirts
                      </label>

                      <input type="radio"
                        className="btn-check"
                        name="sub-category"
                        value="pants"
                        id="pants"
                        checked={selectedSubCategory === "pants"}
                        onChange={(e) => setSelectedSubCategory(e.target.value)}
                        autoComplete="off"
                        required />
                      <label className="filter-btn btn btn-sm border bag w-100" htmlFor="pants">
                        Pants
                      </label>

                    </div>
                    <div className="d-flex flex-column gap-3 my-5 w-100">
                      <input type="radio"
                        className="btn-check"
                        name="sub-category"
                        value="shirts"
                        id="shirts"
                        checked={selectedSubCategory === "shirts"}
                        onChange={(e) => setSelectedSubCategory(e.target.value)}
                        autoComplete="off"
                        required />
                      <label className="filter-btn btn btn-sm border bag w-100" htmlFor="shirts">
                        Shirts
                      </label>

                      <input type="radio"
                        className="btn-check"
                        name="sub-category"
                        value="t-shirts"
                        id="t-shirts"
                        checked={selectedSubCategory === "t-shirts"}
                        onChange={(e) => setSelectedSubCategory(e.target.value)}
                        autoComplete="off"
                        required />
                      <label className="filter-btn btn btn-sm border bag w-100" htmlFor="t-shirts">
                        T-shirts
                      </label>

                      <input type="radio"
                        className="btn-check"
                        name="sub-category"
                        value="hoodies"
                        id="hoodies"
                        checked={selectedSubCategory === "hoodies"}
                        onChange={(e) => setSelectedSubCategory(e.target.value)}
                        autoComplete="off"
                        required />
                      <label className="filter-btn btn btn-sm border bag w-100" htmlFor="hoodies">
                        Hoodies
                      </label>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Featured or not */}
          <div className="card container-fluid p-3 mb-3">
            <div className="card-body p-3">
              <div className="row">
                <div className="col">
                  <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                    Featured
                  </h2>

                  <div className="d-flex flex-column gap-3 my-5 px-4 w-100">
                    <input type="checkbox"
                      className="btn-check"
                      name="featured"
                      id="featured"
                      value="featured"
                      // onChange={handleFeaturedCheck}
                      onChange={(e) => setFeatured(e.target.checked)}
                      autoComplete="off" />
                    <label className="filter-btn btn btn-sm border bag w-100" htmlFor="featured">
                      Featured
                    </label>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Add Product Button Card */}
          <div className="card container-fluid p-3 mb-3">
            <div className="card-body p-3">
              <div className="row">
                <div className="col contact-form">
                  {/* <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                    Submit
                  </h2> */}
                  <button type="submit"
                    className="btn text-uppercase d-block my-2 py-3 w-100 fw-bold"
                    style={{ fontSize: 0.88 + 'rem' }}
                    disabled={loading}>
                    {
                      loading ? (
                        <>
                          <span class="spinner-grow spinner-grow-sm text-dark me-2" aria-hidden="true"></span>
                          <span role="status">Adding...</span>
                        </>
                      ) : "Add Product"
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
  )
}

export default AddNewProduct
