import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { Home } from './components/Home.jsx'
import { Login } from './components/Login.jsx'
import { Signup } from './components/Signup.jsx'
import { GroupDetails } from './components/GroupDetails.jsx'
import { CreatGroups } from './components/CreatGroups.jsx'
import { NotFound } from './components/NotFound.jsx'
import Root from './Root/Root.jsx'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import { AllGroups } from './components/AllGroups.jsx'
import { AuthProvider } from './Context/AuthProvider.jsx'
import { Dashboard } from './components/Dashboard.jsx'
import { MyGroups } from './components/MyGroups.jsx'
import { PrivateRoute } from './components/PrivateRoute.jsx'
import { Profile } from './components/Profile.jsx'

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
       loader: () => fetch('http://localhost:5000/groups'),
        Component:AllGroups
      },
       {
            path: 'groupdetails/:id',
            loader: ({ params }) => fetch(`http://localhost:5000/group-details/${params.id}`),
            element: <PrivateRoute><GroupDetails /></PrivateRoute>
          },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
          {
            index: true,
            element: <Profile />
          },
          {
            path: 'create-group',
            element: <CreatGroups />
          },
          {
            path: 'my-groups',
            element: <MyGroups />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider attribute="data-theme" defaultTheme="light" themes={['light', 'dark']}>
      <RouterProvider router={router} />
    </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)