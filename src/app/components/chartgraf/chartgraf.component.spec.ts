import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartgrafComponent } from './chartgraf.component';

describe('ChartgrafComponent', () => {
  let component: ChartgrafComponent;
  let fixture: ComponentFixture<ChartgrafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartgrafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartgrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
