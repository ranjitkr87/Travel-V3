import React, { useState } from 'react';
import { TOUR_ITINERARIES, TourItinerary } from '../data/malabarData';
import OptimizedImage from './OptimizedImage';

interface ItinerariesSectionProps {
  onSelectTour: (optionValue: string, tourTitle: string) => void;
}

const ItinerariesSection: React.FC<ItinerariesSectionProps> = ({ onSelectTour }) => {
  const [selectedItinerary, setSelectedItinerary] = useState<TourItinerary | null>(null);

  return (
    <section
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      id="tours"
      aria-labelledby="tours-heading"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-outline-variant/60 pb-6">
        <div>
          <p className="text-label-md font-label-md text-secondary tracking-widest uppercase mb-2">
            Curated Journeys
          </p>
          <h2
            id="tours-heading"
            className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary"
          >
            Slow Itineraries
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-body-md font-body-md text-on-surface-variant max-w-md">
          Handcrafted routes paced to mirror the slow tides of Vembanad and the quiet cadence of high-range tea estates.
        </p>
      </div>

      {/* Editorial Bento / Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {TOUR_ITINERARIES.map((tour) => (
          <article
            key={tour.id}
            className={`${tour.colSpan} bg-surface-container-low rounded-lg border border-outline-variant/80 overflow-hidden flex flex-col group hover:border-outline transition-colors`}
            itemScope
            itemType="https://schema.org/TouristTrip"
          >
            <div className={`relative ${tour.aspectRatio} overflow-hidden bg-surface-dim`}>
              <OptimizedImage
                src={tour.imageSrc}
                alt={tour.imageAlt}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm text-primary px-3 py-1 rounded text-label-sm font-label-sm border border-outline-variant">
                {tour.badge}
              </span>
            </div>

            {tour.isLargeCard ? (
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline gap-4 mb-2">
                    <h3
                      className="text-headline-md font-headline-md text-primary"
                      itemProp="name"
                    >
                      {tour.title}
                    </h3>
                    <p
                      className="text-title-md font-title-md text-primary shrink-0 tabular-nums"
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <meta itemProp="priceCurrency" content="INR" />
                      <meta itemProp="price" content={String(tour.priceNumeric)} />
                      {tour.price}
                    </p>
                  </div>
                  <p
                    className={`text-body-md font-body-md text-on-surface-variant ${
                      tour.id === 'munnar-cardamom-hills' ? 'line-clamp-2' : ''
                    } mb-6`}
                    itemProp="description"
                  >
                    {tour.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/50 flex items-center justify-between gap-2">
                  <span className="text-body-sm font-body-sm text-on-surface-variant">
                    {tour.footerMeta}
                  </span>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedItinerary(tour)}
                      className="text-body-sm font-body-sm text-on-surface-variant hover:text-primary transition-colors hidden sm:inline cursor-pointer"
                      aria-label={`Read route notes for ${tour.title}`}
                    >
                      Route notes
                    </button>
                    <a
                      href="#enquiry"
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectTour(tour.optionValue, tour.title);
                      }}
                      className="inline-flex items-center text-primary font-body-md text-body-md hover:text-secondary transition-colors underline underline-offset-4 whitespace-nowrap"
                      aria-label={`View details and enquire about ${tour.title}`}
                    >
                      View details{' '}
                      <span className="material-symbols-outlined ml-1 text-sm" aria-hidden="true">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline gap-2 mb-2">
                    <h3
                      className="text-headline-sm font-headline-sm text-primary"
                      itemProp="name"
                    >
                      {tour.title}
                    </h3>
                    <p
                      className="text-title-md font-title-md text-primary shrink-0 tabular-nums"
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <meta itemProp="priceCurrency" content="INR" />
                      <meta itemProp="price" content={String(tour.priceNumeric)} />
                      {tour.price}
                    </p>
                  </div>
                  <p
                    className="text-body-sm font-body-sm text-on-surface-variant mb-4"
                    itemProp="description"
                  >
                    {tour.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/50 flex items-center justify-between">
                  <a
                    href="#enquiry"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectTour(tour.optionValue, tour.title);
                    }}
                    className="inline-flex items-center text-primary font-body-md text-body-md hover:text-secondary transition-colors underline underline-offset-4 whitespace-nowrap"
                    aria-label={`View details and enquire about ${tour.title}`}
                  >
                    View details{' '}
                    <span className="material-symbols-outlined ml-1 text-sm" aria-hidden="true">
                      arrow_forward
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedItinerary(tour)}
                    className="text-body-sm font-body-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                    aria-label={`Inspect daily route for ${tour.title}`}
                  >
                    Route notes
                  </button>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Accessible Route Detail Drawer / Modal (Rooted Coastal Editorial Level 2 Surface) */}
      {selectedItinerary && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/50 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-itinerary-title"
          onClick={() => setSelectedItinerary(null)}
        >
          <div
            className="bg-surface border border-outline-variant rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-[0_8px_30px_-4px_rgba(31,61,54,0.14)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-outline-variant">
              <div>
                <p className="text-label-sm font-label-sm text-secondary uppercase tracking-widest mb-1">
                  {selectedItinerary.badge}
                </p>
                <h3
                  id="modal-itinerary-title"
                  className="text-headline-md font-headline-md text-primary"
                >
                  {selectedItinerary.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItinerary(null)}
                className="w-9 h-9 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors cursor-pointer"
                aria-label="Close itinerary details"
              >
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  close
                </span>
              </button>
            </div>

            <div className="py-6 space-y-6">
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                {selectedItinerary.description}
              </p>

              {/* Trip Route Timeline as specified in Design System */}
              <div>
                <h4 className="text-label-md font-label-md text-primary uppercase tracking-wider mb-4">
                  Suggested Slow Cadence
                </h4>
                <div className="relative pl-6 border-l border-secondary space-y-5">
                  {selectedItinerary.routeStops.map((stop, idx) => (
                    <div key={idx} className="relative">
                      <span
                        className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <p className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">
                        {stop.day}
                      </p>
                      <p className="text-title-md font-title-md text-primary mt-0.5">
                        {stop.title}
                      </p>
                      <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                        {stop.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rate & Inclusions Table */}
              <div className="bg-surface-container-low rounded border border-outline-variant/80 p-4">
                <div className="flex justify-between items-center pb-3 mb-3 border-b border-outline-variant/60">
                  <span className="text-body-sm font-body-sm text-on-surface-variant">
                    Guideline Tariff (2 Guests)
                  </span>
                  <span className="text-title-md font-title-md text-primary tabular-nums">
                    {selectedItinerary.price}
                  </span>
                </div>
                <ul className="space-y-1.5 text-body-sm font-body-sm text-on-surface-variant">
                  {selectedItinerary.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedItinerary(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-outline-variant text-primary font-body-md text-sm hover:bg-surface-container transition-colors cursor-pointer"
              >
                Close window
              </button>
              <button
                type="button"
                onClick={() => {
                  const val = selectedItinerary.optionValue;
                  const title = selectedItinerary.title;
                  setSelectedItinerary(null);
                  onSelectTour(val, title);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary-container text-surface font-title-md text-sm hover:opacity-95 transition-opacity cursor-pointer"
              >
                Enquire for this route
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ItinerariesSection;
