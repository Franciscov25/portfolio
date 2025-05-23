// src/routes/Error.jsx
import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    // REMOVIDO: relative z-10
    // min-h-[calc(100vh-64px)] está correto
    <div className='bg-zinc-900 text-white min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4'>
      <h2 className="text-4xl font-bold text-red-500 mb-4">Erro 404</h2>
      <p className="text-xl text-gray-300 mb-6">Página não encontrada :(</p>
      <Link
        to="/"
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
      >
        Voltar para o Início
      </Link>
    </div>
  )
}

export default Error;