import { createContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Cursor } from "./components";
import { Home, Shop, Contact, Login, Bag, SingleProduct, Profile, Search, PageNotFound } from "./pages";
import { AdminLayout, Products, AddNewProduct, Customers, Dashboard, Orders, CustomerDetails, OrderDetails } from "./pages/admin";
import { ToastContainer } from "react-toastify";
import BagContextProvider from "./contexts/BagContextProvider";
import IsAuthenticatedContextProvider from "./contexts/IsAuthenticatedContextProvider";

// export const appContext = createContext();
function App() {

  // const [search, SetSearch] = useState();

  return (
    <>
      {/* <appContext.Provider value={{search, SetSearch}} > */}
      <IsAuthenticatedContextProvider>
        <BagContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bag" element={<Bag />} />
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
            <Route path="*" element={<PageNotFound/>} />

          </Routes>
        </BagContextProvider>
      </IsAuthenticatedContextProvider>
      {/* </appContext.Provider> */}

      <ToastContainer />
      <Cursor />
    </>
  )
}

export default App
