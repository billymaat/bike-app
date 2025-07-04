import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventComponent } from './edit-event.page';

describe('EditEventPage', () => {
  let component: EditEventComponent;
  let fixture: ComponentFixture<EditEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
