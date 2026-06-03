import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from './testing/transloco-testing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ComponentModule,
        getTranslocoModule(),
      ],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('starts with the mobile menu closed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.showMenu).toBe(false);
  });
});
