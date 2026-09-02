import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  name = PORTFOLIO_DATA.name;
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
