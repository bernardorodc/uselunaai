import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  PieChart, 
  BarChart, 
  Download, 
  Target 
} from 'lucide-react';

const DashboardShowcase = () => {
  const features = [
    {
      icon: <LayoutDashboard size={24} className="text-primary" />,
      title: 'Visão consolidada de gastos',
      description: 'Visualize todos os seus gastos e receitas em um único lugar.'
    },
    {
      icon: <PieChart size={24} className="text-primary" />,
      title: 'Análise por categoria',
      description: 'Entenda como seus gastos se distribuem entre diferentes categorias.'
    },
    {
      icon: <BarChart size={24} className="text-primary" />,
      title: 'Gráficos interativos',
      description: 'Explore seus dados financeiros com gráficos dinâmicos e interativos.'
    },
    {
      icon: <Download size={24} className="text-primary" />,
      title: 'Exportação de relatórios',
      description: 'Exporte seus dados financeiros em diferentes formatos.'
    },
    {
      icon: <Target size={24} className="text-primary" />,
      title: 'Metas visuais',
      description: 'Acompanhe visualmente o progresso de suas metas financeiras.'
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
            Acompanhe Tudo em Tempo Real com o Dashboard Luna AI
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Visualize suas finanças de forma clara e intuitiva
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mt-1 mr-4 p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full"></div>
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
                <img 
                  src="https://i.postimg.cc/630HNbYL/Screenshot-2025-06-10-at-14-29-31.png" 
                  alt="Luna AI Dashboard" 
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;

