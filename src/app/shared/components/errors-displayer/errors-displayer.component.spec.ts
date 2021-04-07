import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsDisplayerComponent } from './errors-displayer.component';

describe('ErrorsDisplayerComponent', () => {
  let component: ErrorsDisplayerComponent;
  let fixture: ComponentFixture<ErrorsDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
