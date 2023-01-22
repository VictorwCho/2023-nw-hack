import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSubListingComponent } from './find-sub-listing.component';

describe('FindSubListingComponent', () => {
  let component: FindSubListingComponent;
  let fixture: ComponentFixture<FindSubListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindSubListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindSubListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
