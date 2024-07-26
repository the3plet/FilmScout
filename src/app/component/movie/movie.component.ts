import { Component, Input } from '@angular/core';
import { Movies } from '../../../types';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  private imageUrlBase = `${environment.imageUrl}/w200`;
  @Input() movies!: Movies;

  getImageUrl(path: string): string {
    return `${this.imageUrlBase}${path}`;
  }
}
