import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCarouselComponent } from './product-list-carousel.component';

describe('ProductListCarouselComponent', () => {
  let component: ProductListCarouselComponent;
  let fixture: ComponentFixture<ProductListCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListCarouselComponent]
    });
    fixture = TestBed.createComponent(ProductListCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
