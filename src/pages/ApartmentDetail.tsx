import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wifi, Tv, Flame, Snowflake, Clock, Shield, Home, MapPin, Mountain, Compass, Phone, ShoppingCart, ExternalLink, Lightbulb, Map, Heart, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import liviaImage from '@/assets/livia.jpg';
import liviaBuildingImg from '@/assets/livia-building.jpg';
import liviaActivitiesImg from '@/assets/livia-activities.jpg';
import liviaExploreImg from '@/assets/livia-explore.jpg';
import liviaManualImg from '@/assets/livia-manual.jpg';
import iliannaImage from '@/assets/ilianna.jpg';
import SectionBanner from '@/components/SectionBanner';
const ApartmentDetail: React.FC = () => {
  const navigate = useNavigate();
  const {
    t
  } = useLanguage();
  const apartment = t.selection.livia;
  const navItems = [{
    icon: Home,
    label: t.nav.manual,
    section: 'manual'
  }, {
    icon: MapPin,
    label: t.nav.building,
    section: 'building'
  }, {
    icon: Compass,
    label: t.nav.activities,
    section: 'activities'
  }, {
    icon: Mountain,
    label: t.nav.explore,
    section: 'explore'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
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

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <img src={liviaImage} alt={apartment.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
              {apartment.floor}
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground font-sans">
              {apartment.name}
            </h1>
            <p className="text-accent font-medium mt-1">{apartment.tagline}</p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="sticky top-[73px] z-30 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 py-3 overflow-x-auto">
            {navItems.map(item => <button key={item.section} onClick={() => scrollToSection(item.section)} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all whitespace-nowrap">
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>)}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pb-32 max-w-3xl">
        {/* House Manual Section */}
        <SectionBanner image={liviaManualImg} label={t.manual.title} onClick={() => scrollToSection('manual')} />
        <section id="manual" className="mb-16 scroll-mt-36">

          <div className="space-y-6">
            {/* Arrival Notice */}
            <div className="relative overflow-hidden rounded-2xl luxury-border bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 p-6 sm:p-8 animate-fade-in-up">
              <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
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
                <div className="flex-1">
                  <a href="https://wa.me/306987041237" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent hover:bg-gold-light text-accent-foreground px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium text-sm mb-4">
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

            {/* WiFi */}
            <div className="bg-card rounded-2xl p-6 luxury-border luxury-shadow animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-sans">{t.manual.wifi.title}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary rounded-xl p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t.manual.wifi.network}</p>
                  <p className="font-mono font-semibold text-foreground">{t.manual.wifi.networkName}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t.manual.wifi.password}</p>
                  <p className="font-mono font-semibold text-foreground">{t.manual.wifi.passwordValue}</p>
                </div>
              </div>
            </div>

            {/* Appliances */}
            <div className="bg-card rounded-2xl p-6 luxury-border luxury-shadow animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Tv className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-sans">{t.manual.appliances.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.manual.appliances.items.map((item, index) => {
                  return <li key={index} className="flex items-start gap-3 text-muted-foreground font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>;
                })}
              </ul>
            </div>

            {/* Climate - Heating & Cooling */}
            <div className="bg-card rounded-2xl p-6 luxury-border luxury-shadow animate-fade-in-up">
              <h3 className="text-xl font-semibold font-sans mb-6 text-center">{t.manual.climate.title}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Heating */}
                <div className="bg-secondary rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <Flame className="w-5 h-5 text-destructive" />
                    </div>
                    <h4 className="font-semibold font-sans">{t.manual.climate.heating.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm font-sans">
                    {t.manual.climate.heating.description
                        .replace('an eco heating system', 'an underfloor heating system')
                        .replace('ενός οικολογικού συστήματος θέρμανσης', 'του συστήματος ενδοδαπέδιας θέρμανσης')}
                  </p>
                </div>
                {/* Cooling */}
                <div className="bg-secondary rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Snowflake className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold font-sans">{t.manual.climate.cooling.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm font-sans">{t.manual.climate.cooling.description}</p>
                </div>
              </div>
            </div>

            {/* Check-in/out */}
            <div className="bg-card rounded-2xl p-6 luxury-border luxury-shadow animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-sans">{t.manual.checkInOut.title}</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t.manual.checkInOut.checkIn}</p>
                  <p className="font-semibold text-foreground text-lg">{t.manual.checkInOut.checkInTime}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{t.manual.checkInOut.checkOut}</p>
                  <p className="font-semibold text-foreground text-lg">{t.manual.checkInOut.checkOutTime}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">{t.manual.checkInOut.earlyLate}</p>
            </div>

            {/* TrueBlue Standards */}
            <div className="bg-gradient-to-br from-primary to-royal rounded-2xl p-6 text-primary-foreground animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold font-sans">{t.manual.standards.title}</h3>
              </div>
              <ul className="space-y-3">
                {t.manual.standards.items.map((item, index) => <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="opacity-90">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Building Features Section */}
        <SectionBanner image={isMaxima ? maximaBuildingImg : liviaBuildingImg} label={t.building.title} onClick={() => scrollToSection('building')} />
        <section id="building" className="mb-16 scroll-mt-36">

          <div className="space-y-6">
            {/* Parking */}
            <div className="bg-card rounded-2xl p-6 luxury-border luxury-shadow animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-3 font-sans">{t.building.parking.title}</h3>
              <p className="text-muted-foreground mb-4">{t.building.parking.description}</p>
              <div className="bg-secondary rounded-xl p-4">
                <p className="text-sm text-foreground">{t.building.parking.instructions}</p>
              </div>
            </div>

            {/* Legacy */}
            <div className="bg-card rounded-2xl p-6 luxury-border luxury-shadow animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-3 font-sans">{t.building.legacy.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.building.legacy.description}</p>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <SectionBanner image={isMaxima ? maximaActivitiesImg : liviaActivitiesImg} label={t.explore.activities.title} onClick={() => scrollToSection('activities')} />
        <section id="activities" className="mb-16 scroll-mt-36">
          <p className="text-muted-foreground text-center mb-8">{t.explore.activities.subtitle}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {t.explore.activities.list.map((activity, index) => <div key={index} className="bg-card rounded-2xl p-5 luxury-border hover:luxury-shadow transition-all animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-1 font-sans">{activity.name}</h4>
                <p className="text-accent text-sm mb-2">{activity.type}</p>
                <p className="text-muted-foreground text-sm mb-3">{activity.description}</p>
                {activity.link && <a href={activity.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    {t.common.visitWebsite}
                  </a>}
              </div>)}
          </div>

          {/* Important Phone Numbers */}
          <div className="mt-10">
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              {t.explore.phones.title}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {t.explore.phones.list.map((item, index) => <a key={index} href={`tel:${item.phone.replace(/\s/g, '')}`} className="bg-card rounded-xl p-4 luxury-border hover:luxury-shadow transition-all flex items-center justify-between group">
                  <span className="text-foreground font-medium">{item.name}</span>
                  <span className="text-primary group-hover:text-accent transition-colors font-mono text-sm">
                    {item.phone}
                  </span>
                </a>)}
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <SectionBanner image={isMaxima ? maximaExploreImg : liviaExploreImg} label={t.explore.title} onClick={() => scrollToSection('explore')} />
        <section id="explore" className="scroll-mt-36">
          <p className="text-muted-foreground text-center mb-8">{t.explore.subtitle}</p>

          {/* Hiking Routes */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-semibold mb-6">{t.explore.hiking.title}</h3>
            <div className="space-y-6">
              {/* Holy Trinity */}
              <div className="bg-card rounded-2xl p-6 luxury-border luxury-shadow animate-fade-in-up">
                <h4 className="font-display text-xl font-semibold mb-2">{t.explore.hiking.holyTrinity.name}</h4>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                    {t.explore.hiking.holyTrinity.distance}
                  </span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs">
                    {t.explore.hiking.holyTrinity.difficulty}
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                    {t.explore.hiking.holyTrinity.duration}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{t.explore.hiking.holyTrinity.description}</p>
                <div className="bg-primary/5 rounded-xl p-4 mb-4">
                  <p className="text-sm text-foreground">💡 {t.explore.hiking.holyTrinity.tips}</p>
                </div>
                {(t.explore.hiking.holyTrinity as any).link && <a href={(t.explore.hiking.holyTrinity as any).link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    {t.common.trailMap}
                  </a>}
              </div>

              {/* St Stephen */}
              <div className="bg-card rounded-2xl p-6 luxury-border luxury-shadow animate-fade-in-up">
                <h4 className="font-display text-xl font-semibold mb-2">{t.explore.hiking.stStephen.name}</h4>
                <div className="flex flex-wrap gap-3 mb-4">
                  
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    {t.explore.hiking.stStephen.difficulty}
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
                    {t.explore.hiking.stStephen.duration}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{t.explore.hiking.stStephen.description}</p>
                <div className="bg-primary/5 rounded-xl p-4 mb-4">
                  <p className="text-sm text-foreground">💡 {t.explore.hiking.stStephen.tips}</p>
                </div>
                {(t.explore.hiking.stStephen as any).link && <a href={(t.explore.hiking.stStephen as any).link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    {t.common.visitWebsite}
                  </a>}
              </div>
            </div>
          </div>

          {/* Local Tips */}
          <div className="mb-10">
            <h3 className="font-display text-2xl font-semibold mb-2 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-accent" />
              {t.explore.localTips.title}
            </h3>
            <p className="text-muted-foreground mb-6">{t.explore.localTips.subtitle}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.explore.localTips.list.map((item, index) => <div key={index} className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-5 luxury-border animate-fade-in-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-accent">💡</span>
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.tip}</p>
                  {(item as any).link && <a href={(item as any).link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                      <Map className="w-4 h-4" />
                      {t.common.viewOnMap}
                    </a>}
                </div>)}
            </div>
          </div>

          {/* Restaurants */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-2">{t.explore.restaurants.title}</h3>
            <p className="text-muted-foreground mb-6">{t.explore.restaurants.subtitle}</p>
            <div className="space-y-4">
              {t.explore.restaurants.list.map((restaurant, index) => <div key={index} className="bg-card rounded-2xl p-5 luxury-border hover:luxury-shadow transition-all animate-fade-in-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-display text-lg font-semibold">{restaurant.name}</h4>
                      <p className="text-accent text-sm">{restaurant.cuisine}</p>
                    </div>
                    {restaurant.priceRange && <span className="text-muted-foreground font-medium">{restaurant.priceRange}</span>}
                  </div>
                  <p className="text-muted-foreground text-sm">{restaurant.description}</p>
                  {(restaurant as any).link && <a href={(restaurant as any).link} target={(restaurant as any).link.startsWith('tel:') ? undefined : "_blank"} rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors mt-3">
                      {(restaurant as any).link.startsWith('tel:') ? <Phone className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      {(restaurant as any).buttonText || t.common.reservation}
                    </a>}
                </div>)}
            </div>
          </div>

          {/* Grocery & Supermarkets */}
          <div className="mt-10">
            <h3 className="font-display text-2xl font-semibold mb-2 flex items-center gap-3">
              <ShoppingCart className="w-6 h-6 text-accent" />
              {t.explore.grocery.title}
            </h3>
            <p className="text-muted-foreground mb-6">{t.explore.grocery.subtitle}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.explore.grocery.list.map((store, index) => {
                const storeLink = (store as any).link;
                const Tag = storeLink ? 'a' : 'div';
                const linkProps = storeLink ? { href: storeLink, target: "_blank", rel: "noopener noreferrer" } : {};
                return <Tag key={index} {...linkProps} className="bg-card rounded-2xl p-5 luxury-border hover:luxury-shadow transition-all animate-fade-in-up group" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">{store.name}</h4>
                      <p className="text-accent text-sm">{store.type}</p>
                    </div>
                    {storeLink && <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />}
                  </div>
                  <p className="text-muted-foreground text-sm">{store.description}</p>
                </Tag>;
              })}
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default ApartmentDetail;