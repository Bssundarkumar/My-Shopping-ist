import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopppingListDetailsComponent } from './shoppping-list-details.component';

describe('ShopppingListDetailsComponent', () => {
  let component: ShopppingListDetailsComponent;
  let fixture: ComponentFixture<ShopppingListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopppingListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopppingListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
