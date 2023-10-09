import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({element}) => {
    const cartItems = useSelector((state)=> state.cart.cart );

  return cartItems.length > 0 ? element : <Navigate to="/" />
}

export default ProtectedRoute