import { useState, useCallback } from 'react';
import { CarSpec } from '../types/car';

export function useRandomCard(cars: CarSpec[]) {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * cars.length));

  const shuffle = useCallback(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cars.length);
    } while (newIndex === index && cars.length > 1);
    setIndex(newIndex);
  }, [cars.length, index]);

  return { car: cars[index] ?? null, shuffle };
}
