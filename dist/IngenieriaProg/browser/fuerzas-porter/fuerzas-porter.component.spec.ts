import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuerzasPorterComponent } from './fuerzas-porter.component';

describe('FuerzasPorterComponent', () => {
  let component: FuerzasPorterComponent;
  let fixture: ComponentFixture<FuerzasPorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuerzasPorterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuerzasPorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
