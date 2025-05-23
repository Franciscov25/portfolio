import React from 'react';
import linkedin from '../assets/icon-linkedin.png';
import github from '../assets/github.png'
import email from '../assets/gmail.png'


const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8 mt-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Contato</h3>
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a href="mailto:franciscovargasmarcal@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="ícone de e-mail" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/franciscovargas7" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="ícone do LinkedIn" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Franciscov25" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="ícone do GitHub" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} | Desenvolvido por Francisco Vargas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;