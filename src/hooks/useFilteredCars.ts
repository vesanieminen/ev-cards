import { useMemo } from 'react';
import { CarSpec, FilterState } from '../types/car';

export const defaultFilters: FilterState = {
  makers: [],
  segments: [],
  rangeMin: null,
  rangeMax: null,
  accelerationMin: null,
  accelerationMax: null,
  weightMin: null,
  weightMax: null,
  searchQuery: '',
};

export function useFilteredCars(allCars: CarSpec[], filters: FilterState): CarSpec[] {
  return useMemo(() => {
    return allCars.filter((car) => {
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const match =
          car.name.toLowerCase().includes(q) ||
          car.maker.toLowerCase().includes(q);
        if (!match) return false;
      }

      if (filters.makers.length > 0 && !filters.makers.includes(car.maker)) {
        return false;
      }

      if (filters.segments.length > 0 && !filters.segments.includes(car.segmentId)) {
        return false;
      }

      if (filters.rangeMin !== null && car.specs.rangeKm < filters.rangeMin) {
        return false;
      }
      if (filters.rangeMax !== null && car.specs.rangeKm > filters.rangeMax) {
        return false;
      }

      if (filters.accelerationMin !== null && car.specs.acceleration0to100 < filters.accelerationMin) {
        return false;
      }
      if (filters.accelerationMax !== null && car.specs.acceleration0to100 > filters.accelerationMax) {
        return false;
      }

      if (filters.weightMin !== null && car.specs.weightKg < filters.weightMin) {
        return false;
      }
      if (filters.weightMax !== null && car.specs.weightKg > filters.weightMax) {
        return false;
      }

      return true;
    });
  }, [allCars, filters]);
}
