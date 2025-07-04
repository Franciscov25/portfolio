import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='text-white min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4'>
      <h2 className="text-4xl font-bold text-blue-400 mb-4">Erro 404</h2>
      <p className="text-xl text-gray-300 mb-6">Página não encontrada :(</p>
      <Link
        to="/"
        className="bg-blue-400 border text-zinc-900 border-blue-400 hover:text-white hover:bg-transparent hover:border hover:border-blue-400 font-semibold py-2 px-6 rounded-md transition duration-300"
      >
        Voltar para o Início
      </Link>
    </div>
  )
}

export default Error;