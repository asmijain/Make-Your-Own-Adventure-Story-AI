import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { registerUser } from "../api/auth.js"
import { useAuth } from "../context/AuthContext.jsx"
import "./auth.css"

function Register() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail]       = useState("")
  const [password, setPassword] = useState("")
  const [error, setError]       = useState(null)
  const [loading, setLoading]   = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await registerUser(email, password)
      login(res.data)
      navigate("/")
    } catch (e) {
      setError(e.response?.data?.detail || "Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-card">
      <h2>Create Account</h2>
      {error && <div className="auth-error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} placeholder="Minimum 6 characters" />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creating account…" : "Create Account"}
        </button>
      </form>
      <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </div>
  )
}
export default Register
