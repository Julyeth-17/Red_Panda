import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaDetallesComponent } from './grilla-detalles.component';

describe('GrillaDetallesComponent', () => {
  let component: GrillaDetallesComponent;
  let fixture: ComponentFixture<GrillaDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrillaDetallesComponent]
    });
    fixture = TestBed.createComponent(GrillaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
