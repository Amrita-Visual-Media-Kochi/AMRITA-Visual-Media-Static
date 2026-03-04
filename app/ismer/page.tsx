import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import ProgramCard from "../components/ProgramCard";

export default function IsmerPage() {
    const horizontalImages = [
        "/event_img/02b41be3548b79538d7286d9564dffe451f7473a.jpg",
        "/event_img/148bc58a7fdc96e81be366004ff468703ace2f74.jpg",
        "/event_img/20fc772613a89d075b9e730f07633632db274e79.jpg",
        "/event_img/2dada24e83e2c506fe5fb65fed031172be594b5a.jpg",
        "/event_img/3422449f040853691a2c3c300c3555d1e4f8b8b1.jpg",
        "/event_img/37d5e196d9c41fd7290bedda4c21516f37f55e39.jpg",
        "/event_img/5dd8787371c655e26f09a01986c299a1357d8121.jpg",
        "/event_img/62401a768552eadc87a4eec2493d1d24a22996de.jpg",
        "/event_img/8dc08d268ae11ca17b2074b6c851c27ada05ef9e.jpg",
        "/event_img/8f5d6082084e9e90f31a96f79d98b39ef2861035.jpg",
        "/event_img/922332a369bb12e8b679e43e26f3f79c70a385db.jpg",
        "/event_img/bc867210f657e9fcca6244c3eb56a028a5434438.jpg",
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
                <div className="ismer-hero-image">
                    <Image
                        src="/event_img/b6bf358dc1da600f52af2dda18a4162bd4f1cf09.jpg"
                        alt="ISMER Conclave"
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                    />
                </div>
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
                <div className="ismer-secondary-image">
                    <Image
                        src="/event_img/3422449f040853691a2c3c300c3555d1e4f8b8b1.jpg"
                        alt="ISMER Conclave Events"
                        fill
                        sizes="(max-width: 1000px) 100vw, 1000px"
                        style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                    />
                </div>
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

            {/* Horizontal Image Scroll Marquee */}
            <section className="ismer-gallery-section">
                <div className="marquee">
                    <div className="marquee-group">
                        {horizontalImages.map((src, i) => (
                            <div
                                key={i}
                                className="gallery-item"
                                style={{ height: `260px` }}
                            >
                                <Image
                                    src={src}
                                    alt={`Event photo ${i + 1}`}
                                    fill
                                    sizes="380px"
                                    loading="lazy"
                                    style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate group for seamless infinite scrolling */}
                    <div className="marquee-group" aria-hidden="true">
                        {horizontalImages.map((src, i) => (
                            <div
                                key={`dup-${i}`}
                                className="gallery-item"
                                style={{ height: `260px` }}
                            >
                                <Image
                                    src={src}
                                    alt={`Event photo ${i + 1} duplicate`}
                                    fill
                                    sizes="380px"
                                    loading="lazy"
                                    style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
