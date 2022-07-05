import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainercomponentComponent } from './containercomponent.component';

describe('ContainercomponentComponent', () => {
  let component: ContainercomponentComponent;
  let fixture: ComponentFixture<ContainercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainercomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
