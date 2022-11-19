import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapiroComponent } from './shapiro.component';

describe('ShapiroComponent', () => {
  let component: ShapiroComponent;
  let fixture: ComponentFixture<ShapiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
