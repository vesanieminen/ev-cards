import { useState } from 'react';
import { cars } from '../data/cars';
import { CarSpec, FilterState } from '../types/car';
import { useFilteredCars, defaultFilters } from '../hooks/useFilteredCars';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CardGrid } from '../components/CardGrid/CardGrid';
import { CardOverlay } from '../components/CardOverlay/CardOverlay';

export function MainPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const filteredCars = useFilteredCars(cars, filters);
  const [selectedCar, setSelectedCar] = useState<CarSpec | null>(null);

  return (
    <>
      <FilterBar
        filters={filters}
        onChange={setFilters}
        resultCount={filteredCars.length}
        totalCount={cars.length}
      />
      <CardGrid cars={filteredCars} onCardClick={setSelectedCar} />
      {selectedCar && (
        <CardOverlay car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </>
  );
}
