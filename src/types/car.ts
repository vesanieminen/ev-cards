export interface CarSpec {
  id: string;
  name: string;
  maker: string;
  countryCode: string;
  segmentId: string;
  quartetId: string;
  quartetLetter: string;
  image?: string;
  specs: {
    rangeKm: number;
    consumptionKwhPer100km: number;
    powerKw: number;
    acceleration0to100: number;
    weightKg: number;
  };
}

export interface Segment {
  id: string;
  name: string;
  quartetNumber: string;
  color: string;
  gradientStart: string;
  gradientEnd: string;
}

export interface FilterState {
  makers: string[];
  segments: string[];
  rangeMin: number | null;
  rangeMax: number | null;
  accelerationMin: number | null;
  accelerationMax: number | null;
  weightMin: number | null;
  weightMax: number | null;
  searchQuery: string;
}
