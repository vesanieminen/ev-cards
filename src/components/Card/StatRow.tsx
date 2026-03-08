import { ReactNode } from 'react';
import styles from './Card.module.css';

interface StatRowProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  unit: string;
}

export function StatRow({ icon, label, value, unit }: StatRowProps) {
  return (
    <div className={styles.statRow}>
      <span className={styles.statIcon}>{icon}</span>
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statDots} />
      <span className={styles.statValue}>
        {value} <span className={styles.statUnit}>{unit}</span>
      </span>
    </div>
  );
}
