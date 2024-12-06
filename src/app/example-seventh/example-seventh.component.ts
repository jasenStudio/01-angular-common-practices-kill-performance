import { Component } from '@angular/core';

@Component({
  selector: 'app-example-seventh',
  imports: [],
  templateUrl: './example-seventh.component.html',
  styleUrl: './example-seventh.component.css',
})
export class ExampleSeventhComponent {
  codeSnippet = `<div *ngFor="let item of users$ | async"> <= pipe async
  {{ item.name }} </div>
`;

  codeSnippet2 = `
<ul>
  <li *ngFor="let item of items; trackBy: trackById">
    {{ item.name }}
  </li>
</ul>`;
}
