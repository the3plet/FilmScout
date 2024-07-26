import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieResponse, Movies } from '../../types';
import { MovieComponent } from '../component/movie/movie.component';
import { CommonModule } from '@angular/common';
import { CoverComponent } from '../component/cover/cover.component';
import { Router } from '@angular/router';
import { environment } from '../../environments/environments';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieComponent, CommonModule,CoverComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router,private movieService: MoviesService) {}
  listOfMovies: Movies[] = [];
  upcomingMovies: Movies[] = [];
  upcomingSeries:Movies[]=[];
  movieId:number|null=null;
  ngOnInit() {
    this.movieService
      .getMovies(`${environment.apiUrl}/trending/all/day`, { page: 1 })
      .subscribe({
        next:((movies: MovieResponse) => {
          this.listOfMovies = movies.results;
          console.log(movies);
        }),
        error:((err)=>console.log(err))
      })

    this.movieService
      .getMovies(`${environment.apiUrl}/movie/upcoming`, { page: 1 })
      .subscribe({
        next:((movies: MovieResponse) => {
          this.upcomingMovies = movies.results;
        }),
        error:((err)=>console.log(err))
      })
    this.movieService
      .getMovies(`${environment.apiUrl}/tv/airing_today`, { page: 1 })
      .subscribe({
        next:((movies: MovieResponse)=>{

          this.upcomingSeries = movies.results;
        }),
        error:((err)=>console.log(err))
      })

    }
    handleClick(movie: Movies) {
      this.router.navigate(['/movie-details'], { queryParams: { id: movie.id.toString() } });
  }
}
