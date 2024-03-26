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


const App = () => {

  return (
    <>
      <ToastContainer
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
      />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<CardLogin />} />
          <Route path='/signup' element={<CardSignup />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/singleProduct/:id' element={<SingleProduct />} />

        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
