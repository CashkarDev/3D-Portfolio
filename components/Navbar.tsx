import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar overflow-hidden  flex justify-between items-center 
    px-8 py-6 text-lg  md:text-xl font-medium">
      <span>
      <span className=""><Link href="/">Home</Link></span>
      </span>
        
        <span>
              <ul className='flex justify-center items-center space-x-4 md:space-x-8'>
          <li> <span><Link href="about">About</Link></span></li>
          <li> <span> <Link href="projects">Projects</Link></span></li>
          <li> <span> <Link href="contact">Contact</Link></span></li>
            </ul> 
        </span>
    
    
    </nav>
  )
}

export default Navbar