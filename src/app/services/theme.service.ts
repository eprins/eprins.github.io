import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Use a signal to hold the current theme state.
  isDarkMode = signal<boolean>(false);

  constructor() {
    // Check local storage or system preference on initialization
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }

    // Effect to apply changes whenever the signal updates
    effect(() => {
      const dark = this.isDarkMode();
      const root = document.documentElement;
      const body = document.body;

      if (dark) {
        root.classList.add('dark-theme');
        body.style.colorScheme = 'dark';
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        root.classList.remove('dark-theme');
        body.style.colorScheme = 'light';
        localStorage.setItem('portfolio-theme', 'light');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.update(val => !val);
  }
}
