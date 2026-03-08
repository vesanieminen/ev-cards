import { Segment } from '../types/car';

export const segments: Segment[] = [
  {
    id: 'luxury-sedan',
    name: 'Luxury Sedans',
    quartetNumber: '1',
    color: '#1e3a5f',
    gradientStart: '#1e3a5f',
    gradientEnd: '#0f172a',
  },
  {
    id: 'compact-car',
    name: 'Compact Cars',
    quartetNumber: '2',
    color: '#16a34a',
    gradientStart: '#16a34a',
    gradientEnd: '#065f46',
  },
  {
    id: 'suv-crossover',
    name: 'SUVs / Crossovers',
    quartetNumber: '3',
    color: '#dc2626',
    gradientStart: '#dc2626',
    gradientEnd: '#991b1b',
  },
  {
    id: 'sports-performance',
    name: 'Sports / Performance',
    quartetNumber: '4',
    color: '#f59e0b',
    gradientStart: '#f59e0b',
    gradientEnd: '#d97706',
  },
  {
    id: 'premium-suv',
    name: 'Premium SUVs',
    quartetNumber: '5',
    color: '#7c3aed',
    gradientStart: '#7c3aed',
    gradientEnd: '#4c1d95',
  },
  {
    id: 'family-wagon',
    name: 'Family & Wagons',
    quartetNumber: '6',
    color: '#0891b2',
    gradientStart: '#0891b2',
    gradientEnd: '#155e75',
  },
  {
    id: 'budget-ev',
    name: 'Budget EVs',
    quartetNumber: '7',
    color: '#65a30d',
    gradientStart: '#65a30d',
    gradientEnd: '#3f6212',
  },
  {
    id: 'chinese-newcomer',
    name: 'Chinese Newcomers',
    quartetNumber: '8',
    color: '#e11d48',
    gradientStart: '#e11d48',
    gradientEnd: '#9f1239',
  },
];

export function getSegment(segmentId: string): Segment {
  return segments.find((s) => s.id === segmentId)!;
}
