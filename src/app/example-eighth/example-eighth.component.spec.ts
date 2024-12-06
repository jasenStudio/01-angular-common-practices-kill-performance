import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleEighthComponent } from './example-eighth.component';

describe('ExampleEighthComponent', () => {
  let component: ExampleEighthComponent;
  let fixture: ComponentFixture<ExampleEighthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleEighthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleEighthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
