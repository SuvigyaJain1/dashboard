
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/Login/LoginPage';
import AuthProvider from './Auth/Authentication';
import { RequireAuth } from './Auth/Authentication';

import React, { useState } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Axios from 'axios';
import { Spinner } from 'react-bootstrap';
import SpinnerOverlay from './components/Spinner/SpinnerOverlay';





let App = () => {
  const [loaded, setLoaded] = useState(true);

  Axios.interceptors.request.use(config => {
    setLoaded(false);
  }, err => {
    return Promise.reject(err);
  })
  
  Axios.interceptors.response.use(config => {
    setLoaded(true)
  }, err => {
    return Promise.reject(err);
  })

  return (
      <AuthProvider>
            {loaded==false? <SpinnerOverlay/>:<></>}
        <Routes>
          <Route path='/' element = { 
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </AuthProvider>
  );
}

export default App;
