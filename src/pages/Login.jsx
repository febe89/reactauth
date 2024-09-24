import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  // State for form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  // State for form errors
  const [errors, setErrors] = useState({})

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Simple validation example
    let validationErrors = {}
    if (!formData.name) validationErrors.name = 'Name is required'
    if (!formData.email) validationErrors.email = 'Email is required'
    if (!formData.password) validationErrors.password = 'Password is required'

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // Process signup logic here
      console.log('Form submitted:', formData)
    }
    await axios.post(`http://localhost:5000/api/auth/login`, formData)
    navigate('/home')
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}

          {/* Email Field */}
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 mb-2'>
              Email
            </label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`} placeholder='Your email' />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700 mb-2'>
              Password
            </label>
            <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`} placeholder='Your password' />
            {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
          </div>

          {/* Confirm Password Field */}
          {/* <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:border-blue-500`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div> */}

          {/* Submit Button */}
          <div className='mb-6'>
            <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
              Login
            </button>
          </div>
        </form>

        {/* Already have an account? */}
      </div>
    </div>
  )
}

export default Login
