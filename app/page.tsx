import Image from "next/image";

export default function Home() {
  return (
    <div className="page">
      {/* ===== Header ===== */}
      <header className="header" id="header">
        <div className="logo-container">
          <Image
            src="/asas_logo.png"
            alt="Amrita Visual Media Logo"
            width={160}
            height={40}
            className="logo-image"
            priority
          />
          <div className="logo-text">
            Amrita Visual Media
            <span>Kochi Campus</span>
          </div>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <main className="hero" id="hero">
        {/* Floating decorative shapes */}
        <div className="floating-shapes" aria-hidden="true">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        {/* Decorative grid background */}
        <div className="decorative-grid" aria-hidden="true">
          <svg
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="coming-badge">
            <span className="icon">✨</span>
            Something amazing is brewing
          </div>

          <h1 className="hero-title">
            Coming Soon
          </h1>

          <p className="hero-subtitle">
            We&apos;re crafting a brand new digital experience for Amrita Visual
            Media, Kochi Campus. Stay tuned for something extraordinary that
            will redefine creativity.
          </p>

          <div className="current-events">
            <h2 className="events-heading">Current Events</h2>
            <div className="events-grid">
              <a
                href="https://adc.vmamritakochi.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="event-card"
              >
                <div className="event-content">
                  <span className="event-label">Active</span>
                  <h3 className="event-title">Amrita Design Conclave</h3>
                  <p className="event-description">Joining forces to redefine the future of design and technology.</p>
                  <div className="event-cta">
                    Explore Event
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
