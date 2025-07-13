import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailAppartementPage } from './detail-appartement.page';

describe('DetailAppartementPage', () => {
  let component: DetailAppartementPage;
  let fixture: ComponentFixture<DetailAppartementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailAppartementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
