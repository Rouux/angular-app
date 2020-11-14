import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Output() toggleSidenav: EventEmitter<void> = new EventEmitter();

  @Output() toggleTheme: EventEmitter<void> = new EventEmitter();

  @Input() isDark = false;

  constructor(private router: Router) { }

  navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  onToggleSidenav(): void {
    this.toggleSidenav.next();
  }

  onToggleTheme(): void {
    this.toggleTheme.next();
  }
}
