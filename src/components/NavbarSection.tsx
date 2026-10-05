import React, { useState } from "react";

const NavbarSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-surface border-b border-outline-variant transition-colors duration-200"
      role="banner"
    >
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
        {/* Brand Logo / Wordmark */}
        <a
          className="text-headline-md font-headline-md tracking-tight text-primary flex items-baseline gap-2"
          href="#top"
          aria-label="Malabar Journeys Kochi — Home"
        >
          <span>Malabar Journeys</span>
          <span className="text-xs font-body-sm text-outline tracking-widest hidden sm:inline uppercase">
            Kochi
          </span>
        </a>

        {/* Desktop Navigation Cluster */}
        <nav
          className="hidden md:flex items-center space-x-8"
          aria-label="Primary navigation"
        >
          <a
            className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-200 whitespace-nowrap"
            href="#fleet"
          >
            Slow Itineraries
          </a>
          <a
            className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-200 whitespace-nowrap"
            href="#fleet"
          >
            Fleet
          </a>
          <a
            className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-200 whitespace-nowrap"
            href="#ethos"
          >
            Our Ethos
          </a>
          <a
            className="text-on-surface-variant hover:text-primary font-body-md text-body-md transition-colors duration-200 whitespace-nowrap"
            href="#enquiry"
          >
            Fort Kochi Guide
          </a>
        </nav>

        {/* Trailing Action & Mobile Drawer Trigger */}
        <div className="flex items-center space-x-3">
          <a
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary-container text-surface font-title-md text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            href="#enquiry"
          >
            Plan my trip
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-outline-variant text-primary hover:bg-surface-container transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <span
              className="material-symbols-outlined text-xl"
              aria-hidden="true"
            >
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className="md:hidden bg-surface border-t border-outline-variant px-6 py-5 space-y-3"
        >
          <a
            href="#tours"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-title-md font-title-md text-primary border-b border-outline-variant/40"
          >
            Slow Itineraries
          </a>
          <a
            href="#fleet"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-body-md font-body-md text-on-surface-variant hover:text-primary border-b border-outline-variant/40"
          >
            Fleet
          </a>
          <a
            href="#ethos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-body-md font-body-md text-on-surface-variant hover:text-primary border-b border-outline-variant/40"
          >
            Our Ethos
          </a>
          <a
            href="#enquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-body-md font-body-md text-on-surface-variant hover:text-primary"
          >
            Fort Kochi Guide
          </a>
        </nav>
      )}
    </header>
  );
};

export default NavbarSection;
