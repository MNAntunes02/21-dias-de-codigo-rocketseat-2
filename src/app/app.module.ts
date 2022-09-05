import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles"
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


//Component
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/main/pages/index/index.component';
import { LoadingComponent } from './components/main/pages/loading/loading.component';
import { ButtonThemeComponent } from './components/main/pages/button-theme/button-theme.component';
import { ParticleJsComponent } from './components/main/pages/particle-js/particle-js.component';
import { FormLoginComponent } from './components/main/pages/form-login/form-login.component';
import { GalleryComponent } from './components/main/pages/gallery/gallery.component';
import { QuizComponent } from './components/main/pages/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoadingComponent,
    ButtonThemeComponent,
    ParticleJsComponent,
    FormLoginComponent,
    GalleryComponent,
    QuizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    NgParticlesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
