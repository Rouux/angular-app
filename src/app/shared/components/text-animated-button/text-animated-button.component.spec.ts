import { ComponentsModule } from '../components.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnimatedButtonComponent } from './text-animated-button.component';

describe('TextAnimatedButtonComponent', () => {
  let component: TextAnimatedButtonComponent;
  let fixture: ComponentFixture<TextAnimatedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnimatedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
