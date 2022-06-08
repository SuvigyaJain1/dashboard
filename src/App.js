
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/Login/LoginPage';
import AuthProvider from './AuthProvider';

import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
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

let AuthContext = React.createContext(null);


export default App;