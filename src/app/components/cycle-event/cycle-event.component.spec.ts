import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleEventComponent } from './cycle-event.component';

describe('CycleEventComponent', () => {
  let component: CycleEventComponent;
  let fixture: ComponentFixture<CycleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycleEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
