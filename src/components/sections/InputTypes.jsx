import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, Camera, FileText } from 'lucide-react';

const InputTypes = () => {
  const inputTypes = [
    {
      icon: <MessageSquare size={32} className="text-primary" />,
      title: 'Texto',
      description: 'Envie mensagens de texto simples com seus gastos e receitas.',
      emoji: '💬'
    },
    {
      icon: <Mic size={32} className="text-primary" />,
      title: 'Áudio',
      description: 'Grave áudios descrevendo suas transações financeiras.',
      emoji: '🎙️'
    },
    {
      icon: <Camera size={32} className="text-primary" />,
      title: 'Imagem da nota',
      description: 'Tire fotos de notas fiscais e recibos para registro automático.',
      emoji: '📸'
    },
    {
      icon: <FileText size={32} className="text-primary" />,
      title: 'PDF',
      description: 'Importe extratos bancários.',
      emoji: '📄'
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
            Registre do Seu Jeito
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A Luna AI entende diversos formatos de mensagens e intenções, para facilitar ainda mais o seu dia a dia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            {inputTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    {type.icon}
                  </div>
                  <span className="text-2xl">{type.emoji}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
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
                  <p className="text-sm">Oie, bom dia! Como posso ajudar hoje?</p>
                </div>
                
                <div className="bg-gray-200 rounded-lg p-3 max-w-[80%] ml-auto">
                  <p className="text-sm">Gastei 25 reais com uber</p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">A transação foi adicionada com sucesso! 🚗 Você gastou R$25,00 com Uber. Se precisar de mais alguma coisa, é só avisar!.</p>
                </div>
                
                <div className="bg-gray-200 rounded-lg p-3 max-w-[80%] ml-auto">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-2" />
                    <p className="text-sm">extrato_maio_2025.pdf</p>
                  </div>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Extrato importado com sucesso! Identifiquei 28 transações no período de 01/05 a 31/05. Deseja ver um resumo das categorias?</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InputTypes;

