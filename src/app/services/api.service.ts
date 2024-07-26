import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Pagination } from '../../types';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization:
      environment.tokenString,
  });

  get<T>(url: string,params?:Pagination): Observable<T> {
    return this.httpClient.get<T>(url, {headers:this.headers}) as Observable<T>;
  }

  post<T,U>(url:string,body:U):Observable<T>{
    return this.httpClient.post<T>(url,body,{headers:this.headers}) as Observable<T>
  }
}
