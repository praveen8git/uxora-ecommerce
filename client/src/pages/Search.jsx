import { useCallback, useEffect, useState, useContext } from 'react';
import { Footer, Header, PageTitle, ProductGrid } from '../components'
// import { appContext } from '../App';

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
    return (
        <>
            <Header />
            <PageTitle title={"Search"} />
            <ProductGrid />
            <Footer />
        </>
    )
}

export default Search
