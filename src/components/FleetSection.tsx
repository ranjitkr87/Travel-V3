import React, { useState } from 'react';
import { FLEET_VEHICLES, FleetVehicle } from '../data/malabarData';
import OptimizedImage from './OptimizedImage';

interface FleetSectionProps {
  onSelectVehicle: (optionValue: string, vehicleTitle: string) => void;
}

type CategoryFilter = 'all' | FleetVehicle['category'];

const FILTER_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Vehicles' },
  { id: 'bikes', label: 'Bikes & Scooters' },
  { id: 'sedans', label: 'Sedans' },
  { id: 'suvs', label: 'Luxury SUVs' },
  { id: 'caravans', label: 'Caravans' },
  { id: 'buses', label: 'Buses & Coaches' }
];

const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredVehicles =
    activeCategory === 'all'
      ? FLEET_VEHICLES
      : FLEET_VEHICLES.filter((item) => item.category === activeCategory);

  return (
    <section
      className="py-24 bg-surface-container border-y border-outline-variant/70"
      id="fleet"
      aria-labelledby="fleet-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-label-md font-label-md text-secondary tracking-widest uppercase mb-2">
              The Malabar Garage
            </p>
            <h2
              id="fleet-heading"
              className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary"
            >
              Our Fleet
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-body-md font-body-md text-on-surface-variant max-w-md">
            Well-maintained machines tuned for Malabar roads. Available with certified native chauffeurs or curated self-drive arrangements.
          </p>
        </div>

        {/* Segmented Category Filter Tabs */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-outline-variant/60"
          role="tablist"
          aria-label="Filter fleet vehicles by category"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="fleet-container"
                onClick={() => setActiveCategory(tab.id)}
                className={`fleet-tab px-4 py-2 rounded text-label-md font-label-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-primary-container text-surface'
                    : 'bg-surface text-on-surface-variant hover:text-primary border border-outline-variant/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Fleet Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="fleet-container"
          role="tabpanel"
          aria-live="polite"
        >
          {filteredVehicles.map((vehicle) => (
            <article
              key={vehicle.id}
              data-category={vehicle.category}
              className="fleet-item bg-surface-container-lowest rounded-lg border border-outline-variant p-6 flex flex-col justify-between"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded bg-surface-dim mb-5">
                  <OptimizedImage
                    src={vehicle.imageSrc}
                    alt={vehicle.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-label-sm font-label-sm bg-surface-container text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">
                      {vehicle.icon}
                    </span>{' '}
                    {vehicle.badgeText}
                  </span>
                  <span className="text-body-sm font-body-sm text-secondary font-medium">
                    {vehicle.tagText}
                  </span>
                </div>
                <h3
                  className="text-headline-sm font-headline-sm text-primary mb-1"
                  itemProp="name"
                >
                  {vehicle.title}
                </h3>
                <p
                  className="text-body-sm font-body-sm text-on-surface-variant mb-6"
                  itemProp="description"
                >
                  {vehicle.description}
                </p>
              </div>
              <div
                className="pt-4 border-t border-outline-variant/60 flex items-center justify-between"
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                {vehicle.priceNumeric && (
                  <>
                    <meta itemProp="priceCurrency" content="INR" />
                    <meta itemProp="price" content={String(vehicle.priceNumeric)} />
                  </>
                )}
                <span className="text-title-md font-title-md text-primary tabular-nums">
                  {vehicle.priceMain}{' '}
                  <span className="text-body-sm font-body-sm text-on-surface-variant">
                    {vehicle.priceUnit}
                  </span>
                </span>
                <a
                  href="#enquiry"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectVehicle(vehicle.optionValue, vehicle.title);
                  }}
                  className="inline-flex items-center text-primary font-body-md text-body-md hover:text-secondary underline underline-offset-4 whitespace-nowrap"
                  aria-label={`Check availability for ${vehicle.title}`}
                >
                  Check availability →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
