import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { PORTFOLIO_DATA } from '../../data/portfolio-data';

const COMPANY_LOGOS: Record<string, string> = {
  'FedEx': '/logos/fedex.jpg',
  'IMC Logistics': '/logos/imc-logistics.jpg',
  'Optimal Learning Lab': '/logos/optimal-learning-lab.svg'
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences = (() => {
    let side: 'left' | 'right' = 'left';
    let previousCompany: string | null = null;

    return PORTFOLIO_DATA.experience.map(exp => {
      if (previousCompany !== null && exp.company !== previousCompany) {
        side = side === 'left' ? 'right' : 'left';
      }
      previousCompany = exp.company;
      return { ...exp, side, logo: COMPANY_LOGOS[exp.company] };
    });
  })();
}
