import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import liviaImage from '@/assets/livia.jpg';
import maximaCardImage from '@/assets/maxima-card.jpg';

interface ApartmentCardProps {
  id: 'livia' | 'maxima';
  imagePlaceholder: string;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ id, imagePlaceholder }) => {
  const { t } = useLanguage();
  const apartment = t.selection[id];

  return (
    <Link
      to={`/apartment/${id}`}
      className="group relative block w-full overflow-hidden rounded-2xl luxury-border bg-card luxury-shadow transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={id === 'livia' ? liviaImage : maximaCardImage} 
          alt={apartment.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
        
        {/* Floor Badge */}
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          {apartment.floor}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-3xl font-semibold text-foreground mb-1">
          {apartment.name}
        </h3>
        <p className="text-accent font-medium text-sm mb-3">{apartment.tagline}</p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {apartment.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {apartment.features.map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
