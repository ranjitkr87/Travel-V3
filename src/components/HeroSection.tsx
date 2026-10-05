import React from 'react';
import { HERO_IMAGE } from '../data/malabarData';
import OptimizedImage from './OptimizedImage';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary-container text-surface"
      aria-labelledby="hero-heading"
    >
      {/* Hero Image Layer */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={HERO_IMAGE}
          alt="Kerala serene backwater at dusk with traditional kettuvallam wooden boat"
          priority={true}
          className="w-full h-full object-cover opacity-65 scale-105 motion-safe:transition-transform duration-1000"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Editorial Hero Content Block */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center py-20 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded border border-surface/30 bg-surface/10 backdrop-blur-sm mb-6">
          <span
            className="w-1.5 h-1.5 rounded-full bg-secondary-container"
            aria-hidden="true"
          />
          <span className="text-label-sm font-label-sm uppercase tracking-widest text-surface">
            Atelier de Voyage · Fort Kochi
          </span>
        </div>

        <h1
          id="hero-heading"
          className="text-display-lg-mobile md:text-display-lg font-display-lg text-surface max-w-3xl leading-tight"
        >
          Kerala, at your own pace.
        </h1>

        <p className="mt-6 text-body-lg font-body-lg text-surface/90 max-w-2xl text-center leading-relaxed">
          Independent journeys across backwaters, spice hills, and coastal roads, with private chauffeurs or self-drive rentals from Fort Kochi.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <a
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-secondary text-surface font-title-md text-sm hover:opacity-95 transition shadow-sm text-center"
            href="#tours"
          >
            Explore tours
          </a>
          <a
            className="inline-flex items-center text-surface underline underline-offset-8 decoration-surface/50 hover:decoration-surface font-body-md text-body-md transition-colors"
            href="#fleet"
          >
            View our fleet
            <span
              className="material-symbols-outlined ml-1.5 text-base"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
