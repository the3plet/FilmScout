import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Pagination } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjdiNmU1NzQ4YzkxNDI4OThiNGRkM2Y2N2M5ZmY5OCIsIm5iZiI6MTcyMTIyNDc0My4zMzk5ODMsInN1YiI6IjY2OTdjYTlhMDE4YWE5MmQxZTIyZTVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ak2Er1n1aF-8uaARQNbMbou0qH3ukZTzlldk2piaj40',
  });

  get<T>(url: string,params:Pagination): Observable<T> {
    return this.httpClient.get<T>(url, {headers:this.headers}) as Observable<T>;
  }
}
