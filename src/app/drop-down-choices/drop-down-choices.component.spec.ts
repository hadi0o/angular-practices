import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownChoicesComponent } from './drop-down-choices.component';

describe('DropDownChoicesComponent', () => {
  let component: DropDownChoicesComponent;
  let fixture: ComponentFixture<DropDownChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownChoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropDownChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
