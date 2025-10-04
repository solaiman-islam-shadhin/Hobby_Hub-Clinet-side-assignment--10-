import React, { useState } from 'react'
import { Link } from 'react-router'
import { ThemeToggle } from './ThemeToggle'

export const Navbar = () => {
  // Mock user state - replace with actual auth logic
  const [user, setUser] = useState(null) // { photoURL: 'url', displayName: 'name' }
  
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="navbar container mx-auto border-b-1 dark:border-white mt-5  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-groups">All Groups</Link></li>
            {user && (
              <>
                <li><Link to="/create-group">Create Group</Link></li>
                <li><Link to="/my-groups">My Groups</Link></li>
              </>
            )}
            {!user ? (
              <li><Link to="/login">Login/Register</Link></li>
            ) : (
              <li><button onClick={handleLogout}>Logout</button></li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Hobby Hub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/all-groups">All Groups</Link></li>
          {user && (
            <>
              <li><Link to="/create-group">Create Group</Link></li>
              <li><Link to="/my-groups">My Groups</Link></li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeToggle />
        {!user ? (
          <Link to="/login" className="btn btn-primary">Login</Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" title={user.displayName}>
              <div className="w-10 rounded-full">
                <img src={user.photoURL || '/default-avatar.png'} alt={user.displayName} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><span className="font-semibold">{user.displayName}</span></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
