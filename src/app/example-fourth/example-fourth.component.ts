import { Component } from '@angular/core';

@Component({
  selector: 'app-example-fourth',
  imports: [],
  templateUrl: './example-fourth.component.html',
  styleUrl: './example-fourth.component.css',
})
export class ExampleFourthComponent {
  codeSnippet = `Limit two-way data binding and instead use one-way data binding whenever possible.
  For example, use [property] binding instead of [(ngModel)] for static content.`;

  codeSnippet2 = `export class DetachedComponent {
  constructor(private cdr: ChangeDetectorRef) {
    // Detach change detection for this component
    this.cdr.detach();
  }

  // Example: Manually trigger change detection
  triggerChangeDetection() {
    this.cdr.detectChanges();
  }

  // Example: Reattach change detection
  reattachChangeDetection() {
    this.cdr.reattach();
  }
}`;
}
