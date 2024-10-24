import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuItem } from '../menu.model';
import { SubmenuComponent } from '../submenu/submenu.component';
import { MENU_ITEMS } from './sidebar-data';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule, SubmenuComponent,NgIconComponent],
  templateUrl: './sidebar.component.html',
  viewProviders: [provideIcons({ heroUsers })]
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }
  @Input() showTooltip: boolean = false;
  sideNavCollapsed = signal(false);

  menuItems = signal(MENU_ITEMS);


  toggleSubmenu(item: MenuItem) {
    console.log(this.sideNavCollapsed)
    const updatedItems = this.menuItems().map((menuItem) => {
      if (menuItem === item) {
        return { ...menuItem, expanded: !menuItem.expanded };
      }
      return menuItem;
    });
    this.menuItems.set(updatedItems);
  }
}
