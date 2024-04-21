export interface Airport {
  fs: string;
  iata: string;
  icao: string;
  name: string;
  city: string;
  cityCode: string;
  stateCode: string;
  countryCode: string;
  countryName: string;
  regionName: string;
  timeZoneRegionName: String;
  localTime: Date;
  utcOffsetHours: Number;
  latitude: Number;
  longitude: Number;
  elevationFeet: Number;
  classification: Number;
  active: boolean;
  delayIndexUrl: string;
  weatherUrl: string;
}

export interface AirportResult {
  airports: Airport[];
}
