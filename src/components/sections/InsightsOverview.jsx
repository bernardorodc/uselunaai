import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Bell, 
  Lightbulb, 
  Clock 
} from 'lucide-react';

const InsightsOverview = () => {
  const [activeInsight, setActiveInsight] = useState('gastos');
  
  const insights = [
    {
      id: 'gastos',
      icon: <BarChart3 size={24} />,
      title: 'Análise de Gastos',
      description: 'Visualize seus gastos por categoria, período e estabelecimento.'
    },
    {
      id: 'previsoes',
      icon: <TrendingUp size={24} />,
      title: 'Previsões',
      description: 'Projeções inteligentes baseadas no seu histórico financeiro.'
    },
    {
      id: 'metas',
      icon: <Target size={24} />,
      title: 'Metas Financeiras',
      description: 'Defina objetivos e acompanhe seu progresso em tempo real.'
    },
    {
      id: 'alertas',
      icon: <Bell size={24} />,
      title: 'Alertas Inteligentes',
      description: 'Receba notificações sobre gastos excessivos ou oportunidades.'
    },
    {
      id: 'recomendacoes',
      icon: <Lightbulb size={24} />,
      title: 'Recomendações',
      description: 'Dicas personalizadas para melhorar sua saúde financeira.'
    },
    {
      id: 'temporal',
      icon: <Clock size={24} />,
      title: 'Análise Temporal',
      description: 'Compare seu desempenho financeiro ao longo do tempo.'
    }
  ];

  const insightContent = {
    gastos: (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-xl font-bold mb-4">Análise de Gastos</h4>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 size={48} className="mx-auto mb-2 text-primary" />
            <p className="text-gray-500">Gráfico de análise de gastos por categoria</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Visualize seus gastos divididos por categorias, com comparativos mensais e identificação de padrões de consumo.
        </p>
      </div>
    ),
    previsoes: (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-xl font-bold mb-4">Previsões Financeiras</h4>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp size={48} className="mx-auto mb-2 text-primary" />
            <p className="text-gray-500">Gráfico de projeções financeiras</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Projeções inteligentes de gastos e receitas baseadas no seu histórico, ajudando a planejar os próximos meses.
        </p>
      </div>
    ),
    metas: (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-xl font-bold mb-4">Metas Financeiras</h4>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Target size={48} className="mx-auto mb-2 text-primary" />
            <p className="text-gray-500">Visualização de metas e progresso</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Defina objetivos financeiros e acompanhe seu progresso com visualizações claras e motivadoras.
        </p>
      </div>
    ),
    alertas: (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-xl font-bold mb-4">Alertas Inteligentes</h4>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Bell size={48} className="mx-auto mb-2 text-primary" />
            <p className="text-gray-500">Sistema de alertas e notificações</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Receba alertas personalizados sobre gastos excessivos, cobranças duplicadas ou oportunidades de economia.
        </p>
      </div>
    ),
    recomendacoes: (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-xl font-bold mb-4">Recomendações Personalizadas</h4>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Lightbulb size={48} className="mx-auto mb-2 text-primary" />
            <p className="text-gray-500">Insights e recomendações financeiras</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Dicas personalizadas baseadas no seu perfil financeiro para ajudar a economizar e investir melhor.
        </p>
      </div>
    ),
    temporal: (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-xl font-bold mb-4">Análise Temporal</h4>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Clock size={48} className="mx-auto mb-2 text-primary" />
            <p className="text-gray-500">Comparativo de períodos financeiros</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">
          Compare seu desempenho financeiro entre diferentes períodos para identificar tendências e melhorias.
        </p>
      </div>
    )
  };

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
            Análise e Insights Inteligentes
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transforme seus dados em decisões com as ferramentas da Luna AI
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-4">
              <h3 className="text-lg font-semibold mb-4 px-2">Recursos Disponíveis</h3>
              <div className="space-y-2">
                {insights.map((insight) => (
                  <button
                    key={insight.id}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeInsight === insight.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveInsight(insight.id)}
                  >
                    <span className={`mr-3 ${activeInsight === insight.id ? 'text-white' : 'text-primary'}`}>
                      {insight.icon}
                    </span>
                    <div className="text-left">
                      <h4 className="font-medium">{insight.title}</h4>
                      <p className={`text-xs ${
                        activeInsight === insight.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {insight.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="md:col-span-2"
            key={activeInsight}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {insightContent[activeInsight]}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsOverview;

