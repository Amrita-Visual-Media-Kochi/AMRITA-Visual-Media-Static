import Image from "next/image";
import Link from "next/link";

export default function ProgramCard({
    imgSrc,
    badgeType,
    badgeText,
    title,
    description,
    size,
    href,
}: {
    imgSrc?: string;
    imageClass?: string; /* keeping for backwards compat */
    badgeType: "active" | "coming-soon" | "explore";
    badgeText: string;
    title: string;
    description: string;
    size?: "large";
    href?: string;
}) {
    const cardContent = (
        <>
            <div className={`card-image ${!imgSrc && typeof imageClass !== 'undefined' ? imageClass : ''}`}>
                {imgSrc && (
                    <Image
                        src={imgSrc}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                    />
                )}
            </div>
            <div className="card-content">
                <span className={`badge ${badgeType}`}>{badgeText}</span>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={`card ${size === "large" ? "card-large" : ""}`} style={{ textDecoration: 'none' }}>
                {cardContent}
            </Link>
        );
    }

    return (
        <div className={`card ${size === "large" ? "card-large" : ""}`}>
            {cardContent}
        </div>
    );
}
