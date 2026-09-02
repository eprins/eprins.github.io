import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { EducationComponent } from './components/education/education';
import { ProjectsComponent } from './components/projects/projects';
import { InterestsComponent } from './components/interests/interests';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    InterestsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
