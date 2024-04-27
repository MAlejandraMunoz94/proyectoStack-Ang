import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightsResult } from '../interfaces/flight';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor(private http: HttpClient) {}

  getFlights(code: string, date: string, hour: string) {
    return this.http.get<FlightsResult>(
      `http://localhost:3001/flights?code=${code}&date=${date}&hour=${hour}`
    );
  }
}
