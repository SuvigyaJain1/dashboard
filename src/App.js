
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
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element = { 
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
