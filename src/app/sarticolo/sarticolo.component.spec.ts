import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarticoloComponent } from './sarticolo.component';

describe('SarticoloComponent', () => {
  let component: SarticoloComponent;
  let fixture: ComponentFixture<SarticoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarticoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
