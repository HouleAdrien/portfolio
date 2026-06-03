import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './components/component.module';
import { TranslocoRootModule } from './transloco-root.module';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PresentationPageComponent } from './pages/presentation-page/presentation-page.component';

@NgModule({
  declarations: [AppComponent, ProjectsPageComponent, PresentationPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
