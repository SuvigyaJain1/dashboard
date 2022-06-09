
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/Login/LoginPage';
import AuthProvider from './Authentication';
import { RequireAuth } from './Authentication';

import React, { useState, useEffect, useContext } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

let App = () => {
  
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element = { 
          // <RequireAuth>
            <Dashboard />
          // </RequireAuth>
        } />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
