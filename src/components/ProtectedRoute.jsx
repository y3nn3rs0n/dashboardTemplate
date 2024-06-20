import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user &&!location.pathname.startsWith('/admin')) {
      navigate('/', { state: { from: location } });
    }
  }, [user, navigate, location]);

  if (!children) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
