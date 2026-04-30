import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Heart, Home, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import ApartmentCard from '@/components/ApartmentCard';
import iliannaImage from '@/assets/ilianna.jpg';
const ApartmentSelection: React.FC = () => {
  const navigate = useNavigate();
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{t.nav.back}</span>
          </button>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pb-24">
        {/* Title Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-3">
            {t.selection.title}
          </h1>
          <p className="text-muted-foreground font-body">
            {t.selection.subtitle}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Arrival Notice Card */}
        <div className="max-w-4xl mx-auto mb-10 animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl luxury-border bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 p-6 sm:p-8">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              {/* Ilianna's Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg">
                    <img src={iliannaImage} alt="Ilianna" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <a
                  href="https://wa.me/306987041237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium text-sm mb-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.selection.arrivalNotice.shareArrival}
                </a>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {t.selection.arrivalNotice.title}
                  <Heart className="w-5 h-5 text-accent fill-accent/30" />
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {t.selection.arrivalNotice.message}
                </p>
                <p className="text-foreground font-medium">
                  {t.selection.arrivalNotice.closing}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Choose Apartment Card */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent p-6 luxury-shadow">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative gap-4 flex items-center justify-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Home className="w-6 h-6 text-accent-foreground" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-accent-foreground">
                {t.selection.chooseApartment}
              </h2>
            </div>
          </div>
        </div>

        {/* Apartment Cards */}
        <div className="grid gap-8 max-w-md mx-auto">
          <div className="animate-fade-in-up" style={{
          animationDelay: '0.1s'
        }}>
            <ApartmentCard id="livia" imagePlaceholder="Livia Apartment Image" />
          </div>
        </div>
      </main>
    </div>;
};
export default ApartmentSelection;