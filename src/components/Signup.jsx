import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { Fade } from 'react-awesome-reveal'
import { AuthContext } from '../Context/AuthContext'
import { toast, ToastContainer } from 'react-toastify'

export const Signup = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [justSignedUp, setJustSignedUp] = useState(false)
  const { createUser, googleLogin, user } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (user && justSignedUp) {
      setLoading(false)
      navigate('/')
    }
  }, [user, justSignedUp, navigate])

  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long'
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter'
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter'
    }
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const formdata = new FormData(e.target)
    const { email, password, ...rest } = Object.fromEntries(formdata.entries());

    const userInfo = {
      email,
      ...rest
    }
    const validationError = validatePassword(password)
    if (validationError) {
      setError(validationError)
      return
    }
    setLoading(true)
    createUser(email, password)
      .then((result) => {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(userInfo)
        })
          .then(res => res.json())
        toast.success("User Created Successfully");
        navigate('/dashboard');
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setLoading(false));

  }


  const handleGoogle = () => {
    setLoading(true)
    setJustSignedUp(true)
    googleLogin()
      .then(() => {
         navigate('/dashboard')
        toast.success('Welcome back boss!')
      })
      .catch(() => setLoading(false))
  }


  return (
    <div className="container mx-auto md:p-6 mb-10">
      <Fade direction='down' triggerOnce>
        <div className="w-full text-base-content rounded-lg ">
          <div className="py-5 text-center">
            <h1 className="text-2xl md:text-4xl font-bold">Join Hobby Hub!</h1>
            <p className="text-lg md:text-xl mt-2">Create your account and start connecting</p>
          </div>
        </div>
      </Fade>
      <ToastContainer />
      <Fade direction='up' triggerOnce>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">👤 Full Name</h3>
                <input
                  type="text"
                  name="name"
                  className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">📧 Email</h3>
                <input
                  type="email"
                  name="email"
                  className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">🔒 Password</h3>
                <input
                  type="password"
                  name="password"
                  className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content"
                  placeholder="Create a password"
                  required
                />
                <p className="text-xs mt-1 opacity-70">Min 6 chars, 1 uppercase, 1 lowercase</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">🖼️ Photo URL</h3>
                <input
                  type="url"
                  name="photoURL"
                  className="input w-full focus:outline-none outline-none border-base-content focus:border-base-content"
                  placeholder="Profile photo URL"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="alert alert-error mt-6">
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="py-3 hover:border-b-1 cursor-pointer font-semibold w-full card bg-base-100 shadow-xl btn-lg mt-8"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : 'Sign Up'}
          </button>

          <div className="divider mt-8">OR</div>

          <button
            type="button"
            className="btn btn-outline w-full btn-lg gap-2"
            onClick={handleGoogle}
            disabled={loading}
          >
            {loading && <span className="loading loading-spinner"></span>}
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center mt-6">
            Already have an account?{' '}
            <Link to="/login" className="link link-primary font-semibold">
              Login
            </Link>
          </p>
        </form>
      </Fade>
    </div>
  )
}
