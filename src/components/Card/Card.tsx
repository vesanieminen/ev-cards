import { Battery, Zap, Gauge, Timer, Weight } from 'lucide-react';
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
  const iconSize = size === 'print' ? 12 : 14;

  return (
    <div
      className={`${styles.card} ${styles[size]}`}
      onClick={onClick}
      style={{ '--segment-color': segment.color } as React.CSSProperties}
    >
      <div className={styles.sidebar} />

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.quartetBadge} style={{ backgroundColor: segment.color }}>
            {quartetLabel}
          </div>
          <div className={styles.segmentLabel}>{segment.name}</div>
          <div className={styles.flag}>
            <CountryFlag countryCode={car.countryCode} />
          </div>
        </div>

        <CardImage car={car} segment={segment} />

        <div className={styles.carInfo}>
          <div className={styles.maker}>{car.maker}</div>
          <div className={styles.carName}>{car.name}</div>
        </div>

        <div className={styles.stats}>
          <StatRow
            icon={<Battery size={iconSize} />}
            label="Range"
            value={formatNumber(car.specs.rangeKm)}
            unit="km"
          />
          <StatRow
            icon={<Zap size={iconSize} />}
            label="Consumption"
            value={formatConsumption(car.specs.consumptionKwhPer100km)}
            unit="kWh/100km"
          />
          <StatRow
            icon={<Gauge size={iconSize} />}
            label="Power"
            value={formatNumber(car.specs.powerKw)}
            unit="kW"
          />
          <StatRow
            icon={<Timer size={iconSize} />}
            label="0-100 km/h"
            value={formatAcceleration(car.specs.acceleration0to100)}
            unit="s"
          />
          <StatRow
            icon={<Weight size={iconSize} />}
            label="Weight"
            value={formatNumber(car.specs.weightKg)}
            unit="kg"
          />
        </div>
      </div>
    </div>
  );
}
