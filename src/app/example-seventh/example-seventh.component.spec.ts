import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSeventhComponent } from './example-seventh.component';

describe('ExampleSeventhComponent', () => {
  let component: ExampleSeventhComponent;
  let fixture: ComponentFixture<ExampleSeventhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleSeventhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleSeventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
