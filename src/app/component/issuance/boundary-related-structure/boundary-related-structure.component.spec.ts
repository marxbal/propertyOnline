import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundaryRelatedStructureComponent } from './boundary-related-structure.component';

describe('BoundaryRelatedStructureComponent', () => {
  let component: BoundaryRelatedStructureComponent;
  let fixture: ComponentFixture<BoundaryRelatedStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoundaryRelatedStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundaryRelatedStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
