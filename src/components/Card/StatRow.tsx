import styles from './Card.module.css';

interface StatRowProps {
  icon: string;
  label: string;
  value: string | number;
  unit: string;
}

export function StatRow({ icon, label, value, unit }: StatRowProps) {
  return (
    <div className={styles.statRow}>
      <div className={styles.statLeft}>
        <span className={styles.statIcon}>{icon}</span>
        <span className={styles.statLabel}>{label}</span>
      </div>
      <div className={styles.statValueGroup}>
        <span className={styles.statValue}>{value}</span>
        <span className={styles.statUnit}>{unit}</span>
      </div>
    </div>
  );
}
