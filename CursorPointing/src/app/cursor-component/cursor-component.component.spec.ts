import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorComponentComponent } from './cursor-component.component';

describe('CursorComponentComponent', () => {
  let component: CursorComponentComponent;
  let fixture: ComponentFixture<CursorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
