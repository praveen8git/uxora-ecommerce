import { createContext, useContext, useLayoutEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { Cursor, Logout } from "./components";
import { Home, Shop, Contact, Login, Bag, SingleProduct, Profile, Search, PageNotFound } from "./pages";
import { AdminLayout, Products, AddNewProduct, Customers, Dashboard, Orders, CustomerDetails, OrderDetails } from "./pages/admin";
import { ToastContainer } from "react-toastify";
import BagContextProvider from "./contexts/BagContextProvider";

import IsAuthenticatedContext from "./contexts/IsAuthenticatedContext";

const { VITE_SERVER } = import.meta.env;

// export const appContext = createContext();
function App() {

  // const [search, SetSearch] = useState();

  const { login } = useContext(IsAuthenticatedContext);

  const isLoggedin = async () => {
      try {
        const response = await axios.get(`${VITE_SERVER}/auth/is-logged-in`, {
          withCredentials: true,
        })
        if (response.data.success) {
          // console.log('isloggedin', response.data.user);
          login(response.data.user);
        }
      } catch (error) {
        console.error(error)
      }
  }

  useLayoutEffect(()=>{
    isLoggedin();
  }, [])

  return (
    <>
      {/* <appContext.Provider value={{search, SetSearch}} > */}
        <BagContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop category={'all'} />} />
            <Route path="/kids" element={<Shop category={'kids'} subCategory={''} />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="/women" >
              <Route path="all" element={<Shop category={'women'} subCategory={''} />} />
              <Route path="dresses" element={<Shop category={'women'} subCategory={'dresses'} />} />
              <Route path="skirts" element={<Shop category={'women'} subCategory={'skirts'} />} />
              <Route path="pants" element={<Shop category={'women'} subCategory={'pants'} />} />
            </Route>

            <Route path="/men" >
              <Route path="all" element={<Shop category={'men'} subCategory={''} />} />
              <Route path="hoodies" element={<Shop category={'men'} subCategory={'hoodies'} />} />
              <Route path="shirts" element={<Shop category={'men'} subCategory={'shirts'} />} />
              <Route path="pants" element={<Shop category={'men'} subCategory={'pants'} />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />} >
              <Route path="" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="orders/:id" element={<OrderDetails />} />
              <Route path="products" element={<Products />} />
              <Route path="add-product" element={<AddNewProduct />} />
              <Route path="customers" element={<Customers />} />
              <Route path="customers/:id" element={<CustomerDetails />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </BagContextProvider>
      {/* </appContext.Provider> */}

      <ToastContainer />
      <Cursor />
    </>
  )
}

export default App
