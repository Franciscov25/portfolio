// src/routes/Projetos.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projetosData from '../data/projetos.json';

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('Todas');
  const [availableAreas, setAvailableAreas] = useState([]);

  useEffect(() => {
    setProjetos(projetosData);

    const areas = ['Todas', ...new Set(projetosData.map(projeto => projeto.area))];
    setAvailableAreas(areas);
  }, []);

  const filteredProjetos = projetos.filter(projeto => {
    const matchesSearchTerm = projeto.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === 'Todas' || projeto.area === selectedArea;
    return matchesSearchTerm && matchesArea;
  });

  return (
    // Mantenha 'relative z-10' aqui. Isso garante que a seção de Projetos crie seu próprio
    // contexto de empilhamento e fique ACIMA das partículas.
    <section id="projetos" className="mt-30 py-12 text-white min-h-[calc(100vh-64px)] px-4 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Meus Projetos
        </h2>

        {/* Barra de pesquisa e Filtro por Área */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          {/* Campo de pesquisa */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Pesquisar por título..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* Filtro Dropdown por Área */}
          <div className="relative w-full md:w-1/4">
            <select
              className="w-full pl-4 pr-10 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              {availableAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Grade de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjetos.map((projeto) => (
            <div
              key={projeto.id}
              // Os cards individuais não precisam de z-index se o pai já tiver um.
              // O hover:scale-105 por si só pode criar um stacking context local.
              className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link to={`/projetos/${projeto.id}`} className="block">
                <div className="w-full h-48 bg-zinc-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {projeto.titulo}
                </h3>
                <div className="text-gray-400 text-sm mb-3">
                  <p>{projeto.data}</p>
                  <p>{projeto.area}</p>
                </div>
                <div className="mt-auto">
                  <Link
                    to={`/projetos/${projeto.id}`}
                    className="inline-block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                  >
                    Ver Projeto
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjetos.length === 0 && (
          <p className="text-center text-gray-400 mt-8">Nenhum projeto encontrado para os filtros selecionados.</p>
        )}
      </div>
    </section>
  );
};

export default Projetos;