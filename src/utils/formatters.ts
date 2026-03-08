export function formatNumber(value: number, decimals = 0): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatConsumption(value: number): string {
  return value.toFixed(1);
}

export function formatAcceleration(value: number): string {
  return value.toFixed(1);
}
