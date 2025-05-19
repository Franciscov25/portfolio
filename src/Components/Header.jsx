import React from 'react'
import {Link} from 'react-router-dom'



const Header = () => {
  return (
    <>
    <header className='bg-gray-800 text-amber-500 p-8'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-xl font-bold'><Link to="/">FV</Link></h1>
            <nav className='relative'>
                <Link to="/projetos" className='mr-6 transition duration-150 hover:text-amber-700'>Projetos</Link>
                <Link to="/sobre" className='mr-6 transition duration-150 hover:text-amber-700'>Sobre mim</Link>
                <Link to="/contato" className='mr-10 transition duration-150 hover:text-amber-700'>Contato</Link>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header
