import { CarSpec, Segment } from '../../types/car';
import styles from './Card.module.css';

interface CardImageProps {
  car: CarSpec;
  segment: Segment;
}

export function CardImage({ car, segment }: CardImageProps) {
  const gradient = `linear-gradient(145deg, ${segment.gradientStart} 0%, ${segment.gradientEnd} 100%)`;

  if (car.image) {
    return (
      <div className={styles.imageArea} style={{ background: gradient }}>
        <div className={styles.imageGlow} />
        <img src={car.image} alt={`${car.maker} ${car.name}`} className={styles.carImage} />
        <div className={styles.brandLabel}>{car.maker}</div>
      </div>
    );
  }

  return (
    <div className={styles.imageArea} style={{ background: gradient }}>
      <div className={styles.imageGlow} />
      <svg className={styles.silhouette} viewBox="0 0 260 90" fill="none">
        <ellipse cx="130" cy="82" rx="120" ry="6" fill="rgba(0,0,0,0.25)" />
        <path
          d="M30 62 C30 62 45 28 80 22 C95 19 165 19 180 22 C215 28 230 62 230 62 L235 62 C240 62 242 65 242 68 L242 72 C242 75 240 76 237 76 L220 76 C218 76 216 74 215 72 C213 68 208 65 200 65 L60 65 C52 65 47 68 45 72 C44 74 42 76 40 76 L23 76 C20 76 18 75 18 72 L18 68 C18 65 20 62 25 62 Z"
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
        />
        <path
          d="M68 60 C68 60 78 32 95 27 C105 24 155 24 165 27 C182 32 192 60 192 60"
          fill="rgba(150,200,255,0.08)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.8"
        />
        <circle cx="62" cy="70" r="12" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="62" cy="70" r="7" fill="rgba(40,50,65,0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        <circle cx="198" cy="70" r="12" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="198" cy="70" r="7" fill="rgba(40,50,65,0.8)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        <rect x="35" y="56" width="18" height="6" rx="2" fill="rgba(255,200,100,0.2)" stroke="rgba(255,200,100,0.3)" strokeWidth="0.5" />
        <rect x="207" y="56" width="18" height="6" rx="2" fill="rgba(255,80,80,0.2)" stroke="rgba(255,80,80,0.3)" strokeWidth="0.5" />
      </svg>
      <div className={styles.brandLabel}>{car.maker}</div>
    </div>
  );
}
