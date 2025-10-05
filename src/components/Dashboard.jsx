import React from 'react'
import { NavLink, Outlet } from 'react-router'

export const Dashboard = () => {
  return (
    <div className="flex min-h-screen container mx-auto">
      {/* Sidebar */}
      <aside className="w-64 bg-base-300 p-4  rounded-2xl">
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
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
