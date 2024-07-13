import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWithTextComponentComponent } from './icon-with-text-component.component';

describe('IconWithTextComponentComponent', () => {
  let component: IconWithTextComponentComponent;
  let fixture: ComponentFixture<IconWithTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconWithTextComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconWithTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
