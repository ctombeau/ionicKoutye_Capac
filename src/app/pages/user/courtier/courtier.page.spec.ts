import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourtierPage } from './courtier.page';

describe('CourtierPage', () => {
  let component: CourtierPage;
  let fixture: ComponentFixture<CourtierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CourtierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
