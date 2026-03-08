import { CarSpec, Segment } from '../../types/car';
import styles from './Card.module.css';

interface CardImageProps {
  car: CarSpec;
  segment: Segment;
}

export function CardImage({ car, segment }: CardImageProps) {
  if (car.image) {
    return (
      <div className={styles.imageContainer}>
        <img src={car.image} alt={`${car.maker} ${car.name}`} className={styles.carImage} />
      </div>
    );
  }

  return (
    <div
      className={styles.imageContainer}
      style={{
        background: `linear-gradient(135deg, ${segment.gradientStart}, ${segment.gradientEnd})`,
      }}
    >
      <div className={styles.imagePlaceholder}>
        <svg viewBox="0 0 120 60" className={styles.carSilhouette}>
          <path
            d="M10 45 L20 45 L25 35 L40 25 L55 20 L80 20 L95 25 L105 35 L110 45 L10 45 Z"
            fill="rgba(255,255,255,0.15)"
          />
          <circle cx="30" cy="45" r="8" fill="rgba(255,255,255,0.2)" />
          <circle cx="90" cy="45" r="8" fill="rgba(255,255,255,0.2)" />
        </svg>
        <span className={styles.placeholderText}>{car.maker}</span>
      </div>
    </div>
  );
}
