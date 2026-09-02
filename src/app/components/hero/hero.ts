import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PORTFOLIO_DATA } from '../../data/portfolio-data';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  themeService = inject(ThemeService);
  protected readonly profile = PORTFOLIO_DATA;
}
