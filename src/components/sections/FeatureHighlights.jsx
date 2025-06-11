import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart3, Brain } from 'lucide-react';

const FeatureHighlights = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      id: 1,
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Registre em Segundos",
      description: "Mande foto, áudio, PDF ou texto direto no WhatsApp",
      stat: "5x",
      statText: "economize tempo"
    },
    {
      id: 2,
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Controle Total e Simples",
      description: "Acompanhe seus gastos em tempo real, com alertas inteligentes",
      stat: "100%",
      statText: "de visibilidade"
    },
    {
      id: 3,
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Decisões Mais Inteligentes",
      description: "Receba insights personalizados para economizar mais todo mês",
      stat: "+30%",
      statText: "de economia"
    }
  ];

  return (
    <section id="recursos" className="section">
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
            Organize Suas Finanças em Segundos
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Junte-se a +5.1K pessoas economizando +R$ 450/mês com a Luna
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="bg-gray-50 py-4 px-6 rounded-lg">
                <span className="block text-3xl font-bold text-primary">{feature.stat}</span>
                <span className="text-gray-500">{feature.statText}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;

