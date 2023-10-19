import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCoreComponent } from './detalle-core.component';

describe('DetalleCoreComponent', () => {
  let component: DetalleCoreComponent;
  let fixture: ComponentFixture<DetalleCoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCoreComponent]
    });
    fixture = TestBed.createComponent(DetalleCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
