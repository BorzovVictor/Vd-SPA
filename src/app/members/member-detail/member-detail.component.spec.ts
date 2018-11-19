import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetaialComponent } from './member-detail.component';

describe('MemberDetaialComponent', () => {
  let component: MemberDetaialComponent;
  let fixture: ComponentFixture<MemberDetaialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDetaialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetaialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
