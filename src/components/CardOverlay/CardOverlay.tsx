import { useEffect, useState, useCallback } from 'react';
import { X } from 'lucide-react';
import { CarSpec } from '../../types/car';
import { getSegment } from '../../data/segments';
import { Card } from '../Card';
import styles from './CardOverlay.module.css';

interface CardOverlayProps {
  car: CarSpec;
  onClose: () => void;
}

export function CardOverlay({ car, onClose }: CardOverlayProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setActive(true));
    });
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = useCallback(() => {
    setActive(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div
      className={`${styles.overlay} ${active ? styles.active : ''}`}
      onClick={handleBackdropClick}
    >
      <button className={styles.closeButton} onClick={handleClose}>
        <X size={20} />
      </button>
      <div className={styles.cardWrapper}>
        <Card car={car} segment={getSegment(car.segmentId)} size="large" />
      </div>
    </div>
  );
}
