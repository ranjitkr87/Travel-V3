import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer
      className="bg-surface-container border-t border-outline-variant transition-colors duration-200"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-12 py-12 max-w-7xl mx-auto gap-8">
        {/* Brand & Address Details */}
        <div
          className="space-y-3"
          itemScope
          itemType="https://schema.org/TravelAgency"
        >
          <a
            className="text-headline-md font-headline-md text-primary inline-block"
            href="#top"
            itemProp="name"
          >
            Malabar Journeys
          </a>
          <address
            className="not-italic text-body-sm font-body-sm text-on-surface-variant max-w-sm"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="streetAddress">Calvathy Road, Near Old Customs Jetty</span>,{' '}
            <span itemProp="addressLocality">Fort Kochi</span>,{' '}
            <span itemProp="addressRegion">Kerala</span>{' '}
            <span itemProp="postalCode">682001</span>,{' '}
            <span itemProp="addressCountry">India</span>.
          </address>
          <p className="text-body-sm font-body-sm text-outline">
            Garage &amp; Desk: <time itemProp="openingHours" content="Mo-Su 06:00-22:00">06:00 – 22:00 IST daily</time>
          </p>
        </div>

        {/* Links Cluster */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 text-body-sm font-body-sm text-on-surface-variant"
        >
          <a className="hover:text-secondary transition-colors duration-150" href="#fleet">
            Fleet Directory
          </a>
          <a className="hover:text-secondary transition-colors duration-150" href="#ethos">
            Private Chauffeur Service
          </a>
          <a className="hover:text-secondary transition-colors duration-150" href="#tours">
            Slow Travel Routes
          </a>
          <a className="hover:text-secondary transition-colors duration-150" href="#enquiry">
            Bespoke Bookings
          </a>
          <a className="hover:text-secondary transition-colors duration-150" href="#ethos">
            Atelier Heritage
          </a>
          <a className="hover:text-secondary transition-colors duration-150" href="#ethos">
            Environmental Ledger
          </a>
          <a className="hover:text-secondary transition-colors duration-150" href="#enquiry">
            Privacy &amp; Terms
          </a>
        </nav>
      </div>

      {/* Copyright Sub-bar */}
      <div className="border-t border-outline-variant/40 py-6 px-6 md:px-12 max-w-7xl mx-auto text-left md:text-center text-body-sm font-body-sm text-outline">
        © 2024 Malabar Journeys Atelier. Rooted in Fort Kochi, Kerala. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
