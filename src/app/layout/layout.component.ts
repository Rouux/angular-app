import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidenav = false;
  isDark = true;

  constructor() {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    this.sidenav = !this.sidenav;
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
  }

}
