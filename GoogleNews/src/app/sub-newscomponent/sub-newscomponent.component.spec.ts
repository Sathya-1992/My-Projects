import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNewscomponentComponent } from './sub-newscomponent.component';

describe('SubNewscomponentComponent', () => {
  let component: SubNewscomponentComponent;
  let fixture: ComponentFixture<SubNewscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubNewscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubNewscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
