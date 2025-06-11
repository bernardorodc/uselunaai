import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

const LunaAssistant = () => {
  const [activeScenario, setActiveScenario] = useState('gastos');
  
  const scenarios = {
    gastos: {
      title: "Controle de Gastos",
      conversation: [
        { type: "user", text: "Quanto gastei com alimentação este mês?" },
        { type: "assistant", text: "Você gastou R$ 850,32 com alimentação em junho, o que representa 23% do seu orçamento mensal. Isso é 12% a menos que no mês passado!" },
        { type: "user", text: "Qual foi meu maior gasto?" },
        { type: "assistant", text: "Seu maior gasto foi R$ 320,50 no Supermercado Extra no dia 15/06. Quer ver um detalhamento completo da categoria alimentação?" }
      ]
    },
    viagens: {
      title: "Planejamento de Viagens",
      conversation: [
        { type: "user", text: "Quero economizar R$ 3.000 para uma viagem em dezembro" },
        { type: "assistant", text: "Para economizar R$ 3.000 até dezembro, você precisará guardar R$ 500 por mês. Com base nos seus gastos atuais, posso sugerir reduzir R$ 200 em delivery e R$ 300 em entretenimento. Isso é viável para você?" },
        { type: "user", text: "Sim, crie essa meta para mim" },
        { type: "assistant", text: "Ótimo! Criei a meta 'Viagem de Dezembro' com economia mensal de R$ 500. Vou te enviar lembretes semanais e sugestões de economia. Você já tem 16% da meta concluída com suas economias atuais!" }
      ]
    },
    contas: {
      title: "Gestão de Contas",
      conversation: [
        { type: "user", text: "Quais contas vencem essa semana?" },
        { type: "assistant", text: "Você tem 3 contas para pagar esta semana: Aluguel (R$ 1.200) vence amanhã, Internet (R$ 120) vence em 3 dias, e Energia (R$ 230) vence em 5 dias. Total: R$ 1.550." },
        { type: "user", text: "Tenho saldo suficiente?" },
        { type: "assistant", text: "Sim! Você tem R$ 2.800 disponível na sua conta principal. Após o pagamento dessas contas, você ainda terá R$ 1.250 disponíveis. Quer que eu agende esses pagamentos?" }
      ]
    },
    investimentos: {
      title: "Análise de Investimentos",
      conversation: [
        { type: "user", text: "Como estão meus investimentos este mês?" },
        { type: "assistant", text: "Seus investimentos tiveram rendimento de 0,8% este mês, totalizando R$ 240. Seu fundo de emergência está completo (R$ 12.000) e seus investimentos de longo prazo estão crescendo conforme o planejado." },
        { type: "user", text: "Tenho dinheiro para investir mais?" },
        { type: "assistant", text: "Analisando seu fluxo de caixa, você pode investir mais R$ 400 este mês sem comprometer suas despesas. Recomendo aumentar sua posição em renda fixa, considerando seus objetivos de médio prazo." }
      ]
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como a Luna AI Pode Te Ajudar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experimente diferentes cenários e veja como a Luna simplifica sua vida financeira
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Escolha um cenário:</h3>
              
              <div className="space-y-3">
                {Object.keys(scenarios).map((key) => (
                  <button
                    key={key}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeScenario === key
                        ? "bg-[var(--luna-green)] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveScenario(key)}
                  >
                    {scenarios[key].title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col">
              <div className="bg-[var(--luna-green)] text-white p-4">
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  <h3 className="font-medium">Luna AI - {scenarios[activeScenario].title}</h3>
                </div>
              </div>
              
              <div className="flex-grow p-4 overflow-y-auto space-y-4" style={{ minHeight: "320px" }}>
                {scenarios[activeScenario].conversation.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.type === "user"
                          ? "bg-blue-100 text-gray-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 p-4">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--luna-green)]"
                    disabled
                  />
                  <button className="bg-[var(--luna-green)] text-white rounded-r-lg px-4 py-2">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LunaAssistant;

