import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpisComponent } from './kpis.component';

describe('KpisComponent', () => {
  let component: KpisComponent;
  let fixture: ComponentFixture<KpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
