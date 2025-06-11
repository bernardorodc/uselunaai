import { useEffect } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import FeatureHighlights from './components/sections/FeatureHighlights'
import SocialProofStats from './components/sections/SocialProofStats'
import HowItWorks from './components/sections/HowItWorks'
import InputTypes from './components/sections/InputTypes'
import DashboardShowcase from './components/sections/DashboardShowcase'
import PricingSection from './components/sections/PricingSection'
import TestimonialsBlock from './components/sections/TestimonialsBlock'
import FAQAccordion from './components/sections/FAQAccordion'
import CursorEffect from './components/ui/CursorEffect'

function App() {
  // Função para lidar com animações baseadas em scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-up');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar elementos visíveis no carregamento inicial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <CursorEffect />
      <Header />
      <main>
        <HeroSection />
        <SocialProofStats />
        <FeatureHighlights />
        <HowItWorks />
        <InputTypes />
        <DashboardShowcase />
        <TestimonialsBlock />
        <PricingSection />
        <FAQAccordion />
      </main>
      <Footer />
    </>
  )
}

export default App

