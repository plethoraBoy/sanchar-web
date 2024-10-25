import { Injectable } from '@angular/core';
import {onCLS, onINP, onLCP} from 'web-vitals';

@Injectable({
  providedIn: 'root'
})
export class WebVitalsService {

  constructor() {
    this.logVitals();
  }

  logVitals(): void {
    onCLS(console.log);
onINP(console.log);
onLCP(console.log);
    // getCLS(this.sendToAnalytics);
    // getFID(this.sendToAnalytics);
    // getLCP(this.sendToAnalytics);
  }

  sendToAnalytics(metric: any): void {
    console.log(metric);
  }
}
