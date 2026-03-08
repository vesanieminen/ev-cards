import { FilterState } from '../../types/car';
import { cars } from '../../data/cars';
import { segments } from '../../data/segments';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  resultCount: number;
  totalCount: number;
}

const allMakers = [...new Set(cars.map((c) => c.maker))].sort();

export function FilterBar({ filters, onChange, resultCount, totalCount }: FilterBarProps) {
  const update = (partial: Partial<FilterState>) => {
    onChange({ ...filters, ...partial });
  };

  const toggleMaker = (maker: string) => {
    const makers = filters.makers.includes(maker)
      ? filters.makers.filter((m) => m !== maker)
      : [...filters.makers, maker];
    update({ makers });
  };

  const toggleSegment = (segmentId: string) => {
    const segs = filters.segments.includes(segmentId)
      ? filters.segments.filter((s) => s !== segmentId)
      : [...filters.segments, segmentId];
    update({ segments: segs });
  };

  const hasActiveFilters =
    filters.searchQuery ||
    filters.makers.length > 0 ||
    filters.segments.length > 0 ||
    filters.rangeMin !== null ||
    filters.rangeMax !== null ||
    filters.accelerationMin !== null ||
    filters.accelerationMax !== null ||
    filters.weightMin !== null ||
    filters.weightMax !== null;

  const resetFilters = () => {
    onChange({
      makers: [],
      segments: [],
      rangeMin: null,
      rangeMax: null,
      accelerationMin: null,
      accelerationMax: null,
      weightMin: null,
      weightMax: null,
      searchQuery: '',
    });
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.searchRow}>
        <input
          type="text"
          placeholder="Search cars..."
          value={filters.searchQuery}
          onChange={(e) => update({ searchQuery: e.target.value })}
          className={styles.searchInput}
        />
        <span className={styles.resultCount}>
          {resultCount} of {totalCount} cards
        </span>
        {hasActiveFilters && (
          <button className={styles.resetButton} onClick={resetFilters}>
            Reset
          </button>
        )}
      </div>

      <div className={styles.filtersRow}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Maker</label>
          <div className={styles.chipGroup}>
            {allMakers.map((maker) => (
              <button
                key={maker}
                className={`${styles.chip} ${filters.makers.includes(maker) ? styles.chipActive : ''}`}
                onClick={() => toggleMaker(maker)}
              >
                {maker}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Segment</label>
          <div className={styles.chipGroup}>
            {segments.map((seg) => (
              <button
                key={seg.id}
                className={`${styles.chip} ${filters.segments.includes(seg.id) ? styles.chipActive : ''}`}
                onClick={() => toggleSegment(seg.id)}
                style={
                  filters.segments.includes(seg.id)
                    ? { backgroundColor: seg.color, borderColor: seg.color }
                    : {}
                }
              >
                {seg.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.rangeFilters}>
          <div className={styles.rangeGroup}>
            <label className={styles.filterLabel}>Range (km)</label>
            <div className={styles.rangeInputs}>
              <input
                type="number"
                placeholder="Min"
                value={filters.rangeMin ?? ''}
                onChange={(e) => update({ rangeMin: e.target.value ? Number(e.target.value) : null })}
                className={styles.rangeInput}
              />
              <span className={styles.rangeSep}>-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.rangeMax ?? ''}
                onChange={(e) => update({ rangeMax: e.target.value ? Number(e.target.value) : null })}
                className={styles.rangeInput}
              />
            </div>
          </div>

          <div className={styles.rangeGroup}>
            <label className={styles.filterLabel}>0-100 km/h (s)</label>
            <div className={styles.rangeInputs}>
              <input
                type="number"
                placeholder="Min"
                step="0.1"
                value={filters.accelerationMin ?? ''}
                onChange={(e) => update({ accelerationMin: e.target.value ? Number(e.target.value) : null })}
                className={styles.rangeInput}
              />
              <span className={styles.rangeSep}>-</span>
              <input
                type="number"
                placeholder="Max"
                step="0.1"
                value={filters.accelerationMax ?? ''}
                onChange={(e) => update({ accelerationMax: e.target.value ? Number(e.target.value) : null })}
                className={styles.rangeInput}
              />
            </div>
          </div>

          <div className={styles.rangeGroup}>
            <label className={styles.filterLabel}>Weight (kg)</label>
            <div className={styles.rangeInputs}>
              <input
                type="number"
                placeholder="Min"
                value={filters.weightMin ?? ''}
                onChange={(e) => update({ weightMin: e.target.value ? Number(e.target.value) : null })}
                className={styles.rangeInput}
              />
              <span className={styles.rangeSep}>-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.weightMax ?? ''}
                onChange={(e) => update({ weightMax: e.target.value ? Number(e.target.value) : null })}
                className={styles.rangeInput}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
