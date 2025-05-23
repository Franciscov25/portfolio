// src/routes/Home.jsx
import React from 'react';
import TypingText from '../Components/Typer';
import perfilImage from '../assets/eu.png'; // Caminho da imagem de perfil corrigido

const Home = () => {
  const phrases = [
    "Olá! Bem-vindo ao meu portfólio.",
    "Meu nome é Francisco Vargas!",
    "Estudante de Engenharia de Software.",
    "Explore meus projetos e entre em contato!",
    "Obrigado por visitar!",
  ];

  return (
    // Adicione 'relative z-10' (ou z-20, um valor alto) para garantir que o conteúdo desta rota
    // esteja acima das partículas. O 'bg-zinc-900' cobrirá as partículas por trás.
    <div className='text-white min-h-[calc(100vh-64px)] flex flex-col items-center justify-center py-12 px-4 relative z-10'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Seção de Texto e Imagem */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <TypingText
              sentences={phrases}
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={2500}
            />
          </h2>
        </div>

        {/* Imagem de Perfil Circular */}
        <div className="mt-8 md:mt-0 flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-emerald-500 p-2 flex items-center justify-center shadow-lg">
            <img
              src={perfilImage}
              alt="Francisco Vargas - Perfil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;