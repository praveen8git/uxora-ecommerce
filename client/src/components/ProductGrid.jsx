import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = () => {

    return (
        <section className="product-grid container-fluid p-0">
            <div className="row g-3">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ProductCard
                        productName={'Girl t-shirt'}
                        regularPrice={74}
                        salePrice={32.5}
                        img={''}
                    />
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ProductCard
                        productName={'Girl t-shirt'}
                        regularPrice={74}
                        salePrice={32}
                        img={''}
                    />
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ProductCard
                        productName={'Girl t-shirt'}
                        regularPrice={74}
                        salePrice={32}
                        img={''}
                    />
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ProductCard
                        productName={'Girl t-shirt'}
                        regularPrice={74}
                        salePrice={32}
                        img={''}
                    />
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ProductCard
                        productName={'Girl t-shirt'}
                        regularPrice={74}
                        salePrice={32}
                        img={''}
                    />
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ProductCard
                        productName={'Girl t-shirt'}
                        regularPrice={74}
                        salePrice={32}
                        img={'https://source.unsplash.com/random/600x600/?girl,fashion'}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProductGrid
