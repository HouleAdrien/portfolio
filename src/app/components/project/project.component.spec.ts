import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import { Project } from '../../models/projectmodel';
import { getTranslocoModule } from '../../testing/transloco-testing.module';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  const sample: Project = {
    name: 'Sample',
    description: 'A test project',
    kind: 'pro',
    year: '2024',
    stack: ['Angular'],
    thumbnail: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
      declarations: [ProjectComponent],
    });
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    component.project = sample;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
