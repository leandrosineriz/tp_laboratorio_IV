import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpmComponent } from './tpm.component';

describe('TpmComponent', () => {
  let component: TpmComponent;
  let fixture: ComponentFixture<TpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
