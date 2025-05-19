import React from 'react';
import TypingText from '../Components/Typer'; // Corrija o caminho se necessário

const Home = () => {
  const phrases = [
    "Olá! Bem-vindo ao meu portfólio.",
    "Estudante de Engenharia de Software.",
    "Explore meus projetos e entre em contato!",
    "Obrigado por visitar!",
  ];

  return (
    <body className='bg-gray-700'>
    <div>
      <TypingText
        sentences={phrases}
        typingSpeed={100}
        deletingSpeed={50}
        pauseDuration={2000}
      />
    </div>
    </body>
  );
};

export default Home;
