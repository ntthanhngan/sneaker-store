import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Common from '../Navbar/Common';
//import ShareUI from '../Navbar/ShareUI';
import Home from '../Home/Home';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import ProductDetails from '../ProductDetails/ProductDetails';
import SignIn from '../Signin/SignIn';
import Register from '../Register/Register';
import Account from '../Account/Account';
import axios from 'axios';
import queryString from 'query-string';

function RouterComponent(props) {
    //fetch all data
  const [data, setData] = useState([]);
  //paginate
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    totalRows: 1
  })
  //filter
  const [filters, setFilters] = useState({
    page: 1,
    limit: 6,
    gender: 0,
  })
  
  //authorize
  axios.defaults.withCredentials = true
  const [auth, setAuth] = useState(false)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  //fetch data & filter(paginate)
  useEffect(()=>{
    async function fetchAllProducts(){
      try {
        const paramString = queryString.stringify(filters)
        const requestUrl = `https://sneaker-store-api.onrender.com/products?${paramString}`
        const response = await fetch(requestUrl)

        const responseJSON = await response.json()

        const {data} = responseJSON

        setData(data)
        setPagination(
          responseJSON.pagination
        )

      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }
    fetchAllProducts()
  }, [filters])


  //authorize
  useEffect(()=>{
    axios.get('https://sneaker-store-api.onrender.com/users')
    .then(res=>{
        if(res.data.status === "Success"){
            setAuth(true)
        }
        else{
            setAuth(false)
            setMessage(res.data.error)
        }
    })
    .catch(err=>{
        console.log(err)
    })
  }, [message, navigate])

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage
    })
  }
  function handleSearchChange(newFilters) {
    setFilters({
      ...filters,
      page: 1,
      name: newFilters.searchTerm,
    });
  }

  const [gender, setGender] = useState()
  function handleGenderSelection(selectedGender){
    setGender(selectedGender)
    setFilters({
      ...filters,
      page: 1,
      gender: selectedGender
    })
  }
  
  return (
      <>
          <Routes>
            <Route path='/' element={
                                <Common onSubmit={handleSearchChange} 
                                        handleGenderSelection={handleGenderSelection}
                                        auth={auth}
                                />}>
                                {/* <ShareUI onSubmit={handleSearchChange} 
                                        handleGenderSelection={handleGenderSelection}
                                        auth={auth}/>
                                }> */}
                <Route path='' element={
                                <Home auth={auth} 
                                      cartData={props.cart} 
                                      handleClearCart={props.handleClearCart}
                                />}/>
                {
                  gender === 0 ? <Route path='products/women' 
                                        element={
                                        <Product  datas={data}
                                                  pagination={pagination}
                                                  handlePageChange={handlePageChange}
                                                  handleAddToCart={props.handleAddToCart}
                                                  gender={gender}
                                  />} />
                  :
                  <Route path='products/men' 
                      element={<Product datas={data}
                                        pagination={pagination}
                                        handlePageChange={handlePageChange}
                                        handleAddToCart={props.handleAddToCart}
                                        gender={gender}
                  />} />      
                                     
                }      
                <Route  path='cart' 
                        element={
                        <Cart cart={props.cart}
                              handleAddToCart={props.handleAddToCart}
                              handleRemoveFromCart={props.handleRemoveFromCart}
                        />}/>
                <Route path='login' element={<SignIn/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='setting' element={<Account auth={auth}/>}/>
                <Route path='product-details/:id' 
                        element={
                          <ProductDetails datas={data}
                                          handleAddToCart={props.handleAddToCart}
                          />} /> 
            </Route>
          </Routes>
      </>
  );
}

export default RouterComponent;