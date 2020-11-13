import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() open = false;

  @Output() closeSidenav: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {}

  closing(): void {
    if(this.open) this.closeSidenav.next();
  }
}
