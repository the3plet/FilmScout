import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { MovieResponse, Movies, Pagination, Rating} from '../../types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private apiService: ApiService) {}

  getMovies = (url: string,params:Pagination): Observable<MovieResponse> => {
    return this.apiService.get(url,params);
  };

  postMovieRating=(url:string,body:string):Observable<Rating>=>{
    return this.apiService.post(url,body)
  }
}
