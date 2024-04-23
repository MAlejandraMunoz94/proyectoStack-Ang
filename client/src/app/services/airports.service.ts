import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportResult } from '../interfaces/airport';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  constructor(private http: HttpClient) {}

  getAllAirports() {
    return this.http.get<AirportResult>('http://localhost:3001/airports');
  }

  getAirportByCity(cityCode: string) {
    return this.http.get<AirportResult>(
      'http://localhost:3001/airports/' + cityCode
    );
  }
}
