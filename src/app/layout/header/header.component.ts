import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  computed,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, SharedModule],
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  @Input() collapsed = false;
  @Output() menuToggled = new EventEmitter<void>();

}
