import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class VerificateService {
  constructor(private http: HttpClient) {}

  getUser(email: string): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3001/user/' + email);
  }
}
