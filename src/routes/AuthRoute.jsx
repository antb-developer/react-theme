import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthRoute = () => {
  const { user } = useAuth();

  return user ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default AuthRoute;
