import React from 'react';

interface SectionBannerProps {
  image: string;
  label: string;
  onClick: () => void;
}

const SectionBanner: React.FC<SectionBannerProps> = ({ image, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden group mb-6 block"
    >
      <img
        src={image}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-background/80 backdrop-blur-sm text-foreground px-8 py-3 rounded-full text-lg font-semibold tracking-wide shadow-lg border border-border group-hover:bg-background/90 transition-all">
          {label}
        </span>
      </div>
    </button>
  );
};

export default SectionBanner;
