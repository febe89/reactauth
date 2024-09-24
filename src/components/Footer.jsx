import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
    <div className="container mx-auto px-4 text-center">
      <p className="mb-2">© 2024 Your Company. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>

  )
}

export default Footer