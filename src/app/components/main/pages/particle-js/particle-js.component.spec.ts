import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleJsComponent } from './particle-js.component';

describe('ParticleJsComponent', () => {
  let component: ParticleJsComponent;
  let fixture: ComponentFixture<ParticleJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticleJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticleJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
