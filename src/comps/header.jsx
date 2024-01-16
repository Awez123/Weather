import React from 'react'

export default function header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-white text-2xl font-bold mb-4 md:mb-0 md:mr-4">WeatherCards</h1>
        
      </div>
    </header>
  )
}
