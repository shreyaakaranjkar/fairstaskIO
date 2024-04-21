import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsdashboardComponent } from './fairsdashboard.component';

describe('FairsdashboardComponent', () => {
  let component: FairsdashboardComponent;
  let fixture: ComponentFixture<FairsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
