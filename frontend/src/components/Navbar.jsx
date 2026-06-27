import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <nav className="navbar">
      {user ? (
        <>
          <span className="navbar-email">{user.email}</span>
          <button className="navbar-btn" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link className="navbar-link" to="/login">Sign In</Link>
          <Link className="navbar-link" to="/register">Register</Link>
        </>
      )}
    </nav>
  )
}
export default Navbar
