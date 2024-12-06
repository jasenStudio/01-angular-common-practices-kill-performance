import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFourthComponent } from './example-fourth.component';

describe('ExampleFourthComponent', () => {
  let component: ExampleFourthComponent;
  let fixture: ComponentFixture<ExampleFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleFourthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
