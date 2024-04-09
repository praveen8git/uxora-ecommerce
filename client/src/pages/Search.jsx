import { useCallback, useEffect, useState, useContext } from 'react';
import { Footer, Header, PageTitle, ProductGrid } from '../components'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { appContext } from '../App';

const { VITE_SERVER } = import.meta.env;

const Search = () => {
    // const { search, SetSearch } = useContext(appContext);

    // const [searchData, setSearchData] = useState([]);

    // async function fetchSearchData() {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => setSearchData(json))
    // }

    // useEffect(() => {
    //     if (search.length === 0) {
    //         setSearchData([]);
    //         return;
    //     }
    //     fetchSearchData();
    // }, [search])
    // console.log(searchData)
    const [loading, setLoading] = useState();
    const [products, setProducts] = useState([]);
    let { query } = useParams();

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${VITE_SERVER}/api/search/${query}`, {
                withCredentials: true,
            });
            console.log("searched-products", response.data);
            setProducts(response.data.products)
            setLoading(false);

        } catch (error) {
            console.error(error);
            // error.response.status === 404 ? 
            // toast.error(error.message, { className: "toastify" }) 
            //  : toast.error(error.message, { className: "toastify" }) 
            error.message ? toast.error(error.message, { className: "toastify" }) : null
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [query])

    return (
        <>
            <Header />
            <PageTitle title={"Search"} />
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

export default Search
