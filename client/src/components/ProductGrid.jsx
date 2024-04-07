import axios from 'axios'
import ProductCard from './ProductCard'

const ProductGrid = (props) => {
    console.log(props.products);

    return (
        <section className="product-grid container-fluid p-0">
            <div className="row g-3">
                {props.products.map(product => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={product._id}>
                        <ProductCard
                            id={product._id}
                            productName={product.productName}
                            regularPrice={product.regularPrice}
                            salePrice={product.salePrice}
                            image={product.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductGrid
