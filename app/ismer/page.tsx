import Link from "next/link";
import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";

export default function IsmerPage() {
    const horizontalImages = [
        260, 260, 260, 260, 260, 260
    ];

    return (
        <div className="page-container white-canvas-full">
            {/* Header */}
            <header className="ismer-header">
                <Link href="/">
                    <svg className="back-arrow" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </Link>
                <h1>ISMER</h1>
            </header>

            {/* Hero Content */}
            <section className="ismer-content-section">
                <div className="ismer-hero-image placeholder-image"></div>
                <div className="ismer-text-content">
                    <p>
                        The design conclave will be hosted at the Amrita School of Arts and Sciences, Kochi. The campus offers a professional academic setting equipped with seminar halls, presentation infrastructure, and focused discussion spaces.
                    </p>
                    <p>
                        The design conclave will be hosted at the Amrita School of Arts and Sciences, Kochi. The campus offers a professional academic setting equipped with seminar halls, presentation infrastructure, and focused discussion spaces ideal for keynotes, panels, and interactive sessions.
                    </p>
                </div>
            </section>

            {/* Secondary Image */}
            <section className="ismer-secondary-section">
                <div className="ismer-secondary-image placeholder-image"></div>
            </section>

            {/* Why ISMER? */}
            <section className="ismer-why-section">
                <h2>Why ISMER?</h2>
                <div className="ismer-text-content">
                    <p>
                        The design conclave will be hosted at the Amrita School of Arts and Sciences, Kochi. The campus offers a professional academic setting equipped with seminar halls, presentation infrastructure, and focused discussion spaces ideal for keynotes, panels, and interactive sessions. The design conclave will be hosted at the Amrita School of Arts and Sciences, Kochi.
                    </p>
                    <p>
                        The design conclave will be hosted at the Amrita School of Arts and Sciences, Kochi. The campus offers a professional academic setting equipped with seminar halls, presentation infrastructure, and focused discussion spaces ideal for keynotes, panels, and interactive sessions.
                    </p>
                </div>
            </section>

            {/* Horizontal Image Scroll */}
            <section className="ismer-gallery-section">
                <div className="horizontal-gallery">
                    {horizontalImages.map((h, i) => (
                        <div
                            key={i}
                            className="gallery-item placeholder-image"
                            style={{ height: `${h}px` }}
                        ></div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
