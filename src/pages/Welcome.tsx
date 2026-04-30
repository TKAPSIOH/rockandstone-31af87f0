import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import heroRoomImage from '@/assets/hero-room.jpg';
import trueBlueLogo from '@/assets/trueblue-logo.png';
const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const {
    t
  } = useLanguage();
  return <div className="relative min-h-screen flex flex-col">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
        src={heroRoomImage}
        alt="Rock & Stone stone living room"
        className="w-full h-full object-cover" />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Header with language toggle and logo placeholder */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-3">
          <img src={trueBlueLogo} alt="TrueBlue Logo" className="h-10 w-auto" />
        </div>
        <LanguageToggle />
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-light text-primary-foreground mb-4 animate-fade-in-up">
          {t.welcome.title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-accent font-body mb-2 animate-fade-in text-5xl" style={{
        animationDelay: '0.2s'
      }}>
          {t.welcome.subtitle}
        </p>
        
        {/* Motto */}
        <p className="text-primary-foreground/70 font-body italic mb-12 animate-fade-in text-xl" style={{
        animationDelay: '0.3s'
      }}>
          "{t.welcome.motto}"
        </p>

        {/* CTA Button */}
        <button onClick={() => navigate('/apartment/livia')} className="group relative bg-accent hover:bg-gold-light text-accent-foreground px-10 py-4 rounded-full font-body font-semibold text-lg transition-all duration-300 hover:scale-105 luxury-shadow animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          {t.welcome.cta}
          <ChevronDown className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" />
        </button>
      </main>

      {/* Footer decoration */}
      <div className="relative z-10 h-32 flex items-end justify-center pb-8">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-primary-foreground/30" />)}
        </div>
      </div>
    </div>;
};
export default Welcome;