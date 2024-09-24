import React from 'react'

const Main = () => {
  return (
    <main className='flex-grow'>
      <section id='home' className='bg-gray-100 py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6'>Welcome to Our Landing Page</h2>
          <p className='text-lg text-gray-600 mb-8'>This is the perfect place to showcase your product or service.</p>
          <button className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600'>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20'>
        <div className='container mx-auto text-center'>
          <h3 className='text-3xl font-semibold mb-4'>Features</h3>
          <p className='text-gray-600 mb-6'>Discover the amazing features we offer</p>
          {/* Add your feature cards or description here */}
        </div>
      </section>
    </main>
  )
}

export default Main
