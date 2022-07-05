import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowtopiccomponentComponent } from './followtopiccomponent.component';

describe('FollowtopiccomponentComponent', () => {
  let component: FollowtopiccomponentComponent;
  let fixture: ComponentFixture<FollowtopiccomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowtopiccomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowtopiccomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
