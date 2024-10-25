import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebVitalsService } from './services/web-vitals.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';

  constructor(public webVitals: WebVitalsService) {
    console.log(this.webVitals);
  }
}
