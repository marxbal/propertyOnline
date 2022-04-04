import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBuildingComponent } from './location-building.component';

describe('LocationBuildingComponent', () => {
  let component: LocationBuildingComponent;
  let fixture: ComponentFixture<LocationBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
