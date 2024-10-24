// card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() appearance: 'outlined' | 'raised' = 'raised';
  @Input() customClass = '';
  
  // Header Inputs
  @Input() showHeader = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() avatarUrl = '';
  @Input() avatarAlt = '';
  
  // Image Input
  @Input() imageUrl = '';
  @Input() imageAlt = '';
  
  // Content Input
  @Input() content = '';
  @Input() showContent = true;
  
  // Actions Input
  @Input() showActions = false;
  @Input() actionsAlign: 'start' | 'end' = 'start';
  
  // Footer Input
  @Input() showFooter = false;
}
