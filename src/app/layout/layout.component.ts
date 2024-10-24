import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { signal, computed } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SubmenuComponent } from './submenu/submenu.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule, SubmenuComponent, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));
  showTooltip = computed(() => this.sidenavWidth() === '65px');
}
