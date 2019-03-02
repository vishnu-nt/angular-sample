import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentConfigurationComponent } from './component-configuration.component';

describe('ComponentConfigurationComponent', () => {
  let component: ComponentConfigurationComponent;
  let fixture: ComponentFixture<ComponentConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
