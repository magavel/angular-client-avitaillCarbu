import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationNewComponent } from './station-new.component';

describe('StationNewComponent', () => {
  let component: StationNewComponent;
  let fixture: ComponentFixture<StationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
