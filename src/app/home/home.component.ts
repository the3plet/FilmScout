import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieResponse, Movies } from '../../types';
import { MovieComponent } from '../component/movie/movie.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private movieService: MoviesService) {}
  listOfMovies: Movies[] = [];
  ngOnInit() {
    this.movieService
      .getMovies('https://api.themoviedb.org/3/trending/all/day', { page: 1 })
      .subscribe((movies: MovieResponse) => {
        this.listOfMovies=movies.results
        console.log(movies)
      });
  }
}
