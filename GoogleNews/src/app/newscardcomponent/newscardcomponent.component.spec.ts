import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscardcomponentComponent } from './newscardcomponent.component';

describe('NewscardcomponentComponent', () => {
  let component: NewscardcomponentComponent;
  let fixture: ComponentFixture<NewscardcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewscardcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewscardcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
