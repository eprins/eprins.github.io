import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PORTFOLIO_DATA } from './data/portfolio-data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the header and hero content', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Check for the presence of main section tags
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-hero')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();

    // Verify name rendering in the hero section
    const greetingText = compiled.querySelector('.greeting')?.textContent;
    expect(greetingText).toContain("Hi, I'm");
    expect(greetingText).toContain(PORTFOLIO_DATA.name);
  });
});
