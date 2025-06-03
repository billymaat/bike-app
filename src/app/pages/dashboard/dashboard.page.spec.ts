import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage } from './dashboard.page';

describe('DashboardComponent', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
