import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  protected readonly profile = PORTFOLIO_DATA;
}
