import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportResult } from '../interfaces/airport';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  constructor(private http: HttpClient) {}

  getAirports(): Observable<AirportResult> {
    return this.http.get<AirportResult>('http://localhost:3001/airports');
  }
}
