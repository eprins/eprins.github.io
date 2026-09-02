import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './interests.html',
  styleUrl: './interests.scss'
})
export class InterestsComponent {
  interests = PORTFOLIO_DATA.interests;
}
