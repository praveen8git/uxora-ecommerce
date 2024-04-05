import { useCallback, useEffect, useState, useContext } from 'react';
import debounce from 'lodash/debounce';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import BagContext from '../contexts/BagContext';
import IsAuthenticatedContext from '../contexts/IsAuthenticatedContext';
// import { appContext } from '../App';

const Header = () => {

    // const { search, SetSearch } = useContext(appContext);
    // const navigate = useNavigate();

    // //debouncing 
    // const handleSearchDebounce = (text) => {
    //     deb(text);
    // };
    // const deb = useCallback(
    //     debounce((text) => {
    //         SetSearch(text);
    //     }, 500),
    //     []
    // );

    const { bagItems } = useContext(BagContext);
    const { isAuthenticated } = useContext(IsAuthenticatedContext);

    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid px-4 py-2">

                    {/* <Link className="navbar-brand font-color" to="/">ÜXORA</Link> */}
                    <NavLink className="navbar-brand font-color position-relative" to="/">
                        ÜXORA
                        <span className="position-absolute top-0 start-50 translate-middle fs-6">
                            <i className="ai ai-crown-fill bag"></i>
                        </span>

                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-theme="dark"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse row navbarNav" id="navbarNav">
                        <ul className="navbar-nav col-sm-8 justify-content-end">
                            <form className="search d-flex w-75 m-1" role="search">
                                <input onChange={(e) => handleSearchDebounce(e.target.value)} className="form-control me-2 w-100 bg-color border-0" type="search" placeholder="&#xF002; Search"
                                    aria-label="Search" />
                                <button className="btn font-color d-none" type="submit">search<i className="fa fa-magnifying-glass"></i></button>
                            </form>
                        </ul>
                        <ul className="navbar-nav col-sm-4 font-color justify-content-end">
                            {
                                !isAuthenticated ? (
                                    <Link to="/login" id="login" className="btn nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                        style={{ fontSize: 0.88 + 'rem' }}>
                                        Login
                                    </Link>
                                ) : (
                                    <Link to="/profile" id="profile" className="btn nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                        style={{ fontSize: 0.88 + 'rem' }}>
                                        Profile
                                    </Link>
                                )
                            }
                            <Link to="/bag" className="py-1 text-center text-decoration-none">
                                <span className="fas mx-2 fs-4 bag position-relative">
                                    &#xf290;
                                    <span className='position-absolute translate-middle ms-1 fs-6 login-heading small-font'>
                                        {bagItems.length}
                                    </span>
                                </span>
                                {/* <i className="ai ai-bag-fill mx-2 fs-3 bag position-relative"></i> */}
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* header navigation 2  */}
            <nav className="navbar navbar-expand-md container-fluid p-0">
                <div className="collapse navbar-collapse row m-0 navbarNav" id="navbarNav">
                    <ul className="navbar-nav col-sm-12 justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link font-color bg-color px-4 py-0 mx-2 text-center" id="index"
                                to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font-color bg-color px-4 py-0 mx-2 text-center" id="shop" to="/shop">Shop</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link font-color bg-color px-4 py-0 mx-2 text-center" id="shop" to="/men">Men</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font-color bg-color px-4 py-0 mx-2 text-center" id="shop" to="/women">Women</NavLink>
                        </li> */}
                        <li className="nav-item dropdown dropdown-hover">
                            <NavLink className="nav-link dropdown-toggle font-color bg-color px-4 py-0 mx-2 text-center" to="/women"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Women
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" id="women" to="/women/all">All Products</NavLink></li>
                                <li><NavLink className="dropdown-item" id="dresses" to="/women/dresses">Dresses</NavLink></li>
                                <li><NavLink className="dropdown-item" id="wpants" to="/women/pants">Pants</NavLink></li>
                                <li><NavLink className="dropdown-item" id="skirts" to="/women/skirts">Skirts</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle font-color bg-color px-4 py-0 mx-2 text-center" to="/men"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Men
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" id="men" to="/men/all">All Products</NavLink></li>
                                <li><NavLink className="dropdown-item" id="shirts" to="/men/shirts">Shirts</NavLink></li>
                                <li><NavLink className="dropdown-item" id="pants" to="/men/pants">Pants</NavLink></li>
                                <li><NavLink className="dropdown-item" id="hoodies" to="/men/hoodies">Hoodies</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font-color bg-color px-4 py-0 mx-2 text-center" id="kids" to="/kids">Kids</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link font-color bg-color px-4 py-0 mx-2 text-center" id="contact" to="/contact">Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </>

    )
}

export default Header


{/** 
 * 
 * <script>
    activateNav()
    function activateNav() {
            var x = window.location.pathname.split('/').pop().split('.').shift()
            if (x == "") { document.getElementById('index').classNameList.add('active') }
            else {
                document.getElementById(x).classNameList.add('active')
                $('#' + x).parentsUntil('.dropdown').siblings('.dropdown-toggle').addclassName('active')
            }
        }
</script>
*/}


