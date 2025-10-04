import React from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({children}) => {
  return (
  <AuthContext>
{
    children
}
  </AuthContext>
  )
}
