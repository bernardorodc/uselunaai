import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Bot, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Faixa de autoridade - Ajustado o espaçamento vertical */}
        <motion.div 
          className="flex justify-center items-center gap-4 md:gap-8 pt-0 pb-6 mb-2 text-sm md:text-base text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-primary" />
            <span>Dados Criptografados</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-gray-300">•</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot size={18} className="text-primary" />
            <span>IA de Verdade</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-gray-300">•</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare size={18} className="text-primary" />
            <span>Via WhatsApp</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sua Liberdade Financeira Começa com a{' '}
              <span className="bg-gradient-to-r from-primary to-gray-700 bg-clip-text text-transparent">
                Luna AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Organize suas finanças pelo WhatsApp, registre gastos por texto, áudio, imagem e PDF.
            </p>

            {/* Cards de benefícios com efeito hover */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Shield size={20} className="text-primary" />
                </div>
                <h3 className="font-medium text-gray-900">Privacidade Garantida</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Bot size={20} className="text-primary" />
                </div>
                <h3 className="font-medium text-gray-900">IA que te Entende</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <h3 className="font-medium text-gray-900">Zero Complicação</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#planos" className="btn-gradient text-center flex items-center justify-center gap-2">
                Começar Agora
              </a>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full"></div>
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl">
               <iframe
                 width="100%"
                height="315"
                src="https://www.youtube.com/embed/ugkvjeiHQdw"
                title="VSL Luna AI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

