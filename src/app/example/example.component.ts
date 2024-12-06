import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TestService } from '../services/test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExampleComponent implements OnInit {
  private __testService = inject(TestService);

  protected users$ = this.__testService.getUsers();
  loading = true;

  ngOnInit(): void {
    this.users$.subscribe((response) => {
      console.log(response);
      this.loading = false;
    });
  }
}
