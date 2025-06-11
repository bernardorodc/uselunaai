import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsBlock = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            +5.000 usuários confiam na Luna AI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">+R$ 450</div>
              <p className="text-white/80">economizados em média por mês</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">+100%</div>
              <p className="text-white/80">de visibilidade sobre suas finanças</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">3 min</div>
              <p className="text-white/80">é o tempo médio de uso diário</p>
            </div>
          </div>
          
          <div className="mt-12">
            <a href="#planos" className="bg-white text-primary font-medium py-3 px-8 rounded-lg hover:bg-white/90 transition-all">
              Começar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsBlock;

