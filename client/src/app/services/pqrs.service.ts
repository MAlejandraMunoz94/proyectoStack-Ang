import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PqrsBBDD } from '../interfaces/pqrs';

@Injectable({
  providedIn: 'root',
})
export class PqrsService {
  baseURL = 'http://localhost:3001/PQR/'

  constructor(private http: HttpClient) {}

  postPQR(id: string, pqr: {}) {
    return this.http.post<string>(this.baseURL + id, pqr);
  }

  getPQR(id: string) {
    return this.http.get<PqrsBBDD[]>(this.baseURL + id);
  }

  deletePQR(id: string) {
    return this.http.delete<string>(this.baseURL+ id);
  }
}
