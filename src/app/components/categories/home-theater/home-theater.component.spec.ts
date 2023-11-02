import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTheaterComponent } from './home-theater.component';

describe('HomeTheaterComponent', () => {
  let component: HomeTheaterComponent;
  let fixture: ComponentFixture<HomeTheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTheaterComponent]
    });
    fixture = TestBed.createComponent(HomeTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
