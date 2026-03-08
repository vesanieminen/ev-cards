import { useState, useEffect, useCallback } from 'react';
import { Shuffle } from 'lucide-react';
import { cars } from '../data/cars';
import { getSegment } from '../data/segments';
import { useRandomCard } from '../hooks/useRandomCard';
import { Card } from '../components/Card';
import styles from './RandomCardPage.module.css';

export function RandomCardPage() {
  const { car, shuffle } = useRandomCard(cars);
  const [animating, setAnimating] = useState(false);

  const handleShuffle = useCallback(() => {
    setAnimating(true);
    setTimeout(() => {
      shuffle();
      setAnimating(false);
    }, 200);
  }, [shuffle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleShuffle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleShuffle]);

  if (!car) return null;

  return (
    <div className={styles.page}>
      <div className={`${styles.cardWrapper} ${animating ? styles.animating : ''}`}>
        <Card car={car} segment={getSegment(car.segmentId)} size="large" />
      </div>
      <button className={styles.shuffleButton} onClick={handleShuffle}>
        <Shuffle size={18} />
        Shuffle
      </button>
      <p className={styles.hint}>
        {car.maker} {car.name} — Quartet {car.quartetId}{car.quartetLetter}
      </p>
    </div>
  );
}
