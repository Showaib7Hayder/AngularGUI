import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpearmanComponent } from './spearman.component';

describe('SpearmanComponent', () => {
  let component: SpearmanComponent;
  let fixture: ComponentFixture<SpearmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpearmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpearmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
