import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonThemeComponent } from './components/main/pages/button-theme/button-theme.component';
import { FormLoginComponent } from './components/main/pages/form-login/form-login.component';
import { GalleryComponent } from './components/main/pages/gallery/gallery.component';
import { IndexComponent } from './components/main/pages/index/index.component';
import { LoadingComponent } from './components/main/pages/loading/loading.component';
import { ParticleJsComponent } from './components/main/pages/particle-js/particle-js.component';
import { QuizComponent } from './components/main/pages/quiz/quiz.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'button-theme', component: ButtonThemeComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'particle-js', component: ParticleJsComponent},
  {path: 'form-login', component: FormLoginComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'quiz', component: QuizComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
