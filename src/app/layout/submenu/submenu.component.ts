import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuItem } from '../menu.model';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss'
})
export class SubmenuComponent {
  @Input() item!: MenuItem;
  @Input() collapsed = false;
  @Output() toggleExpanded = new EventEmitter<void>();
}
