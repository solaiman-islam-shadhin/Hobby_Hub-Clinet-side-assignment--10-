import React from 'react'
import { NavLink, Outlet } from 'react-router'

export const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen container mx-auto">
      {/* Mobile Menu */}
      <div className="lg:hidden navbar bg-base-300 rounded-2xl mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink 
                  to="/dashboard" 
                  end
                  className={({isActive}) => isActive ? 'active bg-primary text-primary-content' : ''}
                >
                  👤 Profile
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/dashboard/create-group" 
                  className={({isActive}) => isActive ? 'active bg-primary text-primary-content' : ''}
                >
                  📝 Create Group
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/dashboard/my-groups" 
                  className={({isActive}) => isActive ? 'active bg-primary text-primary-content' : ''}
                >
                  📂 My Groups
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-base-300 p-4 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="menu space-y-2">
          <li>
            <NavLink 
              to="/dashboard" 
              end
              className={({isActive}) => isActive ? 'active bg-primary text-primary-content' : ''}
            >
              👤 Profile
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/create-group" 
              className={({isActive}) => isActive ? 'active bg-primary text-primary-content' : ''}
            >
              📝 Create Group
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/my-groups" 
              className={({isActive}) => isActive ? 'active bg-primary text-primary-content' : ''}
            >
              📂 My Groups
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-3 lg:p-6">
        <Outlet />
      </main>
    </div>
  )
}
