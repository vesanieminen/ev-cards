import { CarSpec } from '../../types/car';
import { getSegment } from '../../data/segments';
import { Card } from '../Card';
import styles from './CardGrid.module.css';

interface CardGridProps {
  cars: CarSpec[];
}

export function CardGrid({ cars }: CardGridProps) {
  if (cars.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No cars match your filters.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {cars.map((car) => (
        <Card
          key={car.id}
          car={car}
          segment={getSegment(car.segmentId)}
        />
      ))}
    </div>
  );
}
