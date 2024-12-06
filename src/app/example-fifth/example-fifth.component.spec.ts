import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFifthComponent } from './example-fifth.component';

describe('ExampleFifthComponent', () => {
  let component: ExampleFifthComponent;
  let fixture: ComponentFixture<ExampleFifthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleFifthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
