// src/Components/DetalhesProjeto.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projetosData from '../data/projetos.json';

const DetalhesProjeto = () => {
  const { id } = useParams();
  const [projeto, setProjeto] = useState(null);

  useEffect(() => {
    const foundProject = projetosData.find(p => p.id === parseInt(id));
    setProjeto(foundProject);
  }, [id]);

  if (!projeto) {
    return (
      // Para o caso de projeto não encontrado, também garanta o z-index e fundo
      <div className="bg-zinc-900 text-white min-h-[calc(100vh-64px)] flex items-center justify-center relative z-10">
        <p className="text-xl">Projeto não encontrado.</p>
      </div>
    );
  }

  return (
    // Adicione 'relative z-10' e 'bg-zinc-900' para garantir que o conteúdo desta página
    // esteja acima das partículas e tenha um fundo sólido.
    <div className="text-white mt-20  min-h-[calc(100vh-64px)] py-12 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <Link
          to="/projetos"
          className="inline-block bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 mb-8"
        >
          &larr; Voltar para Projetos
        </Link>

        <h2 className="text-4xl font-bold text-white mb-6 text-center md:text-left">
          {projeto.titulo}
        </h2>

        <div className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden p-6 mb-8">
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="w-full h-auto rounded-md mb-6"
          />

          <p className="text-gray-300 text-lg mb-4">
            {projeto.descricao}
          </p>

          <div className="mb-4">
            <p className="text-gray-400">
              <strong className="text-white">Data:</strong> {projeto.data}
            </p>
            <p className="text-gray-400">
              <strong className="text-white">Área:</strong> {projeto.area}
            </p>
          </div>

          {projeto.link_demo && (
            <a
              href={projeto.link_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 mr-4"
            >
              Ver Demo
            </a>
          )}

          {projeto.link_repositorio && (
            <a
              href={projeto.link_repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalhesProjeto;