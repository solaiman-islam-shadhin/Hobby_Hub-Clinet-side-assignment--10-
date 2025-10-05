import React, { useContext, } from 'react'
import { Link, NavLink } from 'react-router'
import { ThemeToggle } from './ThemeToggle'
import { AuthContext } from '../Context/AuthContext'

export const Navbar = () => {
  const {user,setUser}=useContext(AuthContext)  
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="navbar container mx-auto border-b-1 border-base-content my-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-300  rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink className={({isActive}) => isActive ? 'link link-hover text-accent font-semibold text-sm' : 'link link-hover font-semibold text-sm'} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'link link-hover text-accent font-semibold text-sm' : 'link link-hover font-semibold text-sm'} to="/all-groups">All Groups</NavLink></li>
            {user && (
              <li><NavLink className={({isActive}) => isActive ? 'link link-hover text-accent font-semibold text-sm' : 'link link-hover font-semibold text-sm'} to="/dashboard/my-groups">Dashboard</NavLink></li>
            )}
            {!user ? (
              <li><Link className="link link-hover font-semibold text-sm" to="/login">Login/Register</Link></li>
            ) : (
              <li><button className="link link-hover font-semibold text-sm" onClick={handleLogout}>Logout</button></li>
            )}
          </ul>
        </div>
        <Link to="/" className=" text-xl">Hobby Hub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-4 menu-horizontal px-1">
          <li><NavLink className={({isActive}) => isActive ? 'link link-hover text-accent font-semibold text-xl' : 'link link-hover font-semibold text-xl'} to="/">Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'link link-hover text-accent font-semibold text-xl' : 'link link-hover font-semibold text-xl'} to="/all-groups">All Groups</NavLink></li>
          {user && (
            <li><NavLink className={({isActive}) => isActive ? 'link link-hover text-accent font-semibold text-xl' : 'link link-hover font-semibold text-xl'} to="/dashboard/my-groups">Dashboard</NavLink></li>
          )}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeToggle />
        {!user ? (
          <Link to="/login" className="btn px-10 hidden md:block text-center py-2 border-base-content">Login</Link>
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
