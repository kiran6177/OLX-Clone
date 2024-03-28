import React, { useContext } from 'react'
import { AuthContext } from './store/FirebaseContext'
import { Navigate } from 'react-router-dom';

function AuthCheck({children}) {
    const {user} = useContext(AuthContext);
  return user ? children : <Navigate to='/login' />
}

export default AuthCheck
