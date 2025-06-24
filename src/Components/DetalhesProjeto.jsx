// src/Components/DetalhesProjeto.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projetosData from '../data/projetos.json';
import { motion } from 'framer-motion';
import ScrollToTopButton from './ScrollToTopButton';

// Radix UI for accessible modal
import * as Dialog from '@radix-ui/react-dialog';

// Importar todos os ícones necessários para uso dinâmico
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si'; // Exemplo: Importar ícones de Simple Icons para mais opções
import { FaXmark } from 'react-icons/fa6'; // Icon for modal close button

// Importar imagens extras (caso precise usar localmente)
import imgSmartFlow from '../assets/smartflow-tl.png';
import imgSmartFlowResultIcon from '../assets/smartflow-modulo.png';

const imagensExtras = {
  6: imgSmartFlow,
  2: imgSmartFlowResultIcon,
};

const imagensCentrais = {
  6: imgSmartFlowResultIcon,
  // Adicione outras imagens centrais aqui conforme necessário
};


const DetalhesProjeto = () => {
  const { id } = useParams();
  const [projeto, setProjeto] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 

  useEffect(() => {
    const foundProject = projetosData.find(p => p.id === parseInt(id));
    setProjeto(foundProject);
  }, [id]);

  if (!projeto) {
    return (
      <div className="bg-zinc-900 text-white min-h-[calc(100vh-64px)] flex items-center justify-center relative z-10">
        <p className="text-xl">Projeto não encontrado.</p>
      </div>
    );
  }

  // Função para renderizar ícones dinamicamente
  const renderIcon = (iconName, color = 'currentColor') => {
    let IconComponent = FaIcons[iconName]; // Tenta buscar em FaIcons
    if (!IconComponent) {
      IconComponent = SiIcons[iconName]; // Se não encontrar, tenta em SiIcons
    }
    
    return IconComponent ? (
      <IconComponent style={{ color: color }} className="text-3xl md:text-4xl lg:text-5xl mb-2" />
    ) : (
      // Fallback para quando o ícone não é encontrado
      <span className="text-gray-400 text-3xl mb-2">?</span>
    );
  };

  return (
    <div className="text-white mt-20 min-h-[calc(100vh-64px)] py-12 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <Link
          to="/projetos"
          className="inline-block border border-blue-400 bg-blue-400 hover:bg-transparent hover:border hover:border-blue-400 text-white font-semibold py-2 px-4 rounded-md transition duration-300 mb-8"
        >
          ← Voltar para Projetos
        </Link>

        <h2 className="text-4xl font-bold text-white mb-6 text-center md:text-left">
          {projeto.titulo}
        </h2>

        {/* Card Principal do Projeto */}
        <div className="border border-blue-400 rounded-lg shadow-lg overflow-hidden p-6 mb-8">
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

          <div className="flex flex-wrap gap-4 mt-6">
            {projeto.link_demo && (
              <a
                href={projeto.link_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Ver Demo
              </a>
            )}

            {projeto.github && (
              <a
                href={projeto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-blue-400 bg-blue-400 hover:bg-transparent hover:border hover:border-blue-400 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Repositório
              </a>
            )}
          </div>
        </div>

        {/* Seção de Detalhes Adicionais (Mais sobre o projeto) */}
       {projeto.detalhes && (
  <>
    <h3 className="text-3xl font-bold text-blue-400 mt-12 mb-6 text-center md:text-left">
      Mais sobre o projeto
    </h3>

    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-transparent border border-blue-400 rounded-lg p-6 md:p-10 shadow-md flex flex-col md:flex-row items-center gap-8 mb-12"
    >
      {/* Texto */}
      <div className="md:w-1/2">
        <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          {projeto.detalhes.titulo}
        </h4>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          {projeto.detalhes.descricao}
        </p>
        {projeto.detalhes.texto && (
          <p className="text-gray-300 text-lg leading-relaxed">
            {projeto.detalhes.texto}
          </p>
        )}
      </div>

      {/* Vídeo embedado */}
      <div className="md:w-1/2 flex justify-center">
        {projeto.id === 2 ? (
          <div className="w-full aspect-video max-h-[300px] rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/F8gLtAci7kE?start=20"
              title={`Vídeo do projeto ${projeto.titulo}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img
            src={imagensExtras?.[projeto.id] || projeto.detalhes.imagem}
            alt={`Imagem do projeto ${projeto.titulo}`}
            className="rounded-lg shadow-lg w-full object-cover max-h-[300px]"
          />
        )}
      </div>

    </motion.section>
  </>
)}


        {/* Insights Visuais com Imagem Central */}
        {projeto.insightsVisuais && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-12 rounded-lg p-6 md:p-10 shadow-lg relative overflow-hidden mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-zinc-800 to-zinc-900 opacity-20 rounded-lg"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center">
                {projeto.insightsVisuais.tituloSecao}
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="md:w-1/3 flex flex-col gap-6 order-2 md:order-1">
                  {projeto.insightsVisuais.conteudoEsquerda.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="text-blue-400 border border-blue-500 bg-opacity-50 p-4 rounded-lg shadow-md hover:bg-opacity-70 transition-colors duration-300"
                    >
                      {renderIcon(item.icone)}
                      <h4 className="text-xl font-semibold text-white mb-2">{item.titulo}</h4>
                      <p className="text-gray-300 text-sm">{item.descricao}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  className="md:w-1/3 flex justify-center items-center p-4 order-1 md:order-2"
                >
                  <img
                    src={imagensCentrais[projeto.id] || projeto.insightsVisuais.imagemCentral}
                    alt={projeto.insightsVisuais.altImagemCentral}
                    className="w-full max-w-[250px] md:max-w-[300px] h-auto object-contain rounded-full border-4 border-blue-600 shadow-xl
                               transform hover:scale-105 transition-transform duration-500
                               saturate-150 hover:saturate-200"
                  />
                </motion.div>

                <div className="md:w-1/3 flex flex-col gap-6 order-3 md:order-3">
                  {projeto.insightsVisuais.conteudoDireita.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="text-blue-400 border border-blue-500 bg-opacity-50 p-4 rounded-lg shadow-md hover:bg-opacity-70 transition-colors duration-300"
                    >
                      {renderIcon(item.icone)} 
                      <h4 className="text-xl font-semibold text-white mb-2">{item.titulo}</h4>
                      <p className="text-gray-300 text-sm">{item.descricao}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Tecnologias Utilizadas */}
        {projeto.tecnologiasUtilizadas && projeto.tecnologiasUtilizadas.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="border border-blue-400 mt-12 rounded-lg p-6 md:p-10 shadow-lg relative overflow-hidden"
          >
            {/* Background Sutil para a seção de tecnologias */}
            <div className="absolute inset-0 bg-gradient-to-tl from-zinc-900 via-zinc-900 to-blue-800 opacity-10 rounded-lg"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center">
                Tecnologias Utilizadas
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {projeto.tecnologiasUtilizadas.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 border border-blue-300 rounded-lg shadow-md
                                     hover:bg-zinc-950 hover:shadow-md hover:shadow-blue-400 hover:border-none transition-all duration-300
                                     transform hover:-translate-y-2 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }} // Efeito ao passar o mouse
                  >
                    {/* Renderiza o ícone com a cor dinâmica */}
                    {renderIcon(tech.icone, tech.cor)}
                    <p className="text-sm md:text-base font-medium text-white text-center mt-2">
                      {tech.nome}
                    </p>
                  </motion.div>
                ))}
              </div>
                  
              {projeto.tecnologiasUtilizadas.length === 0 && (
                <p className="text-center text-gray-400 mt-8">Nenhuma tecnologia listada para este projeto.</p>
              )}
            </div>
          </motion.section>
        )}

        {/* Galeria de Imagens */}
        {projeto.galeriaImagens && projeto.galeriaImagens.imagens && projeto.galeriaImagens.imagens.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="border border-blue-400 mt-12 rounded-lg p-6 md:p-10 shadow-lg relative"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-blue-400 mb-4 text-center">
                {projeto.galeriaImagens.tituloSecao}
              </h3>
              <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                {projeto.galeriaImagens.descricao}
              </p>

              <Dialog.Root open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {projeto.galeriaImagens.imagens.map((imagem, index) => (
                    <Dialog.Trigger asChild key={index}>
                      <motion.div
                        className="cursor-pointer overflow-hidden rounded-lg shadow-lg group relative"
                        onClick={() => setSelectedImage(imagem)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <img src={imagem.url} alt={imagem.alt} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-400 ease-in-out" />
                        <div className="absolute inset-0 bg-zinc-950/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-semibold text-center p-2">{imagem.alt}</p>
                        </div>
                      </motion.div>
                    </Dialog.Trigger>
                  ))}
                </div>

                <Dialog.Portal>
                  <Dialog.Overlay asChild>
                    <motion.div
                      className="fixed inset-0 bg-black/80 z-40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild>
                    <motion.div
                      className="fixed inset-0 z-50 flex items-center justify-center p-4"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <div className="relative bg-zinc-900/90 backdrop-blur-sm border border-blue-500 p-4 rounded-lg shadow-xl max-w-4xl w-full">
                        <img src={selectedImage?.url} alt={selectedImage?.alt} className="w-full h-auto max-h-[80vh] object-contain rounded-md" />
                        <p className="text-white text-center mt-3 text-base">{selectedImage?.alt}</p>
                        <Dialog.Close asChild>
                          <button className="absolute top-3 right-3 p-2 bg-zinc-800 hover:cursor-pointer hover:bg-red-500 rounded-full text-white transition-colors duration-300" aria-label="Fechar">
                            <FaXmark size={20} />
                          </button>
                        </Dialog.Close>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </motion.section>
        )}
        {/* FIM DA NOVA SEÇÃO */}

      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default DetalhesProjeto;