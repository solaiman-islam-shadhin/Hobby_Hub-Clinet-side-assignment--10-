import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { Home } from './components/Home.jsx'
import { Login } from './components/Login.jsx'
import { Signup } from './components/Signup.jsx'
import { CreatGroups } from './components/CreatGroups.jsx'
import Root from './Root/Root.jsx'
import { ThemeProvider } from './components/ThemeProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:5000/groups'),
       Component: Home
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'all-groups',
        element: <div>All Groups</div>
      },
      {
        path: 'create-group',
        element: <CreatGroups />
      },
      {
        path: 'my-groups',
        element: <div>My Groups</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="data-theme" defaultTheme="light" themes={['light', 'dark']}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)