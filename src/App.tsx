/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, Suspense, lazy } from 'react';
import NavbarSection from './components/NavbarSection';
import HeroSection from './components/HeroSection';
import ItinerariesSection from './components/ItinerariesSection';

// Code-split below-the-fold section components for optimal bundle chunking & fast initial page load
const FleetSection = lazy(() => import('./components/FleetSection'));
const EthosSection = lazy(() => import('./components/EthosSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const CtaEnquirySection = lazy(() => import('./components/CtaEnquirySection'));
const FooterSection = lazy(() => import('./components/FooterSection'));

export default function App() {
  const [selectedPreference, setSelectedPreference] = useState('tour-munnar');
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleSelectBookingItem = (optionValue: string, label: string) => {
    setSelectedPreference(optionValue);
    setSelectedLabel(label);
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-background text-on-surface">
      {/* Skip to main content link for keyboard and screen reader accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-primary focus:text-surface focus:font-title-md focus:text-sm"
      >
        Skip to main content
      </a>

      {/* 1. NAVBAR COMPONENT */}
      <NavbarSection />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* 2. HERO COMPONENT */}
        <HeroSection />

        {/* 3. ITINERARIES COMPONENT */}
        <ItinerariesSection onSelectTour={handleSelectBookingItem} />

        {/* 4–7. BELOW-THE-FOLD SECTION COMPONENTS (Code-Split with Suspense) */}
        <Suspense
          fallback={
            <div
              className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center text-body-md text-on-surface-variant"
              aria-busy="true"
            >
              Loading Malabar Garage &amp; Fort Kochi Atelier details…
            </div>
          }
        >
          {/* 4. FLEET COMPONENT */}
          <FleetSection onSelectVehicle={handleSelectBookingItem} />

          {/* 5. ETHOS COMPONENT */}
          <EthosSection />

          {/* 6. TESTIMONIALS COMPONENT */}
          <TestimonialsSection />

          {/* 7. CTA & ENQUIRY COMPONENT */}
          <CtaEnquirySection
            selectedPreference={selectedPreference}
            selectedLabel={selectedLabel}
            onPreferenceChange={(val) => {
              setSelectedPreference(val);
              setSelectedLabel(null);
            }}
          />
        </Suspense>
      </main>

      {/* 8. FOOTER COMPONENT */}
      <Suspense fallback={null}>
        <FooterSection />
      </Suspense>
    </div>
  );
}
