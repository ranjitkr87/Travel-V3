import React from 'react';
import { ETHOS_POINTS } from '../data/malabarData';

const EthosSection: React.FC = () => {
  return (
    <section
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      id="ethos"
      aria-labelledby="ethos-heading"
    >
      <div className="max-w-2xl mb-16">
        <p className="text-label-md font-label-md text-secondary tracking-widest uppercase mb-2">
          Ethos &amp; Craft
        </p>
        <h2
          id="ethos-heading"
          className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary"
        >
          Why travel with Malabar Journeys
        </h2>
        <p className="mt-4 text-body-md font-body-md text-on-surface-variant">
          We are a small, intentional garage team based beside the spice godowns of Fort Kochi. We favor quiet roads over packed expressways.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ETHOS_POINTS.map((point) => (
          <div
            key={point.id}
            className="p-8 rounded-lg bg-surface-container-low border border-outline-variant/70 flex flex-col justify-start"
          >
            <div
              className="w-12 h-12 rounded border border-outline-variant flex items-center justify-center text-primary mb-6 bg-surface"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined text-2xl">{point.icon}</span>
            </div>
            <h3 className="text-headline-sm font-headline-sm text-primary mb-3">
              {point.title}
            </h3>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EthosSection;
