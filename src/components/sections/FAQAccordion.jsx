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
      answer: "A Luna AI utiliza criptografia de ponta a ponta para proteger seus dados financeiros. Não armazenamos suas credenciais bancárias e seguimos rigorosamente a LGPD. Além disso, contamos com certificação SSL para garantir a segurança de todas as comunicações."
    },
    {
      question: "Quanto tempo levo para começar a usar a Luna?",
      answer: "Você pode começar a usar a Luna AI em menos de 2 minutos! Basta se cadastrar e começar a enviar seus comprovantes por foto ou texto via WhatsApp. Nossa IA faz todo o trabalho de categorização e organização para você."
    },
    {
      question: "Como a Luna funciona?",
      answer: "A Luna AI é uma assistente financeira que utiliza inteligência artificial para analisar seus gastos e receitas. Você pode enviar comprovantes por foto, áudio ou texto via WhatsApp, e nossa IA categoriza automaticamente suas transações, gerando relatórios e insights personalizados."
    },
    {
      question: "Preciso pagar para usar a Luna?",
      answer: "Não! A Luna AI oferece um plano Essencial totalmente gratuito e sem limitações de tempo. Este plano inclui todas as funcionalidades básicas para controle financeiro. Para recursos avançados, oferecemos o plano Premium que estará disponível em breve."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente! A segurança dos seus dados é nossa prioridade. Utilizamos criptografia avançada, não armazenamos senhas bancárias e seguimos rigorosamente a LGPD. Você tem total controle sobre seus dados e pode solicitar a exclusão a qualquer momento."
    },
    {
      question: "Quais são os benefícios de usar a Luna em vez de um aplicativo financeiro tradicional?",
      answer: "A Luna AI se diferencia por sua simplicidade e inteligência. Enquanto apps tradicionais exigem inserção manual de dados, a Luna automatiza esse processo via WhatsApp. Nossa IA aprende com seus hábitos financeiros para oferecer insights cada vez mais personalizados, economizando seu tempo e ajudando você a tomar decisões financeiras melhores."
    },
    {
      question: "Posso sincronizar minhas contas bancárias?",
      answer: "A sincronização automática com bancos estará disponível em breve no plano Premium. Por enquanto, você pode importar extratos bancários em formato PDF ou CSV no plano Essencial gratuito."
    },
    {
      question: "A Luna me ajuda a criar metas financeiras?",
      answer: "Sim! A Luna AI oferece dicas financeiras personalizadas no plano gratuito. A funcionalidade de metas financeiras personalizadas estará disponível em breve, permitindo que você defina objetivos específicos e receba um plano detalhado para alcançá-los."
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

