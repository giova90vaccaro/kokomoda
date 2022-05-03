import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvenditeComponent } from './srvendite.component';

describe('SrvenditeComponent', () => {
  let component: SrvenditeComponent;
  let fixture: ComponentFixture<SrvenditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrvenditeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvenditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
