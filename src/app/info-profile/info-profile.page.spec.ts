import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoProfilePage } from './info-profile.page';

describe('InfoProfilePage', () => {
  let component: InfoProfilePage;
  let fixture: ComponentFixture<InfoProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
