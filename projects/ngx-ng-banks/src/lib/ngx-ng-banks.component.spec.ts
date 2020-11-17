import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNgBanksComponent } from './ngx-ng-banks.component';

describe('NgxNgBanksComponent', () => {
  let component: NgxNgBanksComponent;
  let fixture: ComponentFixture<NgxNgBanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNgBanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNgBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
