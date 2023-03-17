import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSideBarComponent } from './case-side-bar.component';

describe('CaseSideBarComponent', () => {
  let component: CaseSideBarComponent;
  let fixture: ComponentFixture<CaseSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
