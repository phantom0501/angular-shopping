import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TredingProductComponent } from './treding-product.component';

describe('TredingProductComponent', () => {
  let component: TredingProductComponent;
  let fixture: ComponentFixture<TredingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TredingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TredingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
