import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { PORTFOLIO_DATA, Skill } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatCardModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  protected readonly profile = PORTFOLIO_DATA;
  protected readonly categories: Skill['category'][] = ['Frontend', 'Backend', 'DevOps/Tools', 'Skills'];

  get bioParagraphs(): string[] {
    return this.profile.detailedBio.split('\n').map(p => p.trim()).filter(p => p.length > 0);
  }

  getSkillsByCategory(category: Skill['category']): Skill[] {
    return this.profile.skills.filter(s => s.category === category);
  }
}
