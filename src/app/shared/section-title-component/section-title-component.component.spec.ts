import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTitleComponentComponent } from './section-title-component.component';

describe('SectionTitleComponentComponent', () => {
  let component: SectionTitleComponentComponent;
  let fixture: ComponentFixture<SectionTitleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTitleComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTitleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
