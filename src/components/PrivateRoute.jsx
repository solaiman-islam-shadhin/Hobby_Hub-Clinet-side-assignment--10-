import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../Context/AuthContext'

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}
