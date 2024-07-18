import { Component, Input } from '@angular/core';
import { Movies } from '../../../types';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  private imageUrlBase = 'https://image.tmdb.org/t/p/w200';
  @Input() movies!: Movies;

  getImageUrl(path: string): string {
    return `${this.imageUrlBase}${path}`;
  }
}
