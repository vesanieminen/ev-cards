import { useState } from 'react';
import { cars } from '../data/cars';
import { FilterState } from '../types/car';
import { useFilteredCars, defaultFilters } from '../hooks/useFilteredCars';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CardGrid } from '../components/CardGrid/CardGrid';

export function MainPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const filteredCars = useFilteredCars(cars, filters);

  return (
    <>
      <FilterBar
        filters={filters}
        onChange={setFilters}
        resultCount={filteredCars.length}
        totalCount={cars.length}
      />
      <CardGrid cars={filteredCars} />
    </>
  );
}
