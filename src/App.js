import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardLogin from './components/CardLogin';
import CardSignup from './components/CardSignup';
import Filter from './components/Filter';
import SingleProduct from './components/SingleProduct';
import { ToastContainer } from 'react-toastify';
import Protected from './components/Protected';
import { selectLoginAuth } from './redux/slices/userSlice';
import { useSelector } from 'react-redux';
import NotFound from './components/404';

const App = () => {
  const loginData = useSelector(selectLoginAuth)
  console.log(loginData?.data?.token, 'appppppp sssssssss');
  return (
    <>
      <Router>
        <Header />
        {/* <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        // limit={1}
        // pauseOnHover
        /> */}
        <Routes>
          <Route path='/' element={<CardLogin />} />
          <Route path='/signup' element={<CardSignup />} />
          <Route element={<Protected token={loginData?.data?.token} />} >
            <Route path='/filter' element={<Filter />} />
            <Route path='/singleProduct/:id' element={<SingleProduct />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
