import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PqrsBBDD } from '../interfaces/pqrs';

@Injectable({
  providedIn: 'root',
})
export class PqrsService {
  constructor(private http: HttpClient) {}

  postPQR(id: string, pqr: {}) {
    return this.http.post<string>('http://localhost:3001/PQR/' + id, pqr);
  }

  getPQR(id: string) {
    return this.http.get<PqrsBBDD[]>('http://localhost:3001/PQR/' + id);
  }

  deletePQR(id: string) {
    return this.http.delete<string>('http://localhost:3001/PQR/' + id);
  }
}
