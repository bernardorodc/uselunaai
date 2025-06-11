import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const faqItems = [
    {
      question: "Como a Luna protege meus dados financeiros?",
      answer: "A Luna utiliza criptografia de ponta a ponta, protocolos bancários de segurança e servidores blindados para garantir que suas informações estejam 100% protegidas. Seus dados não são vendidos, compartilhados nem expostos — nunca. Você controla tudo."
    },
    {
      question: "Quanto tempo levo para começar a usar a Luna?",
      answer: "Você pode começar a usar a Luna AI em menos de 2 minutos! Você manda uma mensagem, escolhe o plano e recebe no e-mail seu acesso ao dashboard. A partir daí, é só começar a registrar pelo WhatsApp. Simples assim."
    },
    {
      question: "Como a Luna funciona?",
      answer: "Você manda uma mensagem no WhatsApp como: “gastei R$ 30 com comida” E pronto. Luna entende, categoriza e registra automaticamente. Depois, se quiser ver um relatório, gráficos ou detalhes, é só acessar o dashboard. Tudo flui na conversa, como se estivesse falando com uma pessoa."
    },
  
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente! A segurança dos seus dados é nossa prioridade. Utilizamos criptografia avançada, não armazenamos senhas bancárias e seguimos rigorosamente a LGPD. Você tem total controle sobre seus dados e pode solicitar a exclusão a qualquer momento."
    },

    {
      question: "Quais são os benefícios de usar a Luna em vez de um aplicativo financeiro tradicional?",
      answer: "A Luna AI se diferencia por sua simplicidade e inteligência. Enquanto apps tradicionais exigem inserção manual de dados, a Luna automatiza esse processo via WhatsApp. Nossa IA aprende com seus hábitos financeiros para oferecer insights cada vez mais personalizados, economizando seu tempo e ajudando você a tomar decisões financeiras melhores."
   }
    
  ];

  return (
    <section id="faq" className="section">
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
            Tire Suas Dúvidas
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Estamos aqui para ajudar você a entender como a Luna pode transformar sua vida financeira
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="faq-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.05 * (index + 1) }}
            >
              <button
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;

