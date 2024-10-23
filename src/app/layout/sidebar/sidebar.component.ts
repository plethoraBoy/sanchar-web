import { Component, Input, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavItem, navItems } from './sidebar-data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  sideNavCollapsed = signal(false);
  navItems: any = navItems;

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  constructor() {}

  ngOnInit(): void {}
}
