import { Component, Input } from '@angular/core';
import { Movies } from '../../../types';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent {
  private imageUrlBase = 'https://image.tmdb.org/t/p/original';
  @Input() cover!: Movies;

  getImageUrl(path: string): string {
    return `${this.imageUrlBase}${path}`;
  }
}
