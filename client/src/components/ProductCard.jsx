import { useContext } from "react"
import { Link } from "react-router-dom"
import BagContext from "../contexts/BagContext"

const ProductCard = ({ id, productName, regularPrice, salePrice, image }) => {

    const { addToBag } = useContext(BagContext);

    // this item will be saved to bag context
    const item = {
        id,
        productName,
        image,
        salePrice,
        quantity: 1
    }


    return (
        <div className="card product-card position-relative p-3" >
            <Link to={`/product/${id}`} className="product-link d-block position-relative overflow-hidden ">
                <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50"></div>
                <img className="object-fit-cover w-100 h-100" src={image || "https://cdn.prod.website-files.com/63cffb7c16ab33a28e9734f2/63d4f266958421bafe26c37c_product-05-thumb-p-500.webp"} alt="product" />
            </Link>
            <div className="container-fluid p-3 pb-0">
                <div className="row">
                    <div className="col-8">
                        <h2 className="card-heading font-color text-uppercase fs-4">{productName}</h2>
                        <Link onClick={() => addToBag(item)} className="btn add-cart-btn fw-medium p-1 px-3">
                            <span className="fas mx-1 fs-5">
                                &#xf290;
                            </span> <span className="pe-2">Add to bag</span>
                        </Link>
                    </div>
                    <div className="col-4">
                        <p className="product-card-price font-color m-0">$ {salePrice.toFixed(2) } USD</p>
                        <p className="product-card-price striked m-0">$ {regularPrice.toFixed(2) } USD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
