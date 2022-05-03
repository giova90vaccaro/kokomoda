import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcategoriaComponent } from './srcategoria.component';

describe('SrcategoriaComponent', () => {
  let component: SrcategoriaComponent;
  let fixture: ComponentFixture<SrcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
