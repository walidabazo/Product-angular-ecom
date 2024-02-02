import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarBarComponent } from './var-bar.component';

describe('VarBarComponent', () => {
  let component: VarBarComponent;
  let fixture: ComponentFixture<VarBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VarBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
