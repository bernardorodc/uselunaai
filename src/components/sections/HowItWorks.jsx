import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Receipt, BarChart, Lightbulb } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare size={28} className="text-white" />,
      title: 'Comece uma Conversa',
      description: 'Inicie um chat com a Luna AI pelo WhatsApp e comece a registrar suas finanças.',
      color: 'bg-primary'
    },
    {
      icon: <Receipt size={28} className="text-white" />,
      title: 'Registre seus Gastos',
      description: 'Envie fotos de recibos, notas fiscais, áudios ou textos simples.',
      color: 'bg-blue-500'
    },
    {
      icon: <BarChart size={28} className="text-white" />,
      title: 'Acompanhe seu Progresso',
      description: 'Visualize relatórios e gráficos detalhados sobre seus gastos e receitas.',
      color: 'bg-purple-500'
    },
    {
      icon: <Lightbulb size={28} className="text-white" />,
      title: 'Receba Insights',
      description: 'Obtenha dicas personalizadas para economizar e melhorar suas finanças.',
      color: 'bg-amber-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Como a Luna Funciona?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Controle financeiro simplificado em 4 passos fáceis, direto no seu WhatsApp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center mr-3`}>
                    {step.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-white p-4 rounded-xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <div className="ml-3">
                  <h4 className="font-bold">Luna AI</h4>
                  <p className="text-xs text-gray-500">Assistente Financeiro</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Olá! Sou a Luna, sua assistente financeira. Como posso te ajudar hoje?</p>
                </div>
                
                <div className="bg-gray-200 rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-sm">Quero registrar uma compra no supermercado de R$ 157,35</p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Registrei sua compra de R$ 157,35 na categoria "Supermercado". Deseja adicionar alguma observação?</p>
                </div>
                
                <div className="bg-gray-200 rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-sm">Não, obrigado!</p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Perfeito! Seu gasto foi registrado. Este mês você já gastou R$ 432,50 em supermercado, o que representa 72% do seu limite mensal para esta categoria.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

