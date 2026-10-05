import React from 'react';
import { TESTIMONIALS } from '../data/malabarData';

const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="py-24 bg-surface-container-high/60 border-t border-outline-variant/70"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-label-md font-label-md text-secondary tracking-widest uppercase mb-2">
            Guest Reflections
          </p>
          <h2
            id="testimonials-heading"
            className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary"
          >
            Voices from the Road
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.id}
              className="bg-surface p-8 rounded-lg border border-outline-variant/70 flex flex-col justify-between"
              itemScope
              itemType="https://schema.org/Review"
            >
              <p
                className="text-headline-sm font-headline-sm text-primary italic leading-relaxed mb-8"
                itemProp="reviewBody"
              >
                {item.quote}
              </p>
              <div
                className="pt-4 border-t border-outline-variant/50"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <cite
                  className="not-italic text-title-md font-title-md text-primary block"
                  itemProp="name"
                >
                  {item.author}
                </cite>
                <span className="text-body-sm font-body-sm text-outline">
                  {item.location}
                </span>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
