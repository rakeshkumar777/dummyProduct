import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Forgot from './components/Forgot';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Forgot' element={<Forgot/>}/>
      
    </Routes>
    </BrowserRouter>
      


    </>
  )
}

export default App
