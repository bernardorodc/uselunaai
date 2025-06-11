import React from 'react';
import logoLuna from '../../assets/logos/logo-luna-verde.png';

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoLuna} alt="Luna AI" className="h-10" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#recursos" className="text-gray-700 hover:text-primary transition-colors">Recursos</a>
          <a href="#planos" className="text-gray-700 hover:text-primary transition-colors">Planos</a>
          <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
        </nav>
        <div>
          <a href="#planos" className="btn-gradient">Começar Agora</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

