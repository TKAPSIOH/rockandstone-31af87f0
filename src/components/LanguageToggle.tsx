import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 py-2 luxury-border">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-lg scale-110'
            : 'hover:bg-muted'
        }`}
        aria-label="English"
      >
        <span className="text-lg">🇬🇧</span>
      </button>
      <button
        onClick={() => setLanguage('gr')}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          language === 'gr'
            ? 'bg-primary text-primary-foreground shadow-lg scale-110'
            : 'hover:bg-muted'
        }`}
        aria-label="Greek"
      >
        <span className="text-lg">🇬🇷</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
