import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaimaaLougsariComponent } from './chaimaa-lougsari.component';

describe('ChaimaaLougsariComponent', () => {
  let component: ChaimaaLougsariComponent;
  let fixture: ComponentFixture<ChaimaaLougsariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaimaaLougsariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaimaaLougsariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
