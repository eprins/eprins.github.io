import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { PORTFOLIO_DATA } from '../../data/portfolio-data';

const SCHOOL_LOGOS: Record<string, string> = {
  'The University of Memphis': '/logos/university-of-memphis.jpg'
};

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  education = PORTFOLIO_DATA.education.map(edu => ({
    ...edu,
    logo: SCHOOL_LOGOS[edu.school]
  }));
}
