import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { PORTFOLIO_DATA, Project } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = PORTFOLIO_DATA.projects;
  categories = ['All', 'Angular', 'Spring Boot', 'Node.js', 'Kubernetes', 'System Design', 'Legacy Modernization'];

  selectedCategory = signal<string>('All');

  filteredProjects = computed(() => {
    const activeCat = this.selectedCategory();
    if (activeCat === 'All') {
      return this.projects;
    }
    return this.projects.filter(p =>
      p.technologies.some(tech => tech.toLowerCase().includes(activeCat.toLowerCase()))
    );
  });

  setCategory(category: string) {
    this.selectedCategory.set(category);
  }
}
