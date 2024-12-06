import { Component } from '@angular/core';

@Component({
  selector: 'app-example-eighth',
  imports: [],
  templateUrl: './example-eighth.component.html',
  styleUrl: './example-eighth.component.css',
})
export class ExampleEighthComponent {
  codeSnippet = ` <!-- Bad Practice --> <p>{{ calculateHeavyOperation() }}</p>
    <!-- Good Practice --> <p>{{ cachedValue }}</p>`;
}
