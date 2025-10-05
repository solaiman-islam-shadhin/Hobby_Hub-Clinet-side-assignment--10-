
import { Navbar } from '../components/Navbar'
import { Fotter } from '../components/Fotter'
import { Outlet } from 'react-router'


const Root = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[calc(100vh-310px)] px-2 md:px-0'>
        <Outlet />
      </div>
      <Fotter />
    </div>
  )
}

export default Root