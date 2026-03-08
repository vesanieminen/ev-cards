import { CarSpec, Segment } from '../../types/car';
import { formatNumber, formatConsumption, formatAcceleration } from '../../utils/formatters';
import { CardImage } from './CardImage';
import { StatRow } from './StatRow';
import { CountryFlag } from './CountryFlag';
import styles from './Card.module.css';

interface CardProps {
  car: CarSpec;
  segment: Segment;
  size?: 'normal' | 'large' | 'print';
  onClick?: () => void;
}

export function Card({ car, segment, size = 'normal', onClick }: CardProps) {
  const quartetLabel = `${car.quartetId}${car.quartetLetter}`;
  const consumptionWhKm = Math.round(car.specs.consumptionKwhPer100km * 10);

  return (
    <div
      className={`${styles.card} ${styles[size]}`}
      onClick={onClick}
    >
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.quartetBadge}>{quartetLabel}</div>
          <span className={styles.segmentLabel}>{segment.name}</span>
        </div>
        <div className={styles.flag}>
          <CountryFlag countryCode={car.countryCode} />
        </div>
      </div>

      <CardImage car={car} segment={segment} />

      <div className={styles.titleSection}>
        <div className={styles.maker}>{car.maker}</div>
        <div className={styles.carName}>{car.name}</div>
      </div>

      <div className={styles.stats}>
        <StatRow
          icon="⚡"
          label="Range"
          value={formatNumber(car.specs.rangeKm)}
          unit="km"
        />
        <StatRow
          icon="⚙"
          label="Consumption"
          value={formatNumber(consumptionWhKm)}
          unit="Wh/km"
        />
        <StatRow
          icon="🔋"
          label="Power"
          value={formatNumber(car.specs.powerKw)}
          unit="kW"
        />
        <StatRow
          icon="⏱"
          label="0–100 km/h"
          value={formatAcceleration(car.specs.acceleration0to100)}
          unit="s"
        />
        <StatRow
          icon="⚖"
          label="Weight"
          value={formatNumber(car.specs.weightKg)}
          unit="kg"
        />
      </div>
    </div>
  );
}
