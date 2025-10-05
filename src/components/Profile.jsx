import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'

export const Profile = () => {
  const { user } = useContext(AuthContext)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setUserData(data))
    }
  }, [user])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-6 mb-6">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={user?.photoURL || '/default-avatar.png'} alt="Profile" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user?.displayName || userData?.name}</h2>
              <p className="text-base-content/70">{user?.email}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <p className="text-lg">{user?.displayName || userData?.name || 'Not provided'}</p>
            </div>
            
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <p className="text-lg">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}