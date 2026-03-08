import * as Flags from 'country-flag-icons/react/3x2';

interface CountryFlagProps {
  countryCode: string;
}

export function CountryFlag({ countryCode }: CountryFlagProps) {
  const FlagComponent = (Flags as Record<string, React.ComponentType<{ title?: string; className?: string }>>)[countryCode];
  if (!FlagComponent) {
    return <span>{countryCode}</span>;
  }
  return <FlagComponent title={countryCode} className="country-flag" />;
}
