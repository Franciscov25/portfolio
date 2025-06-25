import React from 'react';
import linkedin from '../assets/icon-linkedin.png';
import github from '../assets/github.png';
import email from '../assets/gmail.png';

const Footer = () => {
  return (
    <footer className="bg-black/30 border-t border-blue-500 backdrop-blur-md text-white py-8 mt-1">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-blue-400 mb-6">Contato</h3>
        <ul className="flex justify-center space-x-10 mb-6">
          <li>
            <a href="mailto:franciscovargasmarcal@gmail.com" target="_blank" rel="noopener noreferrer">
              <img
                src={email}
                alt="ícone de e-mail"
                className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/franciscovargas7" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedin}
                alt="ícone do LinkedIn"
                className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Franciscov25" target="_blank" rel="noopener noreferrer">
              <img
                src={github}
                alt="ícone do GitHub"
                className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} | Desenvolvido por <span className="text-white font-medium">Francisco Vargas</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
