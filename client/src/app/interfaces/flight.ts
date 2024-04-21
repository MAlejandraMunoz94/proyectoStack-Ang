export interface Flight {
  flightId: number;
  carrierFsCode: string;
  flightNumber: string;
  departureAirportFsCode: string;
  arrivalAirportFsCode: string;
  departureDate: {
    dateLocal: Date;
    dateUtc: Date;
  };
  arrivalDate: {
    dateLocal: Date;
    dateUtc: Date;
  };
  status: string;
  operationalTimes: {
    flightPlanPlannedDeparture: {
      dateLocal: Date;
      dateUtc: Date;
    };
    estimatedRunwayDeparture: {
      dateLocal: Date;
      dateUtc: Date;
    };
    estimatedGateArrival: {
      dateLocal: Date;
      dateUtc: Date;
    };
    flightPlanPlannedArrival: {
      dateLocal: Date;
      dateUtc: Date;
    };
    estimatedRunwayArrival: {
      dateLocal: Date;
      dateUtc: Date;
    };
  };
  flightDurations: {
    scheduledAirMinutes: number;
  };
}
