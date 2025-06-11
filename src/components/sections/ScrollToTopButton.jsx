// src/components/ui/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Ou o ícone de sua preferência

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Para uma rolagem suave
    });
  };

  // Mostrar/esconder o botão baseado na posição de rolagem
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Mostra o botão após rolar 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50"> {/* Posição: inferior esquerdo */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ease-in-out"
          aria-label="Voltar para o topo"
        >
          <ArrowUp size={24} /> {/* O ícone da seta para cima */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;