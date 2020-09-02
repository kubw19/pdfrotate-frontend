import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolComponent } from './tool.component';

describe('ToolComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ToolComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ToolComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pdfrotator'`, () => {
    const fixture = TestBed.createComponent(ToolComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pdfrotator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ToolComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('pdfrotator app is running!');
  });