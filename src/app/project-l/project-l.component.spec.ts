import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLComponent } from './project-l.component';

describe('ProjectLComponent', () => {
  let component: ProjectLComponent;
  let fixture: ComponentFixture<ProjectLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
