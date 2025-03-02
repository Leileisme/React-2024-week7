import { Outlet, useNavigate } from "react-router"
import { NavLink } from "react-router"
import { ToastContainer } from 'react-toastify'


const api = import.meta.env.VITE_BASE_URL
const path = import.meta.env.VITE_API_PATH

const AdminLayout = () => { 

  const routes = [
    {
      path:'/admin/product',
      name:'產品管理'
    },
    {
      path:'/admin/order',
      name:'訂單管理'
    },
    {
      path:'/admin/coupon',
      name:'優惠券管理'
    }
  ]

  return(<>
 <header className="fixed-top bg-white">
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
      <div className="container-fluid">
        <a className="navbar-brand">管理員</a>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0">
            {
              routes.map((route) => (
                <li className="nav-item" key={route.path}>
                    <NavLink className={({isActive})=> isActive ? 'nav-link active set-nav-active ' : 'nav-link'} aria-current="page" to={route.path} >{route.name}</NavLink>
                </li>
              ))
            }
          </ul>
          <ul className="navbar-nav  mb-0">
            <li className="nav-item">
            <NavLink className="btn btn-outline-secondary"  aria-current="page" to={'/'} >登出</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  
  <div className="container mt-3 ">
    <Outlet />
  </div>

  <ToastContainer />
  </>)
}

export default AdminLayout