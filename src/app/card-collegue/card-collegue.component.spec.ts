import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollegueComponent } from './card-collegue.component';

describe('CardCollegueComponent', () => {
  let component: CardCollegueComponent;
  let fixture: ComponentFixture<CardCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
