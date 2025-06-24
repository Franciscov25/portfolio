// src/Components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User as UserIcon, Code as CodeIcon, Mail as MailIcon } from 'lucide-react'; // Ícones lucide-react
import logo from '../assets/logo-fv.png';

const Header = () => {
  const location = useLocation(); // Hook para pegar a localização atual da rota
  const [scrolled, setScrolled] = useState(false); // Estado para controlar se a página foi scrollada

  // Efeito para adicionar/remover a classe de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Se a posição do scroll vertical for maior que 20 pixels (ajuste conforme necessário)
      // então setScrolled(true), caso contrário setScrolled(false).
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Adiciona o event listener de scroll quando o componente é montado
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener quando o componente é desmontado para evitar vazamento de memória
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio garante que o efeito só rode uma vez (na montagem e desmontagem)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 flex items-center justify-between transition-colors duration-300
        ${scrolled ? 'bg-zinc-900/40 bg-opacity-70 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="flex items-center space-x-2">
        {/* Logo ou Nome do Portfólio */}
        <Link to="/" className="text-orange-500 text-3xl font-bold flex items-center gap-2">
          <img src={logo} alt="Logo Francisco Vargas" className="w-10 h-10 rounded-full" />
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`flex flex-col items-center text-sm font-medium transition-colors duration-300
                ${location.pathname === '/' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
            >
              <HomeIcon size={20} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className={`flex flex-col items-center text-sm font-medium transition-colors duration-300
                ${location.pathname === '/sobre' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
            >
              <UserIcon size={20} />
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="/projetos"
              className={`flex flex-col items-center text-sm font-medium transition-colors duration-300
                ${location.pathname === '/projetos' || location.pathname.startsWith('/projetos/') ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
            >
              <CodeIcon size={20} />
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className={`flex flex-col items-center text-sm font-medium transition-colors duration-300
                ${location.pathname === '/contato' ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
            >
            <MailIcon size={20} />
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;