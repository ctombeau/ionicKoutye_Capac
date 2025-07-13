import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatailAppartementPage } from './datail-appartement.page';

describe('DatailAppartementPage', () => {
  let component: DatailAppartementPage;
  let fixture: ComponentFixture<DatailAppartementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatailAppartementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
