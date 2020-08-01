import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetCardComponent } from './weather-widget-card.component';

describe('WeatherWidgetCardComponent', () => {
  let component: WeatherWidgetCardComponent;
  let fixture: ComponentFixture<WeatherWidgetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWidgetCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
