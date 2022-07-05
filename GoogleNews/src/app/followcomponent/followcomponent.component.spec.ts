import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowcomponentComponent } from './followcomponent.component';

describe('FollowcomponentComponent', () => {
  let component: FollowcomponentComponent;
  let fixture: ComponentFixture<FollowcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
