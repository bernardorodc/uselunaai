import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, CheckCircle, TrendingUp } from 'lucide-react';

const SocialProofStats = () => {
  const stats = [
    {
      icon: <BarChart3 size={32} className="text-primary" />,
      value: '+58.1K',
      label: 'Transações processadas',
      badge: 'Tecnologia de ponta'
    },
    {
      icon: <TrendingUp size={32} className="text-primary" />,
      value: '+R$ 30.6M',
      label: 'Valor gerenciado',
      badge: 'Confiança'
    },
    {
      icon: <Users size={32} className="text-primary" />,
      value: '+5.1K',
      label: 'Usuários ativos',
      badge: 'Comunidade'
    },
    {
      icon: <CheckCircle size={32} className="text-primary" />,
      value: '99.9%',
      label: 'Precisão da IA',
      badge: 'Economia média de 30%'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Resultados Reais para Pessoas Reais
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Junte-se a quem já economizou tempo e dinheiro com a Luna AI
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {stat.badge}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStats;

