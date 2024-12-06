import { Component, signal } from '@angular/core';

@Component({
  selector: 'shared-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  year = signal(new Date().getFullYear());
  url = `https://medium.com/@erickzanetti/common-practices-that-kill-performance-in-angular-applications-e0a25a5870cd`;
}
