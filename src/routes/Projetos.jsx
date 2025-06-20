import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projetosData from '../data/projetos.json';
import { motion } from 'framer-motion';
import { FaStar, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

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

  const projetosDestaque = projetos.slice(0, 2);

  // Ícone style para links sociais
  const iconClasses = "text-yellow-400 hover:text-yellow-300 transition-colors duration-300";

  return (
    <motion.section
      id="projetos"
      className="mt-30 py-12 text-white min-h-[calc(100vh-64px)] px-4 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="p-4 container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-500">
          Meus Projetos
        </h2>

        {/* Seção Destaque */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 flex items-center justify-center gap-2 text-yellow-400">
            <FaStar /> Projetos em Destaque
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projetosDestaque.map((projeto, index) => (
              <motion.div
                key={projeto.id}
                className="bg-yellow-900 bg-opacity-20 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:scale-[1.03] transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Link to={`/projetos/${projeto.id}`} className="md:w-1/2 w-full h-56 md:h-auto overflow-hidden block">
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover hover:brightness-90 transition"
                  />
                </Link>
                <div className="p-6 flex flex-col justify-between md:w-1/2">
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-yellow-300">{projeto.titulo}</h4>
                    <p className="text-yellow-200 mb-4 line-clamp-4">{projeto.descricao}</p>
                  </div>
                  <div className="text-yellow-400 text-sm mb-4">
                    <p>{projeto.data}</p>
                    <p className="italic">{projeto.area}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <Link
                      to={`/projetos/${projeto.id}`}
                      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-2 px-4 rounded-md text-center transition duration-300"
                    >
                      Ver Projeto
                    </Link>
                    <div className="flex mt-3 sm:mt-0 space-x-4 text-yellow-400 text-xl">
                      {projeto.github && (
                        <a href={projeto.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconClasses}>
                          <FaGithub />
                        </a>
                      )}
                      {projeto.linkedin && (
                        <a href={projeto.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconClasses}>
                          <FaLinkedin />
                        </a>
                      )}
                      {projeto.youtube && (
                        <a href={projeto.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={iconClasses}>
                          <FaYoutube />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Barra de pesquisa e Filtro por Área */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Pesquisar por título..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          <div className="relative w-full md:w-1/4">
            <select
              className="w-full pl-4 pr-10 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        {/* Grade de projetos com animação */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjetos.map((projeto, index) => (
            <motion.div
              key={projeto.id}
              className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
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
                    className="inline-block w-full text-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 mb-3"
                  >
                    Ver Projeto
                  </Link>
                  <div className="flex justify-center space-x-5 text-blue-400 text-xl">
                    {projeto.github && (
                      <a href={projeto.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-300 transition-colors duration-300">
                        <FaGithub />
                      </a>
                    )}
                    {projeto.linkedin && (
                      <a href={projeto.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors duration-300">
                        <FaLinkedin />
                      </a>
                    )}
                    {projeto.youtube && (
                      <a href={projeto.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-blue-300 transition-colors duration-300">
                        <FaYoutube />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjetos.length === 0 && (
          <p className="text-center text-gray-400 mt-8">Nenhum projeto encontrado para os filtros selecionados.</p>
        )}
      </div>
    </motion.section>
  );
};

export default Projetos;
