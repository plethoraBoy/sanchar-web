import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuItem } from '../menu.model';
import { SubmenuComponent } from '../submenu/submenu.component';
import { MENU_ITEMS } from './sidebar-data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule, SubmenuComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  sideNavCollapsed = signal(false);
  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));

  menuItems = signal(MENU_ITEMS);


  toggleSubmenu(item: MenuItem) {
    const updatedItems = this.menuItems().map((menuItem) => {
      if (menuItem === item) {
        return { ...menuItem, expanded: !menuItem.expanded };
      }
      return menuItem;
    });
    this.menuItems.set(updatedItems);
  }
}
