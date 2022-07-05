import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnewscomponentComponent } from './mainnewscomponent.component';

describe('MainnewscomponentComponent', () => {
  let component: MainnewscomponentComponent;
  let fixture: ComponentFixture<MainnewscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainnewscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainnewscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
