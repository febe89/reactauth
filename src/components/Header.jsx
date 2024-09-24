import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
  <h1 className="text-xl font-bold">Brand</h1>
  <nav className="space-x-6">
    <a href="#home" className="hover:text-gray-400">Home</a>
    <a href="#features" className="hover:text-gray-400">Features</a>
    <a href="#about" className="hover:text-gray-400">About</a>
    <a href="#contact" className="hover:text-gray-400">Contact</a>
  </nav>
</div>
</header>

  )
}

export default Header
