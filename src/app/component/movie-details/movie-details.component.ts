// movie-details.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../../types';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  imports:[CommonModule]
})
export class MovieDetailsComponent implements OnInit {
  movieId: string | null = null;
  movieDetails: MovieDetails | null = null;
  private imageUrlBase = 'https://image.tmdb.org/t/p/original';
  
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit() {
    // Get movie id from query parameter
    this.route.queryParams.subscribe(params => {
      this.movieId = params['id'];
      if (this.movieId) {
        this.fetchMovieDetails();
      }
    });
  }

  fetchMovieDetails() {
    this.movieService.getMovieDetails(`https://api.themoviedb.org/3/movie/${this.movieId}`).subscribe({
      next: (data: MovieDetails) => {
        console.log(data);
        this.movieDetails = data;
      },
      error: (err:any) => console.log(err)
    });
  }

  getImageUrl(path: string): string {
    return `${this.imageUrlBase}${path}`;
  }
}
