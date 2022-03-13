import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatoreComponent } from './navigatore.component';

describe('NavigatoreComponent', () => {
  let component: NavigatoreComponent;
  let fixture: ComponentFixture<NavigatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
