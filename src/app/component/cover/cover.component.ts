import { Component, Input } from '@angular/core';
import { Movies } from '../../../types';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss'
})
export class CoverComponent {
  private imageUrlBase = `${environment.imageUrl}original`;
  @Input() cover!: Movies;

  getImageUrl(path: string): string {
    return `${this.imageUrlBase}${path}`;
  }
}
