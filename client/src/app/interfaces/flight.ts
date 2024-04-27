import { Airport } from './airport';

export interface Airline {
  fs: string;
  iata: string;
  icao: string;
  name: string;
  active: boolean;
}

export interface Flight {
  flightId: number;
  carrierFsCode: string;
  flightNumber: string;
  departureAirportFsCode: string;
  arrivalAirportFsCode: string;
  departureDate: {
    dateUtc: Date;
    dateLocal: string;
  };
  arrivalDate: {
    dateUtc: Date;
    dateLocal: string;
  };
  status: string;
  schedule: {
    flightType: string;
    serviceClasses: string;
    restrictions: string;
    uplines: string;
    downlines: string;
  };
  operationalTimes: {
    publishedDeparture: {
      dateUtc: Date;
      dateLocal: Date;
    };
    scheduledGateDeparture: {
      dateUtc: Date;
      dateLocal: Date;
    };
    flightPlanPlannedDeparture: {
      dateUtc: Date;
      dateLocal: Date;
    };
    scheduledRunwayDeparture: {
      dateUtc: Date;
      dateLocal: Date;
    };
    publishedArrival: {
      dateUtc: Date;
      dateLocal: Date;
    };
    flightPlanPlannedArrival: {
      dateUtc: Date;
      dateLocal: Date;
    };
    scheduledGateArrival: {
      dateUtc: Date;
      dateLocal: Date;
    };
    scheduledRunwayArrival: {
      dateUtc: Date;
      dateLocal: Date;
    };
  };
  codeshares: [];
  delays: {};
  flightDurations: {
    airMinutes: number;
    scheduledBlockMinutes: number;
    scheduledAirMinutes: number;
    scheduledTaxiOutMinutes: number;
    scheduledTaxiInMinutes: number;
  };
  airportResources: {
    arrivalGate: string;
    departureGate: string;
    departureTerminal: string;
  };
  flightEquipment: {
    scheduledEquipmentIataCode: string;
    actualEquipmentIataCode: string;
  };
}

export interface FlightsResult {
  request: {
    hourOfDay: {
      requested: string;
      interpreted: number;
    };
    utc: {
      requested: string;
      interpreted: boolean;
    };
    numHours: {
      requested: string;
      interpreted: number;
    };
    maxFlights: {
      requested: string;
      interpreted: number;
    };
    url: string;
    nonstopOnly: {
      interpreted: boolean;
    };
    airport: {
      requestedCode: string;
      fsCode: string;
    };
    date: {
      year: string;
      month: string;
      day: string;
      interpreted: string;
    };
    extendedOptions: {
      requested: string;
      interpreted: string;
    };
  };
  appendix: {
    airlines: Airline[];
    airports: Airport[];
    equipments: [
      {
        iata: string;
        name: string;
        turboProp: boolean;
        jet: boolean;
        widebody: boolean;
        regional: boolean;
      }
    ];
  };
  flightStatuses: Flight[];
}
