import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <main className='container vh-100 vw-100'>
        <div className="d-flex flex-column gap-2 h-100 w-100 justify-content-center align-items-center">
            <p className="product-card-price">
                404
            </p>
            <h1 className="card-heading fs-3 font-color text-uppercase">
                Page Not Found
            </h1>
            <Link to="/" className='btn d-flex gap-2 align-items-center nav-link px-3 py-2'>
                <i className="ai ai-arrow-left"></i>
                Back to homepage
            </Link>

        </div>
    </main>
  )
}

export default PageNotFound
