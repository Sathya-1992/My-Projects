import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponentComponent } from './container-component.component';

describe('ContainerComponentComponent', () => {
  let component: ContainerComponentComponent;
  let fixture: ComponentFixture<ContainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
