import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';

const PricingSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="planos" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            Escolha o Plano Ideal para Você
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Essencial */}
          <motion.div 
            className="pricing-card bg-white hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">Mensal</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold text-gray-900">R$29,90</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Fale com a Luna por WhatsApp</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Registro de despesas ou receitas por foto, áudio ou texto</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Importação de extrato bancário - PDF</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Relatórios por categoria e data</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Teto de gastos por categoria</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Dicas financeiras personalizadas</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Metas financeiras personalizadas</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Importação de faturas de cartão</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Relatórios semanais automático</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Relatórios com gráficos</span>
              </li>
            </ul>
            
            <div className="mt-auto">
              <a 
                href="https://www.asaas.com/c/q5kp6or6zqewc0zv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gradient w-full block text-center"
              >
                Começar Agora
              </a>
            </div>
          </motion.div>

          {/* Plano Premium */}
          <motion.div 
            className="pricing-card pricing-card-popular relative bg-white hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute -top-4 right-0 left-0 text-center">
              <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Mais Popular
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Anual</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold text-gray-900">R$239,90</span>
              <span className="text-gray-500 ml-2">/mês</span>
            </div>
            
            <div className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded mb-6">
              Economize R$118,90 Com o Plano Anual!
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Fale com a Luna por WhatsApp</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Registro de despesas ou receitas por foto, áudio ou texto</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Importação de extrato bancário - PDF</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Relatórios por categoria e data</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Teto de gastos por categoria</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Dicas financeiras personalizadas</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Metas financeiras personalizadas</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Importação de faturas de cartão</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Relatórios semanais automático</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span>Relatórios com gráficos</span>
              </li>
            </ul>
            
            <div className="mt-auto">
              <a 
                href="https://www.asaas.com/c/k113e3g6s3glzi32" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gradient w-full block text-center"
              >
                Começar Agora
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

