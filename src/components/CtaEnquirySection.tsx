import React, { useState, useEffect } from 'react';

interface CtaEnquirySectionProps {
  selectedPreference: string;
  selectedLabel?: string | null;
  onPreferenceChange: (val: string) => void;
}

const CtaEnquirySection: React.FC<CtaEnquirySectionProps> = ({
  selectedPreference,
  selectedLabel,
  onPreferenceChange
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [dates, setDates] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    dates: string;
    preferenceLabel: string;
    referenceId: string;
  } | null>(null);

  useEffect(() => {
    if (selectedLabel) {
      setSubmittedData(null);
    }
  }, [selectedPreference, selectedLabel]);

  const preferenceLabels: Record<string, string> = {
    'tour-munnar': 'Munnar & Cardamom Hills (3 Days)',
    'tour-alleppey': 'Vembanad & Alleppey Houseboat (2 Nights)',
    'tour-wayanad': 'Wayanad Rainforest & Coffee Trails',
    'tour-kochi': 'Fort Kochi Heritage Walk',
    'tour-marari': 'Marari Coastline & Village Drift',
    'fleet-bike': 'Self-Drive Enfield Hunter 350',
    'fleet-sedan': 'Toyota Etios & Maruti Ciaz with Chauffeur',
    'fleet-innova': 'Toyota Innova Crysta with Chauffeur',
    'fleet-camper': 'Custom Campervan',
    bespoke: 'Bespoke Multi-Week Itinerary'
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const refNumber = `MJ-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedData({
      name: fullName.trim(),
      phone: phone.trim(),
      dates: dates.trim() || 'Flexible dates',
      preferenceLabel: preferenceLabels[selectedPreference] || 'Custom Kerala Journey',
      referenceId: refNumber
    });
  };

  return (
    <section
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      id="enquiry"
      aria-labelledby="enquiry-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact details & WhatsApp strip */}
        <div className="lg:col-span-5 bg-surface-container rounded-lg p-8 md:p-10 border border-outline-variant">
          <p className="text-label-md font-label-md text-secondary tracking-widest uppercase mb-2">
            Fort Kochi Atelier
          </p>
          <h2
            id="enquiry-heading"
            className="text-headline-md font-headline-md text-primary mb-4"
          >
            Start your conversation
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mb-8 leading-relaxed">
            Tell us about the tempo of your journey, whether you require a private car and chauffeur for a week, or a self-drive Enfield for coastal wanders.
          </p>

          {/* Direct Contacts */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 rounded bg-surface border border-outline-variant/60">
              <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">
                call
              </span>
              <div>
                <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
                  Direct Dispatch
                </p>
                <a
                  className="text-title-md font-title-md text-primary hover:text-secondary transition-colors tabular-nums"
                  href="tel:+914842218940"
                >
                  +91 484 221 8940
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded bg-surface border border-outline-variant/60">
              <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">
                mail
              </span>
              <div>
                <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
                  Atelier Mail
                </p>
                <a
                  className="text-body-md font-body-md text-primary hover:text-secondary transition-colors break-all"
                  href="mailto:voyages@malabarjourneys.com"
                >
                  voyages@malabarjourneys.com
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Quick Connect */}
          <a
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-primary-container text-primary font-title-md text-sm hover:bg-primary-container hover:text-surface transition-colors"
            href="https://wa.me/914842218940"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">
              chat
            </span>
            Message on WhatsApp
          </a>
        </div>

        {/* Right Column: Enquiry Form */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-lg p-8 md:p-10 border border-outline-variant">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="text-headline-sm font-headline-sm text-primary">
              Travel Enquiry
            </h3>
            {selectedLabel && !submittedData && (
              <span className="text-label-sm font-label-sm text-secondary">
                Selected: {selectedLabel}
              </span>
            )}
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant mb-8">
            We answer every enquiry personally within six working hours.
          </p>

          {submittedData ? (
            <div
              className="bg-surface border border-outline-variant rounded-lg p-6 md:p-8 space-y-5"
              role="status"
              aria-live="polite"
            >
              <div className="flex items-start justify-between gap-4 border-b border-outline-variant/60 pb-4">
                <div>
                  <p className="text-label-sm font-label-sm text-secondary uppercase tracking-widest mb-1">
                    Dispatch Log · {submittedData.referenceId}
                  </p>
                  <h4 className="text-headline-sm font-headline-sm text-primary">
                    Thank you, {submittedData.name}.
                  </h4>
                </div>
                <span
                  className="material-symbols-outlined text-primary text-2xl"
                  aria-hidden="true"
                >
                  verified
                </span>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Our Fort Kochi desk has logged your request for{' '}
                <strong className="text-primary font-medium">
                  {submittedData.preferenceLabel}
                </strong>{' '}
                ({submittedData.dates}). A route curator will reach out to{' '}
                <span className="text-primary tabular-nums">{submittedData.phone}</span> within six working hours.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedData(null);
                    setFullName('');
                    setPhone('');
                    setDates('');
                    setNotes('');
                  }}
                  className="px-5 py-2.5 rounded-lg border border-outline-variant text-primary font-body-md text-sm hover:bg-surface-container transition-colors cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-label-md font-label-md text-primary mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md text-primary placeholder:text-outline/70 focus:border-primary focus:outline-none transition-colors"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Siobhan Nair"
                    required
                    autoComplete="name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-label-md font-label-md text-primary mb-2"
                    htmlFor="phone"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md text-primary placeholder:text-outline/70 focus:border-primary focus:outline-none transition-colors"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    autoComplete="tel"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-label-md font-label-md text-primary mb-2"
                    htmlFor="dates"
                  >
                    Travel Dates or Month
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md text-primary placeholder:text-outline/70 focus:border-primary focus:outline-none transition-colors"
                    id="dates"
                    name="dates"
                    placeholder="e.g. Nov 14 – Nov 22"
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-label-md font-label-md text-primary mb-2"
                    htmlFor="preference"
                  >
                    Choice of Tour or Vehicle
                  </label>
                  <select
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md text-primary focus:border-primary focus:outline-none transition-colors"
                    id="preference"
                    name="preference"
                    value={selectedPreference}
                    onChange={(e) => onPreferenceChange(e.target.value)}
                  >
                    <option value="tour-munnar">Munnar &amp; Cardamom Hills (3 Days)</option>
                    <option value="tour-alleppey">Vembanad &amp; Alleppey Houseboat (2 Nights)</option>
                    <option value="tour-wayanad">Wayanad Rainforest &amp; Coffee Trails</option>
                    <option value="tour-kochi">Fort Kochi Heritage Walk</option>
                    <option value="tour-marari">Marari Coastline &amp; Village Drift</option>
                    <option value="fleet-bike">Self-Drive Enfield Hunter 350</option>
                    <option value="fleet-sedan">Toyota Etios &amp; Maruti Ciaz with Chauffeur</option>
                    <option value="fleet-innova">Toyota Innova Crysta with Chauffeur</option>
                    <option value="fleet-camper">Custom Campervan</option>
                    <option value="bespoke">Bespoke Multi-Week Itinerary</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-label-md font-label-md text-primary mb-2"
                  htmlFor="notes"
                >
                  Special Requests or Pace Preference
                </label>
                <textarea
                  className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md font-body-md text-primary placeholder:text-outline/70 focus:border-primary focus:outline-none transition-colors"
                  id="notes"
                  name="notes"
                  placeholder="Tell us if you prefer quiet homestays, birdwatching spots, or slow coastal back-roads..."
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <button
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary-container text-surface font-title-md text-sm hover:opacity-95 transition-opacity cursor-pointer"
                type="submit"
              >
                Send travel enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaEnquirySection;
