import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardLogin from './components/CardLogin';
import CardSignup from './components/CardSignup';
import Filter from './components/Filter';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import SingleProduct from './components/SingleProduct';


const App = () => {
  const user = useSelector(selectUser)

  return (
    <>

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
