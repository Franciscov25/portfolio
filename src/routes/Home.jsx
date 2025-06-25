import React from 'react';
import TypingText from '../Components/Typer';
import perfilImage from '../assets/eu.png';
import GitHubContributions from '../Components/GitHubContributions';
import ScrollToTopButton from '../Components/ScrollToTopButton'; 

const Home = () => {
  const phrases = [
    "Engenharia de Software",
    "Full Stack Developer",
    "Entusiasta em Dados e IA",
  ];

  const yourGithubUsername = "Franciscov25"; //nome de user no GitHub, vai pegar as contribuições do mesmo

  return (
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
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500 p-2 flex items-center justify-center shadow-lg">
            <img
              src={perfilImage}
              alt="Francisco Vargas - Perfil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Seção de Contribuições do GitHub */}
      <div className="w-full mt-16 px-4">
        <GitHubContributions username={yourGithubUsername} />
      </div>
    <ScrollToTopButton />
    </div>
  );
};

export default Home;