import { Link, Outlet } from "react-router-dom"
import '../App.css'
const Layout = () => {
  return (
    <div className="layout">
        <header className="header-layout">
     <Link  to='/new-post'>new Post</Link>
<Link to='/posts'>Posts</Link>
        </header>
        <Outlet/>

        <header className="footer-layout">
            2024
        </header>
    </div>
  )
}

export default Layout
