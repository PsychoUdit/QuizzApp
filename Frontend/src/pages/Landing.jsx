import React from 'react'
import Header from '../components/header.jsx'

const Landing = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start" style={{background:'linear-gradient(180deg,var(--bg-900),var(--bg-700))'}}>
      <div className="container">
        <Header />
      </div>
    </div>
  )
}

export default Landing