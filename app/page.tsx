import Image from "next/image";
import Footer from "./components/Footer";
import ProgramCard from "./components/ProgramCard";

export default function Home() {
  const masonryHeights = [
    240, 240, 240, 320, 160, 240, 240, 240, 240, 240, 160, 320
  ];

  return (
    <div className="page-container">
      {/* ===== Header ===== */}
      <header className="site-header">
        <Image
          src="/asas_logo.png"
          alt="Amrita Logo"
          width={120}
          height={40}
          className="header-logo"
        />
      </header>

      {/* ===== Hero Section ===== */}
      <section className="hero-section">
        <h1 className="hero-title">
          Department <span className="italic-purple">of</span>
          <br />
          Visual Media
        </h1>
        <p className="hero-subtitle">
          Exploring storytelling, design, media, and visual culture through academic practice and industry engagement.
        </p>

        <div className="hero-cards-wrapper">
          <div className="hero-cards">
            <ProgramCard
              href="https://adc.vmamritakochi.in/"
              size="large"
              imgSrc="/header/adc.png"
              badgeType="active"
              badgeText="Active"
              title="Amrita design conclave"
              description="Exploring storytelling, design, media, and visual culture through academic practice and industry engagement."
            />
            <ProgramCard
              href="/ismer"
              imgSrc="/header/ismer.jpg"
              badgeType="coming-soon"
              badgeText="Coming soon"
              title="ISMER"
              description="Exploring storytelling, design, media, and visual culture through academic practice and industry engagement."
            />
          </div>
        </div>
      </section>

      {/* ===== White Canvas Wrapper ===== */}
      <div className="white-canvas">
        {/* ===== Glimpses Section ===== */}
        <section className="glimpses-section">
          <h2 className="section-title">Glimpses of Past Events</h2>
          <div className="masonry-grid">
            {masonryHeights.map((h, i) => (
              <div
                key={i}
                className="masonry-item placeholder-image"
                style={{ height: `${h}px` }}
              ></div>
            ))}
          </div>
        </section>

        {/* ===== About Section ===== */}
        <section className="about-section">
          <div className="about-content">
            <h2>At Amrita Vishwa Vidyapeetham,<br />Kochi</h2>
            <p>
              The design conclave will be hosted at the Amrita School of Arts and
              Sciences, Kochi. The campus offers a professional academic
              setting equipped with seminar halls, presentation infrastructure,
              and focused discussion spaces ideal for keynotes, panels, and
              interactive sessions.
            </p>
            <button className="btn-primary black-btn">Get Directions</button>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image">
              <Image src="/amrita-campus.jpg" alt="Amrita Campus" width={800} height={500} className="object-cover w-full h-full rounded-xl" />
            </div>
          </div>
        </section>

        {/* ===== Blogs Section ===== */}
        <section className="blogs-section">
          <h2 className="section-title">Blogs & Headlines</h2>
          <div className="blogs-grid">
            <div className="blog-card">
              <div className="blog-image">
                <Image src="/blogs/1.png" alt="Blog 1" width={400} height={320} className="object-cover w-full h-full" />
              </div>
              <div className="blog-content">
                <p>Lorem ipsum dolor sit amet,<br />consectetur</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <Image src="/blogs/2.jpg" alt="Blog 2" width={400} height={320} className="object-cover w-full h-full" />
              </div>
              <div className="blog-content">
                <p>Lorem ipsum dolor sit amet,<br />consectetur</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <Image src="/blogs/3.png" alt="Blog 3" width={400} height={320} className="object-cover w-full h-full" />
              </div>
              <div className="blog-content">
                <p>Lorem ipsum dolor sit amet,<br />consectetur</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <Image src="/blogs/4.png" alt="Blog 4" width={400} height={320} className="object-cover w-full h-full" />
              </div>
              <div className="blog-content">
                <p>Lorem ipsum dolor sit amet,<br />consectetur</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}
